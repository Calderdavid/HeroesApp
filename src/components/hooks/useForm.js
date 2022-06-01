import { useState } from 'react';


const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    }

    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            [ target.name ]: target.value
        });

    }

    //retorna un objeto con los valores del formulario y una funcion para resetear el formulario 
    return [ values, handleInputChange, reset ];
}

export default useForm;