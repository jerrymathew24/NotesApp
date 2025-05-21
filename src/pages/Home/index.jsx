import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Text from "../../components/Text";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="flex gap-4">
        <Sidebar />
        <Text />
      </main>
    </>
  );
};
export default Home;
