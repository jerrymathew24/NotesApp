import Navbar from "../../components/Navbar";
import ShowNotes from "../../components/ShowNotes";
import Sidebar from "../../components/Sidebar";
import { useNotes } from "../../context/notes-context";

function Important() {
  const { important } = useNotes();

  return (
    <>
      <Navbar />
      <main className="flex gap-4">
        <Sidebar />
        <div className="">
          <div>
            {important?.length > 0 &&
              important.map(({ id, title, text, isPinned }) => (
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
      </main>
    </>
  );
}
export default Important;
