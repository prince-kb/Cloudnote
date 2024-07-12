const mongoose = require('mongoose');
// const mongoURL="mongodb://localhost:27017/usersData";
// const mongoURL="mongodb+srv://princejaj67:lfrtds1ycG9CXmjc@cluster0.jheu6iu.mongodb.net/usersData"

// const connectToMongo=async()=>{
  //     await mongoose.connect(mongoURL)
  //     .then(console.log("CONNECTED"))
  //     .catch(err,()=>{console.log("Cannot connect")})
  // }
  async function connectToMongo() {
  const mongoURL = process.env.PORT
    await mongoose.connect(mongoURL)
    .then(()=> console.log("Connected to Database successful"))
    .catch(err => console.log(`Cannot connect ${mongoURL} does not exist `+err));
  }
module.exports=connectToMongo;