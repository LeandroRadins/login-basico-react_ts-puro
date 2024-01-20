import "./App.css";
import { Button } from "@/components/ui/button";
import work_chat from "../src/assets/work_chat.svg";
import Navbar from "./components/ui/custom/navbar";
import Footer from "./components/ui/custom/footer";

function App() {
  return (
    <div className="bg-neutral-100 h-screen">
      <div id="navbar">
        <Navbar />
      </div>
      <div id="content" className="container text-center">
        <h1 className="text-7xl font-extrabold pt-28">Bienvenidos!</h1>
        <h2 className="py-14 text-5xl">
          El sitio se encuentra en construcción...{" "}
          <span>ingrese mas tarde</span>
        </h2>
        <div className="flex justify-center">
          <img
            src={work_chat}
            alt="Personas trabajando en equipo..."
            className="col-start-2 h-80"
          />
        </div>
        <div className="py-14">
          <Button
            className="p-8 text-2xl font-semibold rounded-2xl bg-[#F25A38] text-[#F2E2DC] hover:text-[#F25A38] hover:bg-[#F2E2DC] outline outline-offset-2 outline-2 outline-[#F25A38]"
            onClick={() => console.log("PEPE")}
          >
            Acceder al Login
          </Button>
        </div>
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
