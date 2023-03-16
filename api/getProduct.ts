import instance from ".";

export default async function getProduct({ id }: { id: string }) {
  const product = await instance.get(`/products/${id}`);
  return product;
}
