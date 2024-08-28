import { Product } from "../types/Product";
import { axiosInstance } from "./AxiosInstsance";

const createProduct = async (product: Omit<Product, "date">) => {
    try {
        const response = await axiosInstance.post("/product", product);

        return response.data;
    } catch (error) {
        console.error('Error creating product:', error);
        throw error;
    }
};

const getProducts = async () => {
    try {
        const response = await axiosInstance.get("/products");

        return response.data;
    } catch (error) {
        console.error('Error getting products:', error);
        throw error;
    }
};

export { createProduct, getProducts };