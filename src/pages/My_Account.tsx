import { Header } from "../components/Header";
import { Subheading } from "../components/Sub_heading";
import { useState, useEffect } from "react";
import axios from 'axios';

interface UserData {
    Foto: {
        data: Uint8Array;
    };
    NombreUsuario: string;
    Telefono: string;
    CorreoElectronico: string;
}


export function MyAccount() {
    const [gettingEmail, setGettingEmail] = useState("");
    const [gettingPassword, setGettingPassword] = useState("");
    const [user, setUser] = useState<UserData | null>(null);


    useEffect(() => {
        const emailGet = localStorage.getItem("email");
        const passwordGet = localStorage.getItem("password");

        if (emailGet && passwordGet) {
            setGettingEmail(emailGet);
            setGettingPassword(passwordGet);
        }
    }, []);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`http://localhost:4004/api/users?correo_electronico=${gettingEmail}&contraseña=${gettingPassword}`);
                setUser(response.data);
            } catch (error) {
                console.error("Ocurrió un error al traer la información del usuario: ", error);
            } finally {
                console.log("Petición finalizada");
            }
        };

        if (gettingEmail && gettingPassword) {
            fetchUserData();
        }
    }, [gettingEmail, gettingPassword]);

    function createBlobUrlFromImageData(imageData: Uint8Array): string {
        const blob = new Blob([new Uint8Array(imageData)], { type: 'image/jpeg' });
        return URL.createObjectURL(blob);
    }

    return (
        <>
            {user ? (
                <>
                    <Header />
                    <Subheading title='MI CUENTA' />
                    <main>
                        <div className="container">
                            <div className="row justify-content-center p-4">
                                <div className="col-md-6 text-center">
                                    {user.Foto ? (
                                        <img
                                            src={createBlobUrlFromImageData(user.Foto.data)}
                                            alt="User image"
                                            style={{ width: '8rem', height: '8rem', color: '#ffb800' }}
                                        />
                                    ) : null}
                                    <h5>Nombre: <br /> {user.NombreUsuario}</h5>
                                </div>
                            </div>
                            <div className="row p-4">
                                <div className="col-12">
                                    <p>Ubicación:</p>
                                    <p>Teléfono: {user.Telefono}</p>
                                    <p>Correo Electrónico: {user.CorreoElectronico}</p>
                                </div>
                                <div className="col-12 d-grid gap-2 mb-3">
                                    <a href="#" className="btn btn-warning" role="button">Editar datos</a>
                                </div>
                                <div className="col-12 d-grid gap-2 mb-3">
                                    <a href="#" className="btn btn-outline-warning" role="button">Volver</a>
                                </div>
                            </div>
                        </div>
                    </main>
                </>
            ) : (
                <h1>Loading...</h1>
            )}
        </>
    );
}
