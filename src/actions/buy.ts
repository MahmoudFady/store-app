import { Product } from "./../models/product.model";
import { getProductById } from "../http/product.js";
import { addProduct } from "./cart.js";

const buyProduct = function () {
  const buyBtns = document.querySelectorAll("button.buy-btn");
  for (let i = 0; i < buyBtns.length; i++) {
    buyBtns[i].onclick = function () {
      const productId = <number>(<unknown>this.getAttribute("id"));
      getProductById(productId).then((product: Product) => {
        addProduct(product);
      });
    };
  }
};

export { buyProduct };
