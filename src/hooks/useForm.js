import { useState } from 'react';

export const useForm = (inicialState = {}) => {
    const [values, setValues] = useState(inicialState);

    const reset = (newValues = inicialState) => {
        setValues(newValues);
    };

    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value,
        });
    };

    return [values, handleInputChange, reset];
};
