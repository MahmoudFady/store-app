import { displayOneCartProduct } from "../structures/cart.js";
const updateSavedCart = (newCart) => {
    localStorage.setItem("cart", JSON.stringify(newCart));
};
const getSavedCart = () => {
    let savedCart = localStorage.getItem("cart");
    savedCart = savedCart ? savedCart : '{"products":[],"totalPrice":0}';
    return JSON.parse(savedCart);
};
const addProduct = (product) => {
    const newCart = getSavedCart();
    const productExist = newCart.products.findIndex((p) => p.id === product.id) > -1 ? true : false;
    if (productExist) {
        alert("product alredy in your cart.");
        return;
    }
    newCart.products.push(product);
    newCart.totalPrice += product.price;
    updateSavedCart(newCart);
    displayOneCartProduct(product);
};
const removeProduct = (product) => {
    const newCart = getSavedCart();
    newCart.totalPrice -= product.price;
    const removedProductIndex = newCart.products.findIndex((p) => p.id === product.id);
    newCart.products.splice(removedProductIndex, 1);
    updateSavedCart(newCart);
};
export { getSavedCart, addProduct, removeProduct };
