import axios from "axios";

export async function fetchAllProductData(text?: string) {
  try {
    const { data } = await axios.get(
      `https://fakestoreapi.com/products/${text}`
    );
    return data;
  } catch (error) {
    console.error("Error data", error);
    throw error;
  }
}

export async function fetchSingleProduct(id?: string) {
  try {
    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return data;
  } catch (error) {
    console.error("Error data", error);
    throw error;
  }
}

export async function fetchCategory(text: string) {
  try {
    const { data } = await axios.get(
      `https://fakestoreapi.com/products/category/${text}`
    );
    return data;
  } catch (error) {
    console.error("Error data", error);
    throw error;
  }
}
