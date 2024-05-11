//Fuente de las imágenes: https://randomuser.me

/*
const lista = [
    {
        "ID": 1,
        "nombre": "Erin",
        "apellido": "Campbell",
        "imagen": "/img/personas/17.jpg",
        "votos": 3
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
        "votos": 5
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
*/

import { useState, useEffect } from "react";
import { CandidatoItem } from "./CandidatoItem"

export const CandidatosList = () => {

    const [candidatos, setCandidatos] = useState([]);

    useEffect(() => {
        getCandidatos();
    }, []);

    const getCandidatos = async() => {
        const request = await fetch("https://randomuser.me/api/?results=10");
        const json = await request.json();
        const candidatos_temp = json.results.map((item, index) => {
            return {
                "ID": item.login.uuid,
                "nombre": item.name.first,
                "apellido": item.name.last,
                "imagen": item.picture.large,
                "votos": 0
            }
        });
        setCandidatos(candidatos_temp);
    }

    const getCantVotos = () => {
        return candidatos.reduce( (total, item) => (total + item.votos), 0 );
    }

    const emitCandidatos = (ID, votos) => {
        const candidatos_temp = candidatos.map( (item) => {
            if(item.ID == ID){
                item.votos = votos;
            }
            return item;
        });
        setCandidatos(candidatos_temp);
    }

    return (
        <>
            <h2> Votación </h2>
            <p> Cantidad de votos: { getCantVotos() } </p>
            <div className="row">
                {
                    candidatos.sort( (a, b) => b.votos - a.votos ).map( (item) => (
                        <CandidatoItem
                            key={item.ID}
                            ID={item.ID}
                            nombre={item.nombre}
                            apellido={item.apellido}
                            imagen={item.imagen}
                            initialVotos={item.votos}
                            onVotosChange={emitCandidatos}
                        />
                    ))
                }
            </div>
        </>
    )

}