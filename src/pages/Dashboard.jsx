import axios from "axios"
import { useAuth } from "../context/AuthContext"
import { useState, useEffect } from "react";

export const Dashboard = () => {

    const {token} = useAuth();
    const [welcome, setWelcome] = useState("");

    useEffect(() => {
        getWelcome();
    }, []);

    const getWelcome = async() => {
        try{
            const request = await axios.get("http://localhost:8888/welcome", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setWelcome(request.data.message);
        }catch(error){
            alert("Ha surgido un error, por favor intente más tarde");
        }
    }

    return (
        <>
            <h1> {welcome} </h1>
        </>
    )

}