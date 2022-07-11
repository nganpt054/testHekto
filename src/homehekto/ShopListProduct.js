import shoplist from "../fake -data/fakedata-shoplist";
import ListProduct from "./ListProduct";

function ShopListProduct() {
  return (
    <div className="contentShop__shoplist">
      {shoplist.map((list) => (
        <ListProduct
          image={list.image}
          title={list.title}
          colors={list.color}
          price={list.price}
          sale={list.sale}
          ratings={list.rating}
          description={list.description}
          vectors={list.vector}
        />
      ))}
    </div>
  );
}
export default ShopListProduct;
