import { useNotes } from "../../context/notes-context";
import { findNotesInArchive } from "../../utils/findNotesInArchive";
import { findNotesInBin } from "../../utils/findNotesInBin";
import { findNotesInImportant } from "../../utils/findNotesInImportant";

function ShowNotes({ title, text, id, isPinned }) {
  const { notesDispatch, archive, important, bin } = useNotes();

  const isNotesInArchive = findNotesInArchive(archive, id);
  const isNotesInImportant = findNotesInImportant(important, id);
  const isNotesInBin = findNotesInBin(bin, id);

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

  const onImportantClick = (id) => {
    !isNotesInImportant
      ? notesDispatch({ type: "ADD_TO_IMPORTANT", payload: { id } })
      : notesDispatch({ type: "REMOVE_FROM_IMPORTANT", payload: { id } });
  };

  const onBinClick = (id) => {
    notesDispatch({ type: "ADD_TO_BIN", payload: { id } });
  };

  const onDeleteClick = (id) => {
    notesDispatch({ type: "DELETE_FROM_BIN", payload: { id } });
  };

  return (
    <div
      key={id}
      className="flex flex-col w-[300px] relative border-1 border-gray-500 rounded-sm p-5 mt-5 gap-3"
    >
      <div className="flex justify-between">
        <span className="text-xl font-bold">{title}</span>
        {!isNotesInArchive && !isNotesInImportant && !isNotesInBin ? (
          <button className="m-1" onClick={() => onPinClick(id)}>
            <span
              className={
                isPinned ? "material-icons" : "material-icons-outlined"
              }
            >
              push_pin
            </span>
          </button>
        ) : null}
      </div>

      <div className="flex justify-between">
        <p>{text}</p>

        <div className="flex items-center">
          {!isNotesInArchive && !isNotesInBin ? (
            <button className="m-1" onClick={() => onImportantClick(id)}>
              <span
                className={
                  isNotesInImportant
                    ? "material-icons"
                    : "material-icons-outlined"
                }
              >
                star_rate
              </span>
            </button>
          ) : (
            <></>
          )}

          {!isNotesInImportant && !isNotesInBin ? (
            <button className="m-1" onClick={() => onArchiveClick(id)}>
              <span
                className={
                  isNotesInArchive
                    ? "material-icons"
                    : "material-icons-outlined"
                }
              >
                archive
              </span>
            </button>
          ) : (
            <></>
          )}
          {!isNotesInBin  ? (
            <button className="m-1" onClick={() => onBinClick(id)}>
              <span className="material-icons-outlined">delete_outline</span>
            </button>
          ) : (
            <>
              <button
                onClick={() => onDeleteClick(id)}
                className="bg-red-500 text-white p-2 rounded-md absolute bottom-5 right-5"
              >
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShowNotes;
