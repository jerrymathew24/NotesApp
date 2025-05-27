import Navbar from "../../components/Navbar";
import ShowNotes from "../../components/ShowNotes";
import Sidebar from "../../components/Sidebar";
import { useNotes } from "../../context/notes-context";

function Archive() {
  const { archive } = useNotes();

  return (
    <>
      <Navbar />
      <main className="flex gap-4">
        <Sidebar />
        <div className="">
          <div className="h-50">
            {archive?.length > 0 &&
              archive.map(({ id, title, text, isPinned }) => (
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
export default Archive;
