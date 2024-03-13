import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useEffect } from 'react';



export function AddFlowerToInventory()
{


    useEffect(() => {
        // Execute JavaScript logic when component mounts

        // Select the form and button elements
        const form = document.querySelector('.needs-validation') as HTMLFormElement | null;
        const btnLogin = document.getElementById('btnLogin');

        if (form && btnLogin) {
            // Add event listener to the button for form submission
            btnLogin.addEventListener('click', function (event) {
                if (!form.checkValidity()) {
                    // If form is invalid, add Bootstrap validation styles
                    form.classList.add('was-validated');
                    event.stopPropagation(); // Stop event propagation
                } else {
                    // If form is valid, submit the form
                    form.submit();
                }
            });
        }
    }, []);
    return (
        <>
            <Header />
            <main style={{ marginBottom: '100px', minHeight: 'calc(100vh - 100px)' }}>
                <div className="container1"></div>
                <div className="container1">
                    <div className="container text-center">
                        <label className="form-label fw-bold fs-4">Nuevo Producto</label>
                    </div>
                </div>
                <div className="container1"></div>
                <div className="container2">
                    <div className="midcontainer2">
                        {/* Botones y entradas de imagen */}
                    </div>

                    <div className="midcontainer3">
                        <div className="row">
                            <form className="row needs-validation mx-auto" noValidate>
                                <div className="col-xl-8 mb-3 mb-3 mx-auto">
                                    <label htmlFor="validationNombre" className="form-label">Nombre</label>
                                    <input type="text" className="form-control" id="validationNombre" placeholder="Ingresa el nombre del Producto" required />
                                    <div className="invalid-feedback ps-1">
                                        Este campo es obligatorio.
                                    </div>
                                </div>
                                <div className="col-xl-8 mb-3 mb-3 mx-auto">
                                    <label htmlFor="validationPrecio" className="form-label">Precio</label>
                                    <input type="number" className="form-control" id="validationPrecio" placeholder="Ingresa el precio del Producto" required />
                                    <div className="invalid-feedback ps-1">
                                        Este campo es obligatorio.
                                    </div>
                                </div>
                                <div className="col-xl-8 mb-3 mb-3 mx-auto">
                                    <label htmlFor="validationTipo" className="form-label">Tipo</label>
                                    <input type="text" className="form-control" id="validationTipo" placeholder="Ingresa el tipo del Producto" required />
                                    <div className="invalid-feedback ps-1">
                                        Este campo es obligatorio.
                                    </div>
                                </div>
                                <div className="col-xl-8 mb-3 mx-auto">
                                    <label htmlFor="validationMessage" className="form-label fs-5 text-left">Descripcion</label>
                                    <textarea className="form-control h-90" id="validationDescripcion" placeholder="Escribe una Descripcion" rows={5} style={{ resize: 'none' }} required></textarea>
                                    <div className="invalid-feedback ps-1">
                                        Este campo es obligatorio.
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="container1">
                    <div className="row">
                        <div className="row mx-auto mb-4">
                            <div className="col-xl-5 col-10 d-grid gap-2 mx-auto">
                                <button id="btnLogin" type="button" className="btn btn-warning">Guardar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}