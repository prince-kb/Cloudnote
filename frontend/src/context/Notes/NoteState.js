import { useState} from "react";
import NoteContext from "./NoteContext";

const NoteState = (props)=>{
  //Since we are using host:5000 for backend, we will need the same and not host:3000 which is for our frontend
    const host = "http://localhost:5000"
    // useEffect(() => {
    //   fetchmyNotes();
    // }, [])

    const [alert, setAlert] = useState();

    const showAlert=(msg,type)=>{
      setAlert({
        message : msg,
        type : type
      })
        setTimeout(()=>{
          setAlert("")
        },2000);
      }

    const allNotes = [
        {
          "_id": "fakeid1",
          "user": "none",
          "title": "Login to see your notes",
          "notes": "Example noteeee",
          "tag": "default",
          "date": new Date(),
          "__v": 0
        }
      ]

      const [notee, setNotes] = useState(allNotes)
      const fetchmyNotes=async()=>{
            try{          
            const response = await fetch(`${host}/notes/fetchnotes`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "auth-token" : localStorage.getItem('token')
            }
          });
          if(response){
            const n = await response.json();
            localStorage.getItem('token') && setNotes(n);
          }
        }
          catch(error){
            console.log("Error occured in fetching notes",error)
          }
        }
        
      //API calling for addnote functionality to mongodb
      const addNote=async (title,notes,tag)=>{
        try{
          const response = await fetch(`${host}/notes/addnote`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "auth-token" : localStorage.getItem('token')
            },
            body: JSON.stringify({title,notes,tag}),
          });
          const res = await response.json();
          setNotes(notee.concat(res));
        }
        catch(err){
          console.log(err)
        }
      }

      const deleteNote=async(id)=>{
        try{
        const response = await fetch(`${host}/notes/deletenote/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "auth-token" : localStorage.getItem('token')
          }
        });
        const res = await response.json();
        console.log("Note deleted",res)
        setNotes(notee.filter((allNotes)=>{return allNotes._id!==id}))
      }
      catch(err){
        console.log("Cannot delete note");
      }
      }

      const editNote=async(id,title,notes,tag)=>{

        try{
        let newNotes = JSON.parse(JSON.stringify(notee))
        for (let index = 0; index < newNotes.length; index++) {
          const element = newNotes[index];
          if(element._id===id){
            newNotes[index].title=title;
            newNotes[index].notes=notes;
            newNotes[index].tag=tag;
            break;
          }
          setNotes(newNotes)
        }

        await fetch(`${host}/notes/updatenote/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "auth-token" : localStorage.getItem('token'),
          },
          body : JSON.stringify({title,notes,tag})
        });
        fetchmyNotes();
      }
        catch(err){
          console.log("Error")
        }
      }

    return(
        /* Sending first and update as props to the NoteContext.Provider function so that it will also be passed to all the childrens */
        <NoteContext.Provider value={{notee,setNotes,addNote,deleteNote,editNote,fetchmyNotes,alert,setAlert,showAlert}}>
        {props.children}
        </NoteContext.Provider>
     )}
export default NoteState;