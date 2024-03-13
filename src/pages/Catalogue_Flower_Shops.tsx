import { CardFlowerShop } from "../components/Card_Flower_Shop";
import flower1 from '../assets/images/flowersShop/shop1.jpg';
import { Header } from "../components/Header";
import { Subheading } from "../components/Sub_heading";

export function CatalogueFlowerShops() {
    return (
        <>
            <Header/>
            <Subheading title='CATALOGO DE FLORERIAS'/>
            <main>
                <div className="contenedor-principal">
                    <div className="contenedor-secundario p-3">
                        <div className="row CA mx-auto">
                            <div className="col text-center CO">
                                <div className="row CE">
                                    <CardFlowerShop urlImage={flower1} nameFlowerShop="Florines" address="939x34" phone={999499393}/>
                                    <CardFlowerShop urlImage={flower1} nameFlowerShop="Florines" address="939x34" phone={999499393}/>
                                    <CardFlowerShop urlImage={flower1} nameFlowerShop="Florines" address="939x34" phone={999499393}/>
                                    <CardFlowerShop urlImage={flower1} nameFlowerShop="Florines" address="939x34" phone={999499393}/>
                                    <CardFlowerShop urlImage={flower1} nameFlowerShop="Florines" address="939x34" phone={999499393}/>
                                    <CardFlowerShop urlImage={flower1} nameFlowerShop="Florines" address="939x34" phone={999499393}/>
                                    <CardFlowerShop urlImage={flower1} nameFlowerShop="Florines" address="939x34" phone={999499393}/>
                                    <CardFlowerShop urlImage={flower1} nameFlowerShop="Florines" address="939x34" phone={999499393}/>
                                    <CardFlowerShop urlImage={flower1} nameFlowerShop="Florines" address="939x34" phone={999499393}/>
                                    <CardFlowerShop urlImage={flower1} nameFlowerShop="Florines" address="939x34" phone={999499393}/>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}