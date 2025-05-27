import { v4 as uuid } from "uuid";

const notesReducer = (state, action) => {
  switch (action.type) {
    case "TITLE":
      return {
        ...state,
        title: action.payload,
      };
    case "TEXT":
      return {
        ...state,
        text: action.payload,
      };
    case "ADD_NOTE":
      return {
        ...state,
        notes: [
          ...state.notes,
          { title: state.title, text: state.text, id: uuid(), isPinned: false },
        ],
      };
    case "CLEAR_NOTES":
      return {
        ...state,
        title: "",
        text: "",
      };
    case "PIN":
      return {
        ...state,
        notes: state.notes.map(note =>
          note.id === action.payload.id
            ? { ...note, isPinned: !note.isPinned }
            : note
        ),
      };
    case "UNPIN":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id
            ? { ...note, isPinned: !note.isPinned }
            : note
        ),
      };
    case "ARCHIVE":
      return {
        ...state,
        archive:[...state.archive, state.notes.find(({id}) => id === action.payload.id)],
        notes: state.notes.filter( ({id}) => id !== action.payload.id)
      }
    default:
      return state;
  }
};
export default notesReducer;
