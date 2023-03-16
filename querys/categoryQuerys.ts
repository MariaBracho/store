import { useQuery } from "react-query";
import getCategories from "@/api/getCategories";
import getCategory from "@/api/getCategory";

const categoryQueryKey = "categories";

export function useGetCategories() {
  return useQuery(categoryQueryKey, getCategories);
}

export function useGetCategoryById(nameCategory: string) {
  return useQuery(
    [categoryQueryKey, nameCategory],
    async () => await getCategory({ nameCategory })
  );
}
