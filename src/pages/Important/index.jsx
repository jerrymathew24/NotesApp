import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ShowNotes from "../../components/ShowNotes";
import Sidebar from "../../components/Sidebar";
import { useNotes } from "../../context/notes-context";

function Important() {
  const { important } = useNotes();

  return (
   < div className="flex flex-col h-screen">
      <Navbar />
      <main className="flex flex-1 gap-4 overflow-y-auto">
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
      <Footer />
    </div>
  );
}
export default Important;
