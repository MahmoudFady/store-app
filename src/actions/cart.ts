import { Product } from "../models/product.model";
import { Cart } from "../models/cart.model";
import { displayOneCartProduct } from "../structures/cart.js";
import { updateCheckOutBtn } from "../structures/check-out-btn.js";
import { getProductById } from "../http/product.js";
const updateSavedCart = (newCart: Cart) => {
  localStorage.setItem("cart", JSON.stringify(newCart));
  updateCheckOutBtn(newCart.totalPrice);
  activeDeleteProductBtns();
};
const getSavedCart = () => {
  let savedCart = localStorage.getItem("cart");
  savedCart = savedCart ? savedCart : '{"products":[],"totalPrice":0}';
  return <Cart>JSON.parse(savedCart);
};
const addProduct = (product: Product) => {
  const newCart = getSavedCart();
  const productExist =
    newCart.products.findIndex((p) => p.id === product.id) > -1 ? true : false;
  if (productExist) {
    alert("product alredy in your cart.");
    return;
  }
  newCart.products.push(product);
  newCart.totalPrice += product.price;

  displayOneCartProduct(product);
  updateSavedCart(newCart);
};
const removeProduct = (product: Product) => {
  const newCart = getSavedCart();
  newCart.totalPrice -= product.price;
  const removedProductIndex = newCart.products.findIndex(
    (p) => p.id === product.id
  );
  newCart.products.splice(removedProductIndex, 1);

  updateSavedCart(newCart);
};
const activeDeleteProductBtns = () => {
  const btns = document.querySelectorAll("button.delete-product");

  for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = function () {
      const productId = <number>(<unknown>this.getAttribute("id"));
      getProductById(productId).then((product: Product) => {
        removeProduct(product);
        this.parentElement?.parentElement?.remove();
      });
    };
  }
};
export { getSavedCart, addProduct, removeProduct, activeDeleteProductBtns };
