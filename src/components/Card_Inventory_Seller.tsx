import '../styles/Inventory_Seller.css';

export function CardInventorySeller({image}:{image: string})
{
    return (
       <>
            <div className="col-md-6 col-lg-6 col-xl-3 mt-5 mb-4">
                <div className="card mx-auto" style={{width: '18rem'}}>
                <img src={image} className="card-img-top" alt="24 Rosas Rojas"></img>
                <div className="card-body">
                    <h5 className="card-title">Clásico Amor con 24 Rosas Rojas</h5>
                    <p className="card-text">$930.00 MXN</p>
                </div>
                </div>
            </div>
       </>     
    );
}