const url = "https://fakestoreapi.com/products/";
const getAllProducts = async () => {
  const response = await fetch(url);
  return response.json();
};
const getProductById = async (id: number) => {
  const response = await fetch(url + id);
  return response.json();
};
export { getAllProducts, getProductById };
