import { useQuery } from "react-query";
import {
  createProduct,
  getLocations,
  getProducts,
  getCategories,
} from "../api/api";
import { Product } from "../types/Product";

export const useProducts = () => {
  return useQuery("products", getProducts);
};

export const useAddProduct = (product: Omit<Product, "date">) => {
  return useQuery("addProducts", () => createProduct(product));
};

export const useLocations = () => {
  return useQuery("locations", getLocations);
};

export const useCategories = () => {
  return useQuery("categories", getCategories);
};