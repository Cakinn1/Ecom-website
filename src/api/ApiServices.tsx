import axios from "axios";

export async function fetchAllProductData(text: string) {
  const { data } = await axios.get(`https://fakestoreapi.com/products/${text}`);
  return data;
}

export async function fetchSingleProduct(id?: string) {
  const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return data;
}

export async function fetchCategory(text: string) {
  const { data } = await axios.get(
    `https://fakestoreapi.com/products/category/${text}`
  );
  return data;
}
