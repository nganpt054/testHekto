import MoreDetails from "./MoreDetails";
function Description() {
  return (
    <div className="contentShop__description">
      <div className="contentShop__description__details">
        <div className="contentShop__description__details__menu">
          <h1>Description</h1>
          <h1>Additional Info</h1>
          <h1>Reviews</h1>
          <h1>Video</h1>
        </div>
        <div className="contentShop__description__details__varius">
          <h2>Varius tempor.</h2>
          <p>
            Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
            ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris
            varius ac est bibendum. Scelerisque a, risus ac ante. Velit
            consectetur neque, elit, aliquet. Non varius proin sed urna, egestas
            consequat laoreet diam tincidunt. Magna eget faucibus cras justo,
            tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla
            lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui,
            massa viverr .
          </p>
        </div>
        <div className="contentShop__description__details__moredetails">
          <h2>More details</h2>
          <MoreDetails />
          <MoreDetails />
          <MoreDetails />
          <MoreDetails />
        </div>
      </div>
    </div>
  );
}
export default Description;
