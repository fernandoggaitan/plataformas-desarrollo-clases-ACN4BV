import { useState } from "react";
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Login = () => {

    const { login } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [contrasena, setContrasena] = useState("");

    const handlerLogin = async() => {
        //login();
        //navigate("/dashboard");
        try{
            const request = await axios.post("http://localhost:8888/login", {
                email,
                contrasena
            });
            if(request.data.success){
                login(request.data);
                navigate("/dashboard");
            }
            alert(request.data.message);
        }catch(error){
            alert("Ha surgido un error, por favor intente más tarde");
        }
    }

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary" onClick={handlerLogin}>Submit</button>
        </form>
    )

}