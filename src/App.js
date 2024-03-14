import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar';
import NoteState from './context/Notes/NoteState';
function App() {

  return (
    <>
    { /* Since we are passing arguments and props through context api, at the main file, where components are available and used widely, they should be wrapped inside the name of the context component.
    In this case it is <NoteState></NoteState> */ }
    <NoteState>
    <Navbar/>
    <Outlet/>
    </NoteState>
    </>
  );
}

export default App;
