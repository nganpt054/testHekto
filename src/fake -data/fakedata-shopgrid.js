export const  shopgrid_product = [
  { 
    id:"sg1",
    image: "/images/image 9.png",
    title: "Vel elit euismod",
  },
  {
    id:"sg2",
    image: "/images/image 1165.png",
    title: "Ultricies condimentum imperdiet",
  },
  {
    id:"sg3",
    image: "/images/image 1173.png",
    title: "Vitae suspendisse sed",
  },
  {
    id:"sg4",
    image: "/images/10011 1.png",
    title: "Sed at fermentum",
  },
  {
    id:"sg5",
    image: "/images/unnamed 1.png",
    title: "Fusce pellentesque at ",
  },
  {
    id:"sg6",
    image: "/images/laooret.png",
    title: "Vestibulum magna laoreet  ",
  },
  {
    id:"sg7",
    image: "/images/purepng 1.png",
    title: "Sollicitudin amet orci",
  },
  {
    id:"sg8",
    image: "/images/image 1164.png",
    title: "Ultrices mauris sit",
  },
  {
    id:"sg9",
    image: "/images/res.png",
    title: "Pellentesque condimentum ac",
  },
  {
    id:"sg10",
    image: "/images/cam 2.png",
    title: "Cras scelerisque velit",
  },
  {
    id:"sg11",
    image: "/images/lectus.png",
    title: "Lectus vulputate faucibus",
  },
  {
    id:"sg12",
    image: "/images/10011 1.png",
    title: "Purus risus, ut",
  },
];
const getById = (id) => shopgrid_product.find((e) => e.id === id);
const getCartDetail = (cartItems) => {
  let res = [];
  if (cartItems.length > 0) {
    cartItems.forEach((e) => {
      let product = getById(e.id);
      res.push({
        ...e,
        product: product,
      });
    });
  }
  return res.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0));
};
const productData = {
  getById,
  getCartDetail
};
export default productData;

