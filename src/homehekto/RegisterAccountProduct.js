
export default function RegisterAccountProduct({image}){
    return(
        <div className="RegisterAccountProduct">
            <img className="RegisterAccountProduct__img" src={image}></img>
            <div className="RegisterAccountProduct__l">
                <p className="RegisterAccountProduct__l__name">Ut diam consequat</p>
                <p className="RegisterAccountProduct__l__color">Color:Brown</p>
                <p className="RegisterAccountProduct__l__size">Size:XL</p>
            </div>
            <div className="RegisterAccountProduct__r">
            $32.00
            </div>
        </div>
    );
}