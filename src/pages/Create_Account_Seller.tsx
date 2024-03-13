import  { useState, ChangeEvent, FormEvent} from 'react';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import ImageCompressor from 'image-compressor.js';
import axios from 'axios';


export function CreateAccountSeller() {
    const [username, setUsername] = useState("");
    const [age, setAge] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("");
    const [useType, setUserType] = useState("");
    const [profileImage, setProfileImage] = useState<string | null>(null);

    const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handleUserAgeChange = (event: ChangeEvent<HTMLInputElement>) => {
        setAge(event.target.value);
    };

    const handleUserPhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPhone(event.target.value);
    };

    const handleUserEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleUserPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleUserGenderChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setGender(event.target.value);
    };

    // const handleUserTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    //     setUserType(event.target.value);
    // };

    const handleImageChange = async (event: ChangeEvent<HTMLInputElement>) => {
        const imageFile = event.target.files?.[0];

        if (!imageFile) return;

        if (!['image/jpeg', 'image/png', 'image/gif'].includes(imageFile.type)) {
            console.error('Formato de imagen no compatible');
            return;
        }

        try {
            const compressor = new ImageCompressor();
            const compressedImage = await compressor.compress(imageFile, {
                maxWidth: 800,
                maxHeight: 600,
                quality: 0.2,
                mimeType: 'auto'
            });

            const reader = new FileReader();
            reader.onload = () => {
                const base64Image = reader.result as string;
                setProfileImage(base64Image);
            };
            reader.readAsDataURL(compressedImage);
        } catch (error) {
            console.error('Error al comprimir la imagen:', error);
        }
    };

    const handleCreateAccount = async (event: FormEvent<HTMLFormElement>) => {
        if (event) {
            event.preventDefault(); // Evitar el comportamiento predeterminado del formulario
        }
        setUserType("Vendedor");
        const formData = new FormData();
        formData.append('ID', '');
        formData.append('Nombre', username);
        formData.append('Fecha_Nacimiento', age);
        formData.append('Telefono', phone);
        formData.append('Correo_Electronico', email);
        formData.append('Contraseña', password);
        formData.append('Genero', gender);
        formData.append('Tipo_Usuario', useType);
        formData.append('Foto', profileImage || '');

        console.log(formData);

        const userData = {
            ID: '',
            Nombre: formData.get('Nombre'),
            Fecha_Nacimiento: formData.get('Fecha_Nacimiento'),
            Telefono: formData.get('Telefono'),
            Correo_Electronico: formData.get('Correo_Electronico'),
            Contraseña: formData.get('Contraseña'),
            Genero: formData.get('Genero'),
            Tipo_Usuario: 'Void',
            Foto: profileImage
        };

        console.log(userData);

        try {
            const response = await axios.post('http://localhost:4004/api/users', userData, {});

            console.log(response.data);
       
           
            window.location.href = '/Login';
          
        } catch (error) {
            console.error('Error al crear usuario:', error);
        }
    };

    return (
        <>
            <Header />
            <main>
                <div className="account-container d-flex justify-content-center p-3">
                    <div className="row d-flex justify-content-center">
                        <div className="account-main col-sm-6 col-md-6 col-10 p-3">
                            <div className="row">
                                <div className="col-xl-7 col-10 d-grid gap-2 mx-auto mb-3">
                                    <button type="button" className="btn btn-danger">
                                        <i className="bi bi-google me-1" style={{ color: '#ffffff' }}></i>
                                        Continuar con Google
                                    </button>
                                </div>
                                <form className="row needs-validation mx-auto" noValidate onSubmit={handleCreateAccount}>
                                    <div className="col-xl-8 mb-2 mx-auto">
                                        <div className="account-line"></div>
                                    </div>
                                    <div className="col-xl-8 mb-3 mx-auto">
                                        <label htmlFor="validationUsername" className="form-label">Nombre</label>
                                        <input type="text" className="form-control" id="validationUsername" placeholder="Ingresa tu nombre" value={username} onChange={handleUsernameChange} required />
                                        <div className="invalid-feedback ps-1">
                                            Este campo es obligatorio.
                                        </div>
                                    </div>
                                    <div className="col-xl-8 mb-3 mb-3 mx-auto">
                                        <label htmlFor="validationAge" className="form-label">Fecha de Fecha_Nacimiento</label>
                                        <input type="date" className="form-control" id="validationAge" placeholder="Ingresa tu edad" value={age} onChange={handleUserAgeChange} required />
                                        <div className="invalid-feedback ps-1">
                                            Este campo es obligatorio.
                                        </div>
                                    </div>
                                    <div className="col-xl-8 mb-3 mx-auto">
                                        <label htmlFor="validationPhone" className="form-label">Teléfono</label>
                                        <input type="text" className="form-control" id="validationPhone" placeholder="Ingresa tu teléfono" value={phone} onChange={handleUserPhoneChange} required />
                                        <div className="invalid-feedback ps-1">
                                            Este campo es obligatorio.
                                        </div>
                                    </div>
                                    <div className="col-xl-8 mb-2 mx-auto">
                                        <div className="account-line"></div>
                                    </div>
                                    <div className="col-xl-8 mb-3 mb-3 mx-auto">
                                        <label htmlFor="validationEmail" className="form-label">Correo Electrónico</label>
                                        <input type="text" className="form-control" id="validationEmail" placeholder="Ingresa tu correo" value={email} onChange={handleUserEmailChange} required autoComplete="email" />
                                        <div className="invalid-feedback ps-1">
                                            Este campo es obligatorio.
                                        </div>
                                    </div>

                                    <div className="col-xl-8 mb-3 mb-3 mx-auto">
                                        <label htmlFor="validationPassword" className="form-label">Contraseña</label>
                                        <input type="password" className="form-control" id="validationPassword" placeholder="Ingresa tu contraseña" value={password} onChange={handleUserPasswordChange} required autoComplete="current-password" />
                                        <div className="invalid-feedback ps-1">
                                            Este campo es obligatorio.
                                        </div>
                                    </div>

                                    <div className="col-xl-8 mb-2 mx-auto">
                                        <div className="account-line"></div>
                                    </div>
                                    <div className="col-xl-8 mb-3 mb-5 mx-auto">
                                        <label htmlFor="validationGender" className="form-label">Género</label>
                                        <select className="form-select" id="validationGender" value={gender} onChange={handleUserGenderChange} required>
                                            <option value="" disabled>Selecciona tu género</option>
                                            <option value="Mujer">M</option>
                                            <option value="Hombre">H</option>
                                        </select>
                                        <div className="invalid-feedback ps-1">
                                            Este campo es obligatorio.
                                        </div>
                                    </div>
                                    <div className="col-xl-8 mb-3 mb-3 mx-auto">
                                        <label htmlFor="validationImage" className="form-label">Imagen de perfil</label>
                                        <input type="file" className="form-control" id="validationImage" onChange={handleImageChange} required />
                                        <div className="invalid-feedback ps-1">
                                            Este campo es obligatorio.
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-md-center col-md-6 mb-5">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="invalidCheck1" required />
                                            <label className="form-check-label" htmlFor="invalidCheck1">
                                                Aceptar términos y condiciones
                                            </label>
                                            <div className="invalid-feedback">
                                                Debes aceptar antes de enviar.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-md-center col-md-6 mb-5">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                                            <label className="form-check-label" htmlFor="invalidCheck2">
                                                Aceptar términos y condiciones
                                            </label>
                                            <div className="invalid-feedback">
                                                Debes aceptar antes de enviar.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row mx-auto">
                                        <div className="col-xl-7 col-10 d-grid gap-2 mb-3 mx-auto">
                                            <button type="submit" className="btn btn-warning" role="button">Crear cuenta</button>
                                        </div>
                                        <div className="col-xl-7 col-10 d-grid gap-2 mb-3 mx-auto">
                                            <a href="/Login" id="btnLogin" className="btn btn-warning" role="button">Ya poseo una cuenta</a>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
