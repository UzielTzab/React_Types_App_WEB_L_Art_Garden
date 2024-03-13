import Carousel1 from '../assets/images/carouselImages/carousel1.jpg';
import Carousel2 from '../assets/images/carouselImages/carousel2.jpg';
import Carousel3 from '../assets/images/carouselImages/carousel3.jpg';

export function Carousel() {
    return (
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img
    src={Carousel1}
    className="d-block w-100"
    alt="Una tienda de flores"
    style={{
        backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))',
        filter: 'brightness(70%)'
    }}
/>

                    <div className="carousel-caption d-none d-lg-block text-center" style={{ background:'rgba(171, 171, 171, 0)', bottom: '50%', right: '60%', width: '70%'}}>
                        <h1  style={{fontSize: '2.5rem',  fontFamily: 'Lobster, cursive'}}>Las flores mas lindas y vellas de Merida Yucatan</h1>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={Carousel2} className="d-block w-100" alt="Una tienda de flores"></img>
                    <div className="carousel-caption d-none d-lg-block text-center" style={{ top: '30%' }}>
                        <h1 className="text-white">Texto Grande Aquí</h1>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={Carousel3} className="d-block w-100" alt="Una tienda de flores"></img>
                    <div className="carousel-caption d-none d-lg-block text-center" style={{ top: '30%' }}>
                        <h1 className="text-white">Texto Grande Aquí</h1>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev d-none d-lg-block" type="button" data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next d-none d-lg-block" type="button" data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}
