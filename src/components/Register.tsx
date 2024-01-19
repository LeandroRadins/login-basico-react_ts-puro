import { useState } from "react";
import pinguino from "../assets/pinguino.jpg";

import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { es } from 'date-fns/locale';

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const flexCenter = "flex justify-center gap-4 flex-col";

function Register() {
  const [date, setDate] = useState<Date>();

  return (
    <div className="container h-screen grid grid-cols-2 text-center py-14">
      <div className={`${flexCenter} px-20 bg-[#fbcec3] rounded-s-3xl `}>
        <div id="texto" className="text-[#30120b]">
          <h1 className="font-black text-5xl">Crear nueva cuenta</h1>
          <h3>Ingrese los datos solicitados para crear una nueva cuenta</h3>
        </div>
        <div id="campos" className={`container ${flexCenter}`}>
          <h2 className="text-2xl font-medium">Datos Personales</h2>

          <input
            id="name"
            name="name"
            type="text"
            className="border-2 border-black rounded-md p-2 text-black"
            placeholder="Ingrese su nombre completo"
            onChange={() => {}}
          />
          <input
            id="username"
            name="username"
            type="text"
            className="border-2 border-black rounded-md p-2 text-black"
            placeholder="Ingrese un nombre de usuario"
            onChange={() => {}}
          />
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "justify-start text-left font-normal border-2 border-black rounded-md p-2 text-black",
                  !date && "text-muted-foreground"
                )}
              >
                //<CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "dd/MM/yyyy") : <span>Fecha de Nacimiento</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="center">
              <Calendar
                mode="single"
                locale={es}
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>

          <hr />
          <h2 className="text-2xl font-medium">Datos de Sesión</h2>
          <input
            id="email"
            name="email"
            type="email"
            className="border-2 border-black rounded-md p-2 text-black"
            placeholder="Ingrese su correo electrónico"
            onChange={() => {}}
          />
          <input
            id="password"
            name="password"
            type="password"
            className="border-2 border-black rounded-md p-2 text-black"
            placeholder="Ingrese su contraseña"
            onChange={() => {}}
          />
        </div>
        <div id="botones" className="my-4">
          <button className="px-8 py-2 text-lg font-semibold rounded-xl bg-[#F25A38] hover:text-[#F25A38] text-white hover:bg-white outline outline-offset-2 outline-2 outline-[#F25A38]">
            Crear cuenta
          </button>
        </div>

        <div id="footer">
          <h3>
            ¿Ya tenés una cuenta?{" "}
            <a href="">
              <span className="text-[#F25A38] font-semibold hover:text-[#30120b]">
                Inicia sesión
              </span>
            </a>
          </h3>
          <h3></h3>
        </div>
      </div>
      <div
        className="bg-[#B3DEE2] flex justify-center items-center rounded-e-3xl bg-cover bg-center"
        style={{
          backgroundImage: `url(${pinguino})`,
        }}
      ></div>
    </div>
  );
}

export default Register;
