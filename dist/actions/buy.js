import { getProductById } from "../http/product.js";
import { addProduct } from "./cart.js";
const buyProduct = function () {
    const buyBtns = document.querySelectorAll("button.buy-btn");
    for (let i = 0; i < buyBtns.length; i++) {
        buyBtns[i].onclick = function () {
            const productId = this.getAttribute("id");
            getProductById(productId).then((product) => {
                addProduct(product);
            });
        };
    }
};
export { buyProduct };
