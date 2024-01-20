import { ChangeEvent, FormEvent, useState } from "react";
import { FormDataLogin, FormDataRegister } from "@/controllers/dtos";

interface UseFormParams {
  formulario: FormDataLogin | FormDataRegister | any;
  date: Date | any;
  handleDate: (newDate: Date) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  resetState: () => void;
  validate: (e: FormEvent<HTMLFormElement>) => void;
}

export const useForm = <T extends Object>(initialState: T): UseFormParams => {
  const [formulario, setFormulario] = useState(initialState);
  const [date, setDate] = useState(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormulario({
      ...formulario,
      [name]: value,
    });
  };

  const handleDate = (newDate: Date) => {
    setDate({
      ...date,
      newDate,
    });
  };

  const resetState = () => {
    setFormulario(initialState);
  };

  const validate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Definir patrones de regex para cada campo (puedes personalizarlos según tus necesidades)
    const regexPatterns: { [key: string]: RegExp } = {
      email: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
      password: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){4,16}$/,
      // Agrega más campos y sus patrones según sea necesario
    };

    // Validar cada campo usando su patrón de regex correspondiente
    const areFieldsValid = Object.entries(formulario).every(
      ([fieldName, fieldValue]) => {
        if (regexPatterns[fieldName]) {
          return regexPatterns[fieldName].test(fieldValue);
        }
        return true; // Si no hay patrón de regex definido, considerarlo válido
      }
    );

    if (areFieldsValid) {
      console.log("Formulario válido:", formulario);
      setFormulario({ ...formulario, valid: true });
      // TODO: Realizar acciones con el formulario válido
    } else {
      setFormulario({ ...formulario, valid: false });
      console.error(
        "Algunos campos no cumplen con los requisitos. Por favor, verifica los datos ingresados."
      );
      // TODO: Mostrar mensajes de error o realizar acciones cuando la validación falla
    }
  };

  return {
    formulario,
    date,
    handleDate,
    handleChange,
    resetState,
    validate,
  };
};
