import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom";

export const Menu = () => {

    const { logueado, logout } = useAuth();
    const navigate = useNavigate();

    const handlerLogout = (e) => {
        e.preventDefault();
        logout();
        navigate("/login")
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/"> Inicio </Link>
                        </li>                        
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Candidatos
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link className="dropdown-item" to="/candidatos"> Candidata/os </Link>
                                    <Link className="dropdown-item" to="/candidatos/female"> Candidatas mujeres </Link>
                                    <Link className="dropdown-item" to="/candidatos/male"> Candidatos hombres </Link>                                 
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contacto"> Contacto </Link>
                        </li>
                        {
                            (logueado)
                            ?
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/dashboard"> Dashboard </Link>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link" onClick={handlerLogout}> Logout </a>
                                    </li>
                                </>
                            :
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login"> Login </Link>
                                </li>
                        }                        
                    </ul>
                </div>
            </div>
        </nav>
    )

}