import { axiosInstance } from './axiosInstsance';

const createProduct = async (product: Omit<Product | >) => {
    try {
        const response = await axiosInstance.post("/products", productData);

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