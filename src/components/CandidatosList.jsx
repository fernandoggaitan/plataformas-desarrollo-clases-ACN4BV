//Fuente de las imágenes: https://randomuser.me

const lista = [
    {
        "ID": 1,
        "nombre": "Erin",
        "apellido": "Campbell",
        "imagen": "/img/personas/17.jpg",
        "votos": 0
    },
    {
        "ID": 2,
        "nombre": "Inaya",
        "apellido": "Guillaume",
        "imagen": "/img/personas/90.jpg",
        "votos": 0
    },
    {
        "ID": 3,
        "nombre": "Praneetha",
        "apellido": "Kaur",
        "imagen": "/img/personas/61.jpg",
        "votos": 0
    },
    {
        "ID": 4,
        "nombre": "Aramis",
        "apellido": "Gomes",
        "imagen": "/img/personas/49.jpg",
        "votos": 0
    },
    {
        "ID": 5,
        "nombre": "Frederik",
        "apellido": "Lervåg",
        "imagen": "/img/personas/52.jpg",
        "votos": 0
    },
    {
        "ID": 6,
        "nombre": "Jill",
        "apellido": "Garrett",
        "imagen": "/img/personas/37.jpg",
        "votos": 0
    },
    {
        "ID": 7,
        "nombre": "Sophie",
        "apellido": "Clarke",
        "imagen": "/img/personas/73.jpg",
        "votos": 0
    },
    {
        "ID": 8,
        "nombre": "Yasemin",
        "apellido": "Akman",
        "imagen": "/img/personas/8.jpg",
        "votos": 0
    },
    {
        "ID": 9,
        "nombre": "Stach",
        "apellido": "Noijen",
        "imagen": "/img/personas/3.jpg",
        "votos": 0
    }
];

import { CandidatoItem } from "./CandidatoItem"

export const CandidatosList = () => {

    return (
        <>
            <h2> Votación </h2>
            <p> Cantidad de votos: 0 </p>
            <div className="row">
                {
                    lista.map( (item) => (
                        <CandidatoItem
                            key={item.ID}
                            ID={item.ID}
                            nombre={item.nombre}
                            apellido={item.apellido}
                            imagen={item.imagen}
                        />
                    ))
                }
            </div>
        </>
    )

}