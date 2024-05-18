import { useState } from "react"

export const useEdad = (initialEdad="") => {

    const [edad, setEdad] = useState(initialEdad);

    const handlerEdad = (e) => {
        const value = parseInt(e.target.value, 10);
        if(isNaN(value) || value < 1 || value > 120) return;
        setEdad(value);
    }

    return [edad, setEdad, handlerEdad];

}