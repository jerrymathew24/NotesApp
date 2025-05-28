import { createContext, useContext, useReducer } from "react";
import notesReducer from "../Reducers/notesReducer";
import { v4 as uuid } from "uuid";

const NotesContext = createContext();



const NotesProvider = ({ children }) => {

     const initialState = {
    title: "",
    text: "",
    notes: [],
    archive: [],
    important: [],
    bin:[]
  };

  const [{ title, text, notes, archive, important, bin }, notesDispatch] = useReducer(
    notesReducer,
    initialState
  );

  console.log(archive, 'archive');
  console.log(notes, 'notes');
  console.log(important, 'important');
  console.log(bin, 'bin');
  
  
  
    return(
        <NotesContext.Provider value={{ title, text, notes, archive, important, bin, notesDispatch }}>
            {children}
        </NotesContext.Provider>
    )
}

const useNotes = () => useContext(NotesContext);

export { NotesProvider, useNotes };
