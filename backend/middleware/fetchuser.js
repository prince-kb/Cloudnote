const jwt = require("jsonwebtoken");
//This line should not be declared clearly, it should be hidden
const jwwwtoken = "hiiieyo";

const fetchuser = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "Authorization revoked" });
  }
  try {
    const data = jwt.verify(token, jwwwtoken);
    req.user = data.user;
    next();
  } catch {
    res.status(401).send({ error: "Authorization revoked" });
  }
};

module.exports = fetchuser;