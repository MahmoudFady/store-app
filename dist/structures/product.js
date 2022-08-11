const doProductStructure = (product) => {
    const structure = `
        <div class="col-sm-12 col-md-6 col-lg-4 col-xlg-3">
          <div class="product-item">
            <header><img src="${product.image}" alt="" /></header>
            <div class="product-title">
              <p>${product.title}</p>
            </div>  
            <strong>${product.price} $</strong>      
            <button type="button" class="btn buy-btn"
             id="${product.id}">buy</button>
          </div>
        </div>
  `;
    return structure;
};
const displayOneProduct = (element, product) => {
    const productStructure = doProductStructure(product);
    element.insertAdjacentHTML("beforeend", productStructure);
};
const displayAllProducts = (element, products) => {
    for (let product of products) {
        displayOneProduct(element, product);
    }
};
export { doProductStructure, displayOneProduct, displayAllProducts };
