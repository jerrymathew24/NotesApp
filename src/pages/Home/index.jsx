import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Text from "../../components/Text";

const Home = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <main className="flex flex-1 gap-4 overflow-y-auto">
        <Sidebar />
        <Text />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
