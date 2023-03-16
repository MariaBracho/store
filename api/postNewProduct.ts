import instance from ".";
import { type IProduct } from "../share/interfaces/products";

export default async function postNewProduct({ body }: { body: IProduct }) {
  const categories = await instance.post(`/products/categories`, body);
  return categories;
}
