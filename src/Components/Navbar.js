import React, { useContext, useEffect} from "react";
import { Link,useLocation, useNavigate} from "react-router-dom";
import NoteContext from "../context/Notes/NoteContext";
import Alert from "./Alert"

function Navbar() {
  const navigate = useNavigate();
  let location = useLocation();
  useEffect(()=>{
    // console.log(location.pathname)
  })
  
  const p = useContext(NoteContext);
  const {alert,showAlert}=p;

  const handleLogout=()=>{
    localStorage.removeItem('token');
    showAlert("Logged OUT","success");
    navigate("/");
  }
    return (
      <div className=''>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <Link to="" className="navbar-brand fw-bold">Cloud NoteBook</Link>

          <button
            className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li>
                <Link to="" className={`nav-link px-2 fw-bold  ${location === "/" ? "active": ""}`}>Home</Link>
              </li>
              <li>
                <Link to="about" className={`nav-link px-2 fw-bold nav-link ${location === "/about" ? "active": ""}`}>About</Link>
              </li>
              <li>
                <Link to="contact" className={`nav-link px-2 fw-bold nav-link ${location === "/contact" ? "active": ""}`}>Contact</Link>
              </li>
              <li>
                <Link to="mynotes" className={`nav-link px-2 fw-bold nav-link ${location === "/mynotes" ? "active": ""}`}>Notes</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled" aria-disabled="true">
                  Disabled
                </Link>
              </li>
            </ul>
          </div>
          
          {!localStorage.getItem('token') ?
           <div className="mx-4">
            <ul className="navbar-nav">
            <li><Link to="login"className="mx-1 btn btn-outline-success ">Login</Link></li>
            <li><Link to="signup" className="mx-1 btn btn-outline-secondary ">Signup</Link></li>
            </ul>
          </div>  : <button className="btn btn-primary" onClick={handleLogout}>LOGOUT</button>
           }
        </div>
      </nav>
      <div className="container">
        <Alert alert={alert}/>
      </div>
    </div>
  );
}

export default Navbar;
