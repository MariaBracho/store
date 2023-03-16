import instance from ".";

export default async function getCategories() {
  const categories = await instance.get(`/products/categories`);
  return categories;
}
