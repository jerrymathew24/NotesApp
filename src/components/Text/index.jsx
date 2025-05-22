import ShowNotes from "../ShowNotes";
import { useNotes } from "../../context/notes-context";

const Text = () => {
  const { title, text, notes, notesDispatch } = useNotes();
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
          className="focus:outline-none border-b-0 p-1"
          type="text"
          placeholder="Enter Title"
        />
        <textarea
          value={text}
          onChange={onTextChange}
          className="focus:outline-none border-b-0 p-1"
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
      <div className="flex gap-4 flex-wrap">
        {notes?.length > 0 &&
          notes.map(({ id, title, text, isPinned }) => <ShowNotes key={id} id={id} title={title} text={text} isPinned={isPinned} />)}
      </div>
    </div>
  );
};
export default Text;
