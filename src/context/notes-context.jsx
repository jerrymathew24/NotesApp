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
  };

  const [{ title, text, notes, archive }, notesDispatch] = useReducer(
    notesReducer,
    initialState
  );

  console.log(archive, 'archive');
  console.log(notes, 'notes');
  
    return(
        <NotesContext.Provider value={{ title, text, notes, archive, notesDispatch }}>
            {children}
        </NotesContext.Provider>
    )
}

const useNotes = () => useContext(NotesContext);

export { NotesProvider, useNotes };
