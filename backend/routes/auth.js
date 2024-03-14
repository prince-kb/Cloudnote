const express = require("express");
const router = express.Router();
const User = require("../models/User");
//It should b einstalled seperately
const { body, validationResult } = require("express-validator");

//Middleware
const fetchuser = require("../middleware/fetchuser");
//To encrypt a password we use the following package
const bcryptjs = require("bcryptjs");
// router.get('/',(req,res)=>{
//     const a = {
//         str : "hiiiiiioioioioioio",
//         num : 34
//     }
//     // res.json(a);
//     res.send(req.body)
// })

//Using jsonwebtoken to simplify login process and not dealing with security
//It basically generates a token for signing in and has three parts - Header,payload and signature
var jwt = require("jsonwebtoken");
const jwwwtoken = "hiiieyo";

//To add data (here we are adding login information) 'post' is used majorly
//First route : To signup user
//Uses express-validator to check password and data and bcryptjs to save password to be unavailable directly
router.post(
  "/signup",
  [
    body("name").notEmpty(),
    body("email").isEmail(),
    body("password", "Password length must be greater than 4").isLength({
      min: 4,
    }),
  ],
  async (req, res) => {
    let success = false;
    const result = validationResult(req);
    if (!result.isEmpty()) {
      res.send({ success: success, errors: result.array() });
    }

    //Both bcryptjs lines return a promise, so we need to add await
    //Salt will add additional strings to be generated to the hash table
    const salt = await bcryptjs.genSalt(10);
    const p = req.body.password.toString();
    //This will generate a hash table for my password so that if my database is stolen, password cannot be retrieved or cannot be matched using a rainbow table
    const securePassword = await bcryptjs.hash(p, salt);

    try {
      //This line should must be declared await
      let user = await User.findOne({ email: req.body.password });
      if (user) {
        //We cannot tell users that this email already exist as this will help attackers in some way
        //Instead we will just response by some error occured
        return res.status(400).json({
          success: success,
          error: "Invalid credentials",
          message: "Try using another email",
        });
      }
      //User is a schema defined in another js file
      //user is a variable and it will be send as response to save the data
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: securePassword,
        description: req.body.description,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, jwwwtoken);
      success = true;

      //This line will return the user as response
      // res.send("Added user : " + req.body.name)
      res.json({ success, authToken });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: success,
        error: "Some error occured from our side",
        message: "We are trying to fix it",
      });
    }
    //We can also use .then and .catch if we are not using an await request
    /*         .then(user=>{res.json(user)
            console.log("User added")
        })
        .catch(err=>{console.log(err)
        res.json({error : 'Enter unique attributes', message : err.message });
    }) */
  }
);

//Second Route : Login user requires bcrypt js to check password and returns jsonwebtokens
router.post(
  "/login",
  [body("email").isEmail(), body("password").exists()],
  async (req, res) => {
    let success = false;
    const result = validationResult(req);
    if (!result.isEmpty()) {
      res.send({ success, error: "Invalid email or password" });
    }
    const { email, password } = req.body;
    //Since passed password is not string
    const pppp = password.toString();
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ success: success, error: "Invalid credentials" });
      }

      //Comparison password provided during login and password stored using hash table
      const passComparison = await bcryptjs.compare(pppp, user.password);

      if (!passComparison) {
        return res
          .status(400)
          .json({ success: success, error: "Invalid credentials" });
      }
      //Returning id as json because retrieval of data from id is faster
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, jwwwtoken);
      success = true;
      res.json({ success, authToken });
    } catch (error) {
      return res.status(500).json({
        success: success,
        error: "Some error occured from our side",
        message: "We are trying to fix it",
      });
    }
  }
);

//Third Route : To give user details on successful login using web token
//Using fetchuser function as middleware to authenticate user
router.post("/getuserid", fetchuser, async (req, res) => {
  let userId = req.user.id;
  let l = await User.findById(userId);
  if (!l) {
    return res.status(401).send("Internal server error");
  }
  try {
    let userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(401).send("Internal server error");
  }
});

//My special route to get information of all users
router.get("/getallusers", async (req, res) => {
  let data = await User.find().select("-password");
  try {
    res.json(data);
  } catch (error) {
    return res.status(300).json("ERROR");
  }
});
module.exports = router;
