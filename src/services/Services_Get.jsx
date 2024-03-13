import React, { useState, useEffect } from "react";
import axios from "axios";

export function ServicesUserGet() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:4004/api/users?correo_electronico=u&contraseña=u")
            .then(response => {
                setUser(response.data);
            })
            .catch(error => console.error('Error fetching user data:', error));
    }, []);

    return (
        <div>
            <h1>User Details</h1>
            {user ? (
                <div>
                    <p>ID: {user.ID}</p>
                    <p>Nombre Usuario: {user.NombreUsuario}</p>
                    <p>Fecha Nacimiento: {user.FechaNacimiento}</p>
                    <p>Género: {user.Genero}</p>
                    <p>Teléfono: {user.Telefono}</p>
                    <p>Correo Electrónico: {user.CorreoElectronico}</p>
                    {/* Add more fields as needed */}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
