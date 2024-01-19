import work_chat from "../assets/work_chat.svg";
import llama from "../assets/llama.jpg";

const flexCenter = "flex justify-center gap-4 flex-col";

function Login() {
  return (
    <div className="container h-screen grid grid-cols-2 text-center py-14">
      <div className="bg-[#231942] flex justify-center items-center rounded-s-3xl">
        <img
          src={llama}
          alt="Personas trabajando en equipo..."
          className="w-2/3 h-2/3 object-cover rounded-3xl"
        />
      </div>
      <div className={`${flexCenter} px-20 bg-[#fbcec3] rounded-e-3xl `}>
        <div id="texto" className="text-[#30120b]">
          <h1 className="font-black text-5xl">Iniciar Sesión</h1>
          <h3>Ingrese los datos solicitados para ingresar a su cuenta</h3>
        </div>
        <div id="campos" className={`container ${flexCenter}`}>
          <input
            id="email"
            name="email"
            type="email"
            className="border-2 border-blue-950 rounded-md p-2 text-blue-950"
            placeholder="Ingrese su correo electrónico"
            onChange={() => {}}
          />
          <input
            id="password"
            name="password"
            type="password"
            className="border-2 border-blue-950 rounded-md p-2 text-blue-950"
            placeholder="Ingrese su contraseña"
            onChange={() => {}}
          />
        </div>
        <div id="botones" className="my-4">
          <button className="px-8 py-2 text-lg font-semibold rounded-xl bg-[#F25A38] hover:text-[#F25A38] text-white hover:bg-white outline outline-offset-2 outline-2 outline-[#F25A38]">
            Iniciar sesión
          </button>
        </div>

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
  );
}

export default Login;
