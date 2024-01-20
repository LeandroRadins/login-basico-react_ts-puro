import { ChangeEvent, useState } from "react";
import { FormData } from "@/controllers/dtos";

interface UseFormParams {
    formulario: FormData | any;
    handleChange: (e:ChangeEvent<HTMLInputElement>) => void;
    resetState: () => void;
    validate: (e:any) => void;
}

export const useForm = <T extends Object> (initialState: T) : UseFormParams  => {

    const [formulario, setFormulario] = useState(initialState);

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormulario({
            ...formulario,
            [name]: value,
        });
    };

    const resetState = () => {
        setFormulario(initialState);
    };

    const validate = (e:any) => {
        e.preventDefault();
        console.log(formulario);
        //TODO: Validar campos
        resetState();
    };

    return {
        formulario,
        handleChange,
        resetState,
        validate,
    };

};