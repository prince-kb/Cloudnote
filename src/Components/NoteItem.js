import React, { useContext} from "react";
import NoteContext from "../context/Notes/NoteContext";

function NoteItem(props) {
  const n = useContext(NoteContext);
  const {deleteNote,showAlert} = n;
  const { note,updateNote } = props;
  const changeDate = (x) => {
    return new Date(x).toGMTString();
  };

  return (
    <div className="col-md-3 my-3 mx-auto">
      {localStorage.getItem('token') ?
      <div className="card m-auto">
        <div className="card-body">
          <h2 className="card-title">{note.title}</h2>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            {changeDate(note.date)}
          </h6>
          <p className="card-text">{note.notes}</p>
          <i className="fa-solid fa-trash mx-2" onClick={()=>{deleteNote(note._id); showAlert("Note deleted","success")}} ></i>
          <i className="fa-regular fa-pen-to-square mx-2" onClick={()=>{updateNote(note)}}></i>
        </div>
      </div> : <h2 className="h2">No notes available</h2> }
    </div>
  );
}

export default NoteItem;
