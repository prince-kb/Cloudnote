import React, { useContext, useEffect, useRef} from "react";
import { Link,useLocation, useNavigate} from "react-router-dom";
import NoteContext from "../context/Notes/NoteContext";
import Alert from "./Alert"

function Navbar() {
  const navigate = useNavigate();
  let location = useLocation();
  useEffect(()=>{
    // console.log(location.pathname)
  })
  const ref = useRef(null);
  const p = useContext(NoteContext);
  const {alert,showAlert}=p;

  const hidenav=(e)=>{
    ref.current.click();
  }
  const handleLogout=()=>{
    localStorage.removeItem('token');
    showAlert("Logged OUT","success");
    navigate("/");
  }
    return (
      <div className=''>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <Link to="" className="navbar-brand "><h3 className="h3 fw-bold">Cloud NoteBook</h3></Link>

          <button ref={ref}
            className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-3">
              <li>
                <Link onClick={hidenav} to="" className={`nav-link px-2 fw-bold  ${location === "/" ? "active": ""}`}>Home</Link>
              </li>
              <li>
                <Link onClick={hidenav} to="about" className={`nav-link px-2 fw-bold nav-link ${location === "/about" ? "active": ""}`}>About</Link>
              </li>
              <li>
                <Link onClick={hidenav} to="contact" className={`nav-link px-2 fw-bold nav-link ${location === "/contact" ? "active": ""}`}>Contact</Link>
              </li>
              <li>
                <Link onClick={hidenav} to="mynotes" className={`nav-link px-2 fw-bold nav-link ${location === "/mynotes" ? "active": ""}`}>Notes</Link>
              </li>
              
            </ul>
          </div>
          
          {!localStorage.getItem('token') ? <div className="">
            <ul className="d-flex ">
            <Link to="login"className=" btn btn-outline-success me-2 ">Login</Link>
            <Link to="signup" className=" btn btn-outline-secondary ">Signup</Link>
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
