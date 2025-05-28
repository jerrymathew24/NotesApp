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
        notes: state.notes.map((note) =>
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
    case "ADD_TO_ARCHIVE":
      return {
        ...state,
        archive: [
          ...state.archive,
          state.notes.find(({ id }) => id === action.payload.id),
        ],
        notes: state.notes.filter(({ id }) => id !== action.payload.id),
      };
    case "REMOVE_FROM_ARCHIVE":
      return {
        ...state,
        notes: [
          ...state.notes,
          state.archive.find(({ id }) => id === action.payload.id),
        ],
        archive: state.archive.filter(({ id }) => id !== action.payload.id),
      };
    case "ADD_TO_IMPORTANT":
      return {
        ...state,
        important: [
          ...state.important,
          state.notes.find(({ id }) => id === action.payload.id),
        ],
        notes: state.notes.filter(({ id }) => id !== action.payload.id),
      };
    case "REMOVE_FROM_IMPORTANT":
      return {
        ...state,
        notes: [
          ...state.notes,
          state.important.find(({ id }) => id === action.payload.id),
        ],
        important: state.important.filter(({ id }) => id !== action.payload.id),
      };
   case "ADD_TO_BIN": {
  const noteToMove =
    state.notes.find(({ id }) => id === action.payload.id) ||
    state.archive.find(({ id }) => id === action.payload.id) ||
    state.important.find(({ id }) => id === action.payload.id);

  if (!noteToMove) return state;

  return {
    ...state,
    notes: state.notes.filter(({ id }) => id !== action.payload.id),
    archive: state.archive.filter(({ id }) => id !== action.payload.id),
    important: state.important.filter(({ id }) => id !== action.payload.id),
    bin: [...state.bin, noteToMove],
  };
}

    case "DELETE_FROM_BIN": {
      const noteToDelete = state.bin.find(({ id }) => id === action.payload.id);
      if (!noteToDelete) return state; // If not found, return state unchanged

      return {
        ...state,
        bin: state.bin.filter(({ id }) => id !== action.payload.id)
      };
    }

    default:
      return state;
  }
};
export default notesReducer;
