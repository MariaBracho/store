import instance from ".";

export default async function getCategory({
  nameCategory
}: {
  nameCategory: string;
}) {
  const categories = await instance.get(`/products/categories/${nameCategory}`);
  return categories;
}
