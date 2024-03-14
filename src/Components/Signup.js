import React, {useState,useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import NoteContext from '../context/Notes/NoteContext';

const Signup = (props) => {
  
  const host = "http://localhost:5000"
  const navigate = useNavigate();
  const [credentials,setCredentials]=useState({name : "",email : "",pass : ""})
  const Change=(e)=>{
    setCredentials({...credentials,[e.target.name]:[e.target.value]});
  }
  
  const p = useContext(NoteContext);
  const {showAlert} = p;
  
  const Submit=async (e)=>{
    e.preventDefault();
      const {name,email,pass}=credentials;
      const nam = name.toString();
      const mail = email.toString();
      const passw=pass.toString();
      try{
        const response = await fetch(`${host}/auth/signup`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
              },
          body: JSON.stringify({name : nam,email : mail,password : passw,description : "none"}),
        });
        const res = await response.json();
        
        if(res.success){
          localStorage.setItem('token',res.authToken);
          showAlert("Signup success","success")
          navigate("/");
        }
        else showAlert("Signup Failed","warning")
      }
      catch(err){
        console.log(err)
      }
 
  }

  return (
    <div className='container'>
      <form onSubmit={Submit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Enter your full name</label>
          <input type="text" className="form-control" id="name" name="name" value={credentials.name} onChange={Change}/>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name="email" value={credentials.email} onChange={Change}/>
        </div>
        <div className="mb-3">
          <label htmlFor="pass" className="form-label">Password</label>
          <input type="password" className="form-control" id="pass" name="pass" value={credentials.pass} onChange={Change} minLength={5} required/>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="check1" required/>
          <label className="form-check-label" htmlFor="check1">I agree to terms and conditions</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Signup
