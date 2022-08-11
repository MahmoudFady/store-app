const updateCheckOutBtn = (newTotalPrice) => {
    const checkOutBtnHook = (document.getElementById("checkOutBtnHook"));
    const btn = `<button class="btn btn-primary btn-check-out">check out ${newTotalPrice} $</button>`;
    const message = `<h3>your cart is empty.</h3>`;
    newTotalPrice = Math.floor(newTotalPrice);
    checkOutBtnHook.innerHTML = newTotalPrice > 0 ? btn : message;
};
export { updateCheckOutBtn };
