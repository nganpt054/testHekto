import RelatedProduct from "./RelatedProduct";

function Related() {
  const fakedata = [
    {
      image: "./images/Rectangle 128.png",
      title: "Mens Fashion Wear",
      price: "$43.00",
      rating: [
        "./images/Vector (8).png",
        "./images/Vector (8).png",
        "./images/Vector (8).png",
        "./images/Vector (8).png",
        "./images/Vector (10).png",
      ],
    },
    {
      image: "./images/Rectangle 133.png",
      title: "Women’s Fashion",
      price: "$67.00",
      rating: [
        "./images/Vector (8).png",
        "./images/Vector (8).png",
        "./images/Vector (8).png",
        "./images/Vector (8).png",
        "./images/Vector (8).png",
      ],
    },
    {
      image: "./images/Rectangle 130.png",
      title: "Wolx Dummy Fashion",
      price: "$67.00",
      rating: [
        "./images/Vector (8).png",
        "./images/Vector (8).png",
        "./images/Vector (8).png",
        "./images/Vector (8).png",
        "./images/Vector (10).png",
      ],
    },
    {
      image: "./images/Rectangle 131.png",
      title: "Top Wall Digital Clock",
      price: "$51.00",
      rating: [
        "./images/Vector (8).png",
        "./images/Vector (8).png",
        "./images/Vector (8).png",
        "./images/Vector (10).png",
        "./images/Vector (10).png",
      ],
    },
  ];
  return (
    <div id="related">
      <div className="contentShop__related">
        <div className="contentShop__related__products">
          <h1>Related Products</h1>
        </div>
        <div className="contentShop__related__slide">
          {fakedata.map((fake) => (
            <RelatedProduct
              image={fake.image}
              title={fake.title}
              rating={fake.rating}
              price={fake.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Related;
