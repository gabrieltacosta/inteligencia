import { Outlet } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";

const App = () => {
  return (
    <div className="bg-[url('/background.jpg')] bg-cover bg-center bg-no-repeat">
      <div
        className="
          w-full min-h-dvh flex flex-col items-center bg-black/80 relative"
      >
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default App;
