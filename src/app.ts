import { Product } from "./models/product.model";
import { getAllProducts } from "./http/product.js";
import { displayAllProducts } from "./structures/product.js";
import { buyProduct } from "./actions/buy.js";
import { loadSavedCart } from "./structures/cart.js";
const productElementHook = <HTMLElement>document.getElementById("productsHook");

getAllProducts()
  .then((products: Product[]) => {
    displayAllProducts(productElementHook, products);
    buyProduct();
  })
  .catch((err) => {
    alert(err.message);
  });
document.body.onload = () => {
  loadSavedCart();
};
