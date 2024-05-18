import { useState, useEffect } from "react";
import { CandidatoItem } from "../components/CandidatoItem"

import { useParams } from "react-router-dom";

export const CandidatosList = () => {

    const [candidatos, setCandidatos] = useState([]);
    const {gender} = useParams();

    useEffect(() => {
        getCandidatos();
    }, [gender]);

    const getCandidatos = async() => {

        let url = "https://randomuser.me/api/?results=10";

        if(gender != undefined){
            url += "&gender=" + gender;
        }

        const request = await fetch(url);
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