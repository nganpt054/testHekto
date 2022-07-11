export default function OrderComp(){
    return(
        <div className="OrderComp">
            <div className="OrderComp__Tb">
                <h2 className="OrderComp__Tb__td">Your Order Is Completed!</h2>
                <div className="OrderComp__Tb__tc">
                    <p className="OrderComp__Tb__tc__t">
                    Thank you for your order! Your order is being processed 
                    and will be completed within 3-6 hours. You will receive 
                    an email confirmation when your order is completed.
                    </p>
                </div>
                <button className="OrderComp__Tb__btn">Continue Shopping</button>
                <div className="OrderComp__Tb__img" >
                    <img className="OrderComp__Tb__img__clock" src="../images/clock 1.png"></img>
                    <img className="OrderComp__Tb__img__check" src="../images/checklist 1.png"></img>
                    <img className="OrderComp__Tb__img__tich" src="../images/vectortich.png"></img>
                </div>
            </div>
        </div>
    );
}