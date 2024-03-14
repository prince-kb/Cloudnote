import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import AllNotes from './Components/AllNotes';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import './index.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children : [
      {
        path : "",
        element : <Home/>
      },
      {
        path : "about",
        element : <About/>
      },
      {
        path : "contact",
        element : <Contact/>
      },
      {
        path : "mynotes",
        element : <AllNotes/>
      },
      {
        path : "login",
        element : <Login/>
      },
      {
        path : "signup",
        element : <Signup/>
      },
    ]
  }
])
root.render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>
);

