import { activeDeleteProductBtns, getSavedCart } from "../actions/cart.js";
import { updateCheckOutBtn } from "./check-out-btn.js";
const displayOneCartProduct = (product) => {
    const cartElementHook = document.getElementById("cartHook");
    const structure = `
              <tr>
                <td><img src="${product.image}" alt="" /></td>
                <td>${product.category}</td>
                <td>${product.price} $</td>
                <td><button class="btn btn-danger delete-product"
                 id=${product.id}>delete</button></td>
              </tr>`;
    cartElementHook === null || cartElementHook === void 0 ? void 0 : cartElementHook.insertAdjacentHTML("afterbegin", structure);
};
const loadSavedCart = () => {
    const cart = getSavedCart();
    for (let i = 0; i < cart.products.length; i++) {
        displayOneCartProduct(cart.products[i]);
    }
    activeDeleteProductBtns();
    updateCheckOutBtn(cart.totalPrice);
};
export { displayOneCartProduct, loadSavedCart };
