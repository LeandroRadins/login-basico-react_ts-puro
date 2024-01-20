import { ChangeEvent, FormEvent, useState } from "react";
import { FormDataLogin, FormDataRegister } from "@/controllers/dtos";

interface UseFormParams {
  formulario: FormDataLogin | FormDataRegister | any;
  date: Date;
  handleDate: (newDate: Date) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  resetState: () => void;
  validate: (e: FormEvent<HTMLFormElement>) => void;
}

interface RegexPatterns {
  name?: RegExp;
  username?: RegExp;
  date?: RegExp;
  email: RegExp;
  password: RegExp;
  // Agrega más campos y sus patrones según sea necesario
}

interface RegexPatternsWithIndex extends RegexPatterns {
  [key: string]: RegExp | undefined;
}

export const useForm = <T extends Object>(initialState: T): UseFormParams => {
  const [formulario, setFormulario] = useState(initialState);
  const [date, setDate] = useState<Date>(new Date());

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormulario({
      ...formulario,
      [name]: value,
    });
  };

  const handleDate = (newDate: Date) => {
    setDate(newDate);
    console.log(newDate);
  };

  const resetState = () => {
    setFormulario(initialState);
  };

  const validate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Definir patrones de regex para cada campo (puedes personalizarlos según tus necesidades)
    const regexPatterns: RegexPatternsWithIndex = {
      name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
      username: /^[a-zA-Z0-9_.-]{4,16}$/,
      date: /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/,
      email: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
      password: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){4,16}$/,
      // Agrega más campos y sus patrones según sea necesario
    };
    // Validar cada campo usando su patrón de regex correspondiente
    const areFieldsValid = Object.entries(formulario).every(
      ([fieldName, fieldValue]) => {
        const pattern = regexPatterns[fieldName];
        if (pattern) {
          return pattern.test(fieldValue);
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
