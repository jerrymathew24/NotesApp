import Navbar from "../../components/Navbar";
import ShowNotes from "../../components/ShowNotes";
import Sidebar from "../../components/Sidebar";
import { useNotes } from "../../context/notes-context";

function Bin() {
  const { bin } = useNotes();

  return (
    <>
      <Navbar />
      <main className="flex gap-4">
        <Sidebar />
        <div className="">
          <div>
            {bin?.length > 0 &&
              bin.map(({ id, title, text, isPinned }) => (
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
export default Bin;
