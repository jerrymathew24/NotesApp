import { useReducer } from "react";
import notesReducer from "../../Reducers/notesReducer";
import ShowNotes from "../ShowNotes";

const Text = () => {
  const initialState = {
    title: "",
    text: "",
    notes: [],
  };

  const [{ title, text, notes }, notesDispatch] = useReducer(
    notesReducer,
    initialState
  );

  const onTitleChange = (e) => {
    notesDispatch({ type: "TITLE", payload: e.target.value });
  };

  const onTextChange = (e) => {
    notesDispatch({ type: "TEXT", payload: e.target.value });
  };

  const onAddClick = () => {
    notesDispatch({ type: "ADD_NOTE" });
    notesDispatch({ type: "CLEAR_NOTES" });
  };
  console.log(notes, "notes");

  return (
    <div>
      <div className="flex flex-col w-[400px] relative border-1 border-gray-500 rounded-md p-5 mt-5">
        <input
          value={title}
          onChange={onTitleChange}
          className=""
          type="text"
          placeholder="Enter Title"
        />
        <textarea
          value={text}
          onChange={onTextChange}
          className=""
          name=""
          id=""
          placeholder="Enter Text"
        />
        <button
          disabled={!title.length > 0}
          onClick={onAddClick}
          className="bg-gray-500 text-white p-2 rounded-md absolute bottom-5 right-5"
        >
          Add
        </button>
      </div>
      <ShowNotes notes={notes} />
    </div>
  );
};
export default Text;
