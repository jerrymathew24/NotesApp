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

  const pinnedNotes =
    notes?.length > 0 && notes.filter(({ isPinned }) => isPinned);
  const otherNotes =
    notes?.length > 0 && notes.filter(({ isPinned }) => !isPinned);

  console.log(notes, "notes");

  return (
    <div className="flex flex-col justify-center w-screen mt-7">
      <div className="flex flex-col self-center w-[600px] relative border-1 border-gray-500 rounded-md p-5 mt-5">
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
          className="focus:outline-none border-b-0 p-1 h-[60px]"
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
      <div className="mt-12 ml-10">
        {pinnedNotes?.length > 0 && (
          <div className="">
            <h2 className="m-1 text-xl">Pinned Notes</h2>

            <div className="flex gap-4 flex-wrap">
              {pinnedNotes?.length > 0 &&
                pinnedNotes.map(({ id, title, text, isPinned }) => (
                  <ShowNotes
                    key={id}
                    id={id}
                    title={title}
                    text={text}
                    isPinned={isPinned}
                  />
                ))}
            </div>
          </div>
        )}
        <div className="">
          {pinnedNotes?.length > 0 && (
            <h2 className="m-1 mt-5 text-xl">Other Notes</h2>
          )}

          <div className="flex gap-5 flex-wrap">
            {otherNotes?.length > 0 &&
              otherNotes.map(({ id, title, text, isPinned }) => (
                <ShowNotes
                  key={id}
                  id={id}
                  title={title}
                  text={text}
                  isPinned={isPinned}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Text;
