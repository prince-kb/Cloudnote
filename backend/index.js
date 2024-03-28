const connectToMongo = require('./db')
var cors = require('cors')
const express = require('express')
connectToMongo();
const app = express()
const port = 5000
 
// const corsConfig = {
//   origin: [ "https://cloudnote-bd.vercel.app/", "http://localhost:5000"],
//   credentials: true,
//   methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
//   allowedHeaders: ['Content-Type']
// };

app.use(express.json())
//Using cors will enable connection to backend using javascript and without actually using an anchor or href or link.
app.use(cors());

//res means response, req eans request

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//This line helps the app to not full depened on the current file and use another file to simplify
//So instead of get request , we areu= using use request
// app.use('/auth',require('./routes/auth'));
app.use('/auth',require('./routes/auth'));
app.use('/notes',require('./routes/notes'));
app.get('/none',(req,res)=>{
  res.send("RUNNING");
});
app.listen(port, () => {
  console.log(`Cloud NoteBook App listening on the port `)
})  