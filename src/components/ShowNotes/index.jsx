import { useNotes } from "../../context/notes-context";
import { findNotesInArchive } from "../../utils/findNotesInArchive";

function ShowNotes({ title, text, id, isPinned }) {
  const { notesDispatch, archive } = useNotes();

  const isNotesInArchive = findNotesInArchive(archive, id);

  const onPinClick = (id) => {
    !isPinned
      ? notesDispatch({ type: "PIN", payload: { id } })
      : notesDispatch({ type: "UNPIN", payload: { id } });
  };

  const onArchiveClick = (id) => {
    !isNotesInArchive
      ? notesDispatch({ type: "ADD_TO_ARCHIVE", payload: { id } })
      : notesDispatch({ type: "REMOVE_FROM_ARCHIVE", payload: { id } });
  };

  return (
    <div
      key={id}
      className="flex flex-col w-[300px] relative border-1 border-gray-500 rounded-sm p-5 mt-5 gap-3"
    >
      <div className="flex justify-between">
        <span className="text-xl font-bold">{title}</span>
        <button className="m-1" onClick={() => onPinClick(id)}>
          <span
            className={isPinned ? "material-icons" : "material-icons-outlined"}
          >
            push_pin
          </span>
        </button>
      </div>
      <div className="flex justify-between">
        <p>{text}</p>
        <div className="">
          <button className="m-1" onClick={() => onArchiveClick(id)}>
            <span
              className={
                isNotesInArchive ? "material-icons" : "material-icons-outlined"
              }
            >
              archive
            </span>
          </button>
          <button className="m-1">
            <span className="material-icons-outlined">delete_outline</span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default ShowNotes;
