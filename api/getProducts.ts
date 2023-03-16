import { type IProduct } from "@/share/interfaces/products";
import instance from "./index";

export default async function getProducts() {
  const products = await instance.get<IProduct[]>("/products");
  return products.data;
}
