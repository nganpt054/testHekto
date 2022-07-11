import {shopgrid_product} from "../fake -data/fakedata-shopgrid";
import GridProduct from "./GridProduct";
function ShopGridProduct() {
  return (
    <div className="contentShop__shopgrid">
      <div className="contentShop__shopgrid__listitem">
        {shopgrid_product.map((product) => (
          <GridProduct image={product.image} title={product.title} />
        ))}
      </div>
    </div>
  );
}
export default ShopGridProduct;
