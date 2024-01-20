import llama from "../assets/llama.jpg";
import Navbar from "./ui/custom/navbar";
import { useForm } from "@/controllers/useForm";
import { FormData } from "@/controllers/dtos";

const Login = () => {

  const { formulario, handleChange, validate } = useForm<FormData> ({
    email: "",
    password: "",
  });

  return (
    <div>
      <div id="navbar">
        <Navbar />
      </div>
      <div className="container h-screen grid grid-cols-2 text-center py-14">
        <div
          className="bg-[#B3DEE2] flex justify-center items-center rounded-s-3xl bg-cover bg-center"
          style={{
            backgroundImage: `url(${llama})`,
          }}
        ></div>
        <div className={"flexCenter px-20 bg-[#fbcec3] rounded-e-3xl"}>
          <div id="texto" className="text-[#30120b]">
            <h1 className="font-black text-5xl">Iniciar Sesión</h1>
            <h3>Ingrese los datos solicitados para ingresar a su cuenta</h3>
          </div>
          <form onSubmit={validate}>
            <div id="campos" className={"container flexCenter"}>
              <input
                name="email"
                type="email"
                className="border-2 border-black rounded-md p-2 text-black"
                placeholder="Ingrese su correo electrónico"
                value={formulario.email}
                onChange={handleChange}
              />
              <input
                name="password"
                type="password"
                className="border-2 border-black rounded-md p-2 text-black"
                placeholder="Ingrese su contraseña"
                value={formulario.password}
                onChange={handleChange}
              />
            </div>
            <div id="botones" className="my-4">
              <button type='submit' className="px-8 py-2 text-lg font-semibold rounded-xl bg-[#F25A38] hover:text-[#F25A38] text-white hover:bg-white outline outline-offset-2 outline-2 outline-[#F25A38]">
                Iniciar sesión
              </button>
            </div>
          </form>

          <div id="footer">
            <h3>
              ¿No tienes una cuenta?{" "}
              <a href="">
                <span className="text-[#F25A38] font-semibold hover:text-[#30120b]">
                  Registrate
                </span>
              </a>
            </h3>
            <h3></h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
