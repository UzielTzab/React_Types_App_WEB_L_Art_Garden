import React, { useState } from "react";
import { Header } from "../components/Header";
import { Subheading } from "../components/Sub_heading";
import { Footer } from "../components/Footer";

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleLogin = () => {
        // Save user information to localStorage
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);

        // Redirect to MyAccount or perform any other action
        window.location.href = "/FlowerShopCreation";
    };

    return (
        <>
            <Header/>
            <Subheading title='INICIO DE SESIÓN'/>
            <main>
                <div className="login-container d-flex justify-content-center p-3">
                    <div className="row d-flex justify-content-center">
                        <div className="login-main col-sm-6 col-md-6 col-10 p-3">
                            <div className="row">
                                <div className="col-xl-7 col-10 d-grid gap-2 mx-auto mb-3">
                                    <button type="button" className="btn btn-danger">
                                        <i className="bi bi-google me-1" style={{color: '#ffffff'}}></i>
                                        Continuar con Google
                                    </button>
                                </div>
                                <form className="row needs-validation mx-auto" noValidate>
                                    <div className="col-xl-8 mb-2 mx-auto">
                                        <div className="login-line"></div>
                                    </div>
                                    <div className="col-xl-8 mb-3 mb-3 mx-auto">
                                        <label htmlFor="validationEmail" className="form-label">Correo Electrónico</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="validationEmail"
                                            placeholder="Ingresa tu correo"
                                            value={email}
                                            onChange={handleEmailChange}
                                            required
                                        />
                                        <div className="invalid-feedback ps-1">
                                            Este campo es obligatorio.
                                        </div>
                                    </div>
                                    <div className="col-xl-8 mb-3 mb-3 mx-auto">
                                        <label htmlFor="validationPassword" className="form-label">Contraseña</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="validationPassword"
                                            placeholder="Ingresa tu contraseña"
                                            value={password}
                                            onChange={handlePasswordChange}
                                            required
                                        />
                                        <div className="invalid-feedback ps-1">
                                            Este campo es obligatorio.
                                        </div>
                                    </div>
                                    <div className="col-xl-8 d-flex justify-content-end mb-4 mx-auto">
                                        <a href="#" style={{color:'#ffb800'}}>Olvidaste tu contraseña</a>
                                    </div>
                                </form>
                                <div className="row mx-auto">
                                    <div className="col-xl-7 col-10 d-grid gap-2 mb-3 mx-auto">
                                        <button id="btnLogin" className="btn btn-warning" onClick={handleLogin} role="button">Inicio Sesión</button>
                                    </div>
                                    <div className="col-xl-7 col-10 d-grid gap-2 mb-3 mx-auto">
                                        <a href="/AccountSelection" className="btn btn-outline-warning" role="button">No poseo una cuenta</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
}
