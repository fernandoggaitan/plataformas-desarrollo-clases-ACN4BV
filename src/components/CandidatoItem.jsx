import { useState } from "react";

export const CandidatoItem = ( {ID, nombre, apellido, imagen, initialVotos, onVotosChange} ) => {

    const [votos, setVotos] = useState(initialVotos);

    const votar = () => {
        const votos_suma = votos + 1;
        setVotos(votos_suma);
        onVotosChange(ID, votos_suma);
    }

    const handleVotos = (e) => {
        const value = parseInt(e.target.value, 10);
        if(isNaN(value)) return;
        setVotos(value);
        onVotosChange(ID, value);
    }

    return (
        <div className="col-sm-4 mb-3">
            <div className="card">
                <div className="card-header">
                    <h3 className="card-title"> {nombre} {apellido} </h3>
                </div>
                <div className="card-body">
                    <img className="d-block mb-3" src={imagen} alt="" />
                    <button type="button" href="#" className="btn btn-primary" onClick={votar}> Votar ({votos}) </button>
                    <input type="number" min={0} className="form-control" value={votos} onChange={handleVotos} />
                </div>
            </div>
        </div>
    )
}