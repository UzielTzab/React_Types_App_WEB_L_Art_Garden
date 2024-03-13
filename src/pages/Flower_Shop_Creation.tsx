import { Header } from "../components/Header";
import { Subheading } from "../components/Sub_heading";
import { Footer } from "../components/Footer";
import flowerShop1 from "../assets/images/flowersShop/shop1.jpg";
export function FlowerShopCreation()
{
    return(
        <>
            <Header/>
            <Subheading title='CREACIÓN DE MI FLORERIA'/>
            <main>
                <div className="container">
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
                            <label className="mb-2" style={{color: '#ffffff'}}>Inventario</label>
                            <div className="circle-c"></div>
                            <div className="connector-c"></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="row mx-auto p-2">
                        <div className="col">
                        <div>
                            <div className="card mx-auto" style={{width: '15rem'}}>
                            <img src={flowerShop1} className="custom-img card-img-top" alt="a"></img>
                            <div className="card-body">
                                <h5 className="card-title">Éden Floral</h5>
                                <p className="card-text">Tu belleza en cada pétalo</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <form className="row needs-validation p-2 mx-auto" noValidate>
                        <div className="col-lg-6 col-xl-6">
                        <div className="row">
                            <div>
                            <div className="col-lg-6 col-xl-6 offset-lg-4" style= {{color: '#ffb800'}}>
                                <h4>Contacto</h4>
                            </div>
                            </div>
                            <div className="col-7 col-sm-8 col-md-6 col-lg-8 col-xl-6 offset-lg-4 mb-2">
                            <div className="line-1"></div>
                            </div>
                            <div className="col-lg-6 col-xl-6 offset-lg-4 mb-2">
                            <label htmlFor="validationPhone" className="form-label">Teléfono</label>
                            <input type="text" className="form-control" id="validationPhone" placeholder="Ingresa tu teléfono" required></input>
                            <div className="invalid-feedback ps-1">
                                Este campo es obligatorio.
                            </div>
                            </div>
                            <div className="col-lg-6 col-xl-6 offset-lg-4 mb-2">
                            <label htmlFor="validationEmail" className="form-label">Correo Electrónico</label>
                            <input type="text" className="form-control" id="validationEmail" placeholder="Ingresa tu correo" required></input>
                            <div className="invalid-feedback ps-1">
                                Este campo es obligatorio.
                            </div>
                            </div>
                            <div className="col-lg-6 col-xl-6 offset-lg-4 mb-2">
                            <label htmlFor="validationSocialNetworks" className="form-label">Redes Sociales</label>
                            <input type="text" className="form-control" id="validationSocialNetworks"
                                placeholder="Agrega tus redes" required></input>
                            <div className="invalid-feedback ps-1">
                                Este campo es obligatorio.
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-6 col-xl-6">
                        <div className="row">
                            <div className="col-lg-6 col-xl-6 offset-lg-2" style={{color: '#ffb800'}}>
                            <h4>Ubicación</h4>
                            </div>
                            <div className="col-7 col-sm-7 col-md-5 col-lg-8 col-xl-6 offset-lg-2 mb-2">
                            <div className="line-2"></div>
                            </div>
                            <div className="col-lg-6 col-xl-6 offset-lg-2 mb-2">
                            <label htmlFor="validationAddress" className="form-label">Dirección</label>
                            <input type="text" className="form-control" id="validationAddress" placeholder="Ingresa tu dirección"
                                required></input>
                            <div className="invalid-feedback ps-1">
                                Este campo es obligatorio.
                            </div>
                            </div>
                            <div className="col-lg-6 col-xl-6 offset-lg-2 mb-2">
                            <label htmlFor="validationPostalCode" className="form-label">Código Postal</label>
                            <input type="text" className="form-control" id="validationPostalCode" placeholder="Ingresa tu código postal"
                                required></input>
                            <div className="invalid-feedback ps-1">
                                Este campo es obligatorio.
                            </div>
                            </div>
                            <div className="col-lg-6 col-xl-6 offset-lg-2 mb-2">
                            <label htmlFor="validationMunicipality" className="form-label">Municipio</label>
                            <select className="form-select" id="validationMunicipality" required>
                                <option selected disabled></option>
                                <option>Abalá</option>
                                <option>Acancéh</option>
                                <option>Akil</option>
                                <option>Baca</option>
                                <option>Bokobá</option>
                                <option>Buctzotz</option>
                                <option>Cacalchén</option>
                                <option>Calotmul</option>
                                <option>Cansahcab</option>
                                <option>Cantamayec</option>
                                <option>Celestún</option>
                                <option>Cenotillo</option>
                                <option>Conkal</option>
                                <option>Cuncunul</option>
                                <option>Cuzamá</option>
                                <option>Chacsinkín</option>
                                <option>Chankom</option>
                                <option>Chapab</option>
                                <option>Chemax</option>
                                <option>Chicxulub Pueblo</option>
                                <option>Chichimilá</option>
                                <option>Chikindzonot</option>
                                <option>Chocholá</option>
                                <option>Chumayel</option>
                                <option>Dzan</option>
                                <option>Dzemul</option>
                                <option>Dzidzantún</option>
                                <option>Dzilam de Bravo</option>
                                <option>Dzilam González</option>
                                <option>Dzitás</option>
                                <option>Dzoncauich</option>
                                <option>Espita</option>
                                <option>Halachó</option>
                                <option>Hocabá</option>
                                <option>Hoctún</option>
                                <option>Homún</option>
                                <option>Huhí</option>
                                <option>Hunucmá</option>
                                <option>Ixil</option>
                                <option>Izamal</option>
                                <option>Kanasín</option>
                                <option>Kantunil</option>
                                <option>Kaua</option>
                                <option>Kinchil</option>
                                <option>Kopomá</option>
                                <option>Mama</option>
                                <option>Maní</option>
                                <option>Maxcanú</option>
                                <option>Mayapán</option>
                                <option>Mérida</option>
                                <option>Mocochá</option>
                                <option>Motul</option>
                                <option>Muna</option>
                                <option>Muxupip</option>
                                <option>Opichén</option>
                                <option>Oxkutzcab</option>
                                <option>Panabá</option>
                                <option>Peto</option>
                                <option>Progreso</option>
                                <option>Quintana Roo</option>
                                <option>Río Lagartos</option>
                                <option>Sacalum</option>
                                <option>Samahil</option>
                                <option>Sanahcat</option>
                                <option>San Felipe</option>
                                <option>Santa Elena</option>
                                <option>Seyé</option>
                                <option>Sinanché</option>
                                <option>Sotuta</option>
                                <option>Sucilá</option>
                                <option>Sudzal</option>
                                <option>Suma de Hidalgo</option>
                                <option>Tahdziú</option>
                                <option>Tahmek</option>
                                <option>Teabo</option>
                                <option>Tecóh</option>
                                <option>Tekal de Venegas</option>
                                <option>Tekantó</option>
                                <option>Tekax</option>
                                <option>Tekit</option>
                                <option>Tekom</option>
                                <option>Telchac Pueblo</option>
                                <option>Telchac Puerto</option>
                                <option>Temax</option>
                                <option>Temozón</option>
                                <option>Tepakán</option>
                                <option>Tetiz</option>
                                <option>Teya</option>
                                <option>Ticul</option>
                                <option>Timucuy</option>
                                <option>Tinum</option>
                                <option>Tixcacalcupul</option>
                                <option>Tixkokob</option>
                                <option>Tixméhuac</option>
                                <option>Tixpéhual</option>
                                <option>Tizimín</option>
                                <option>Tunkás</option>
                                <option>Tzucacab</option>
                                <option>Uayma</option>
                                <option>Ucú</option>
                                <option>Umán</option>
                                <option>Valladolid</option>
                                <option>Xocchel</option>
                                <option>Yaxcabá</option>
                                <option>Yaxkukul</option>
                                <option>Yobaín</option>
                            </select>
                            <div className="invalid-feedback ps-1">
                                Este campo es obligatorio.
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-12 mt-2">
                        <div className="col-lg-8 col-xl-8 mx-auto">
                            <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea" className="form-label">Descripción</label>
                            <textarea className="form-control" id="exampleFormControlTextarea"
                                placeholder="Permítenos descrubrir más sobre tu florería." rows={6}></textarea>
                            </div>
                        </div>
                        </div>
                        <div className="d-flex justify-content-end">
                            <div className="col-2 col-xl-2 d-grid gap-2 me-3 mt-4">
                                <a href="/AddFlowerToInventory" id="btnLogin" className="btn btn-warning" role="button">Continuar</a>
                            </div>
                        </div>    
                    </form>   
                </div>
            </main>
            <Footer/>
        </>
    );
}