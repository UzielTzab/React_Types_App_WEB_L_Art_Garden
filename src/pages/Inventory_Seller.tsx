import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CardInventorySeller } from "../components/Card_Inventory_Seller";
import flower1 from '../assets/images/flowers/flower1.jpg';
import '../styles/Inventory_Seller.css';


export function InventorySeller()
{
    return(
        <>
            <Header/>
             <main>
                <div className="container-fluid d-flex header-bottom-container align-items-center justify-content-center">
                <div className="text-white fs-1 fw-bold">
                    Inventario
                </div>
                </div>
                <div className="row d-none d-md-flex p-2 mx-auto">
                <div className="col-12">
                    <div className="d-flex justify-content-between mt-3 mb-3">
                    <div className="progress-container-a text-center">
                        <label className="mb-2" style={{color: '#ffb800'}}>Iniciar sesión</label>
                        <div className="circle-a"></div>
                        <div className="connector-a"></div>
                    </div>
                    <div className="progress-container-b text-center">
                        <label className="mb-2" style={{color: '#ffb800'}}>Creación de la florería</label>
                        <div className="circle-a"></div>
                        <div className="connector-b"></div>
                    </div>
                    <div className="progress-container-c text-center">
                        <label className="mb-2" style={{color: '#ffb800'}}>Inventario</label>
                        <div className="circle-c"></div>
                        <div className="connector-c"></div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="contenedor-principal">
                <div className="contenedor-secundario p-3">
                    <div className="row CA mx-auto">
                    <div className="col text-center CO">
                        <div className="row CE">
                            <CardInventorySeller image={flower1}/>
                            <CardInventorySeller image={flower1}/>
                            <CardInventorySeller image={flower1}/>
                            <CardInventorySeller image={flower1}/>
                            <CardInventorySeller image={flower1}/>
                            <CardInventorySeller image={flower1}/>
                            <CardInventorySeller image={flower1}/>
                            <CardInventorySeller image={flower1}/>
                            <CardInventorySeller image={flower1}/>
                            <CardInventorySeller image={flower1}/>
                            <CardInventorySeller image={flower1}/>
                       
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