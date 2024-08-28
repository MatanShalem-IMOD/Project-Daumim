import { useQuery } from "react-query";
import { createProduct, getProducts } from "../api/api";
import { Product } from "../types/Product";

export const useProducts = () => {
  return useQuery("products", getProducts);
};

export const useAddProduct = (product: Omit<Product, "date">) => {
  return useQuery("addProducts", () => createProduct(product));
};