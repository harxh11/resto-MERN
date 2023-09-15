
import "./favorites.css";
import { useState } from "react"
import axios from "axios";
import { useEffect } from "react";



export const Favorites = () => {
    const [users, setUsers] = useState([]);    

        
    useEffect(() => {
        const getUsers = async () => {   
            const response = await axios.get("http://localhost:3001/users/getUsers");
            // console.log(response.data.users);
            setUsers(response.data.users);
            console.log(users);
        }
        getUsers();

    }, []);




    return (

        <>
            
            <div className="fav-body">
                <h1>Favorites Page</h1>
                <h1>{users.map((user) => {
                    return(user.name);
                })}</h1>
            </div>
        </>
    )


}