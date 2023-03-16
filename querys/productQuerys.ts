import { useQuery } from "@tanstack/react-query";

import getProducts from "@/api/getProducts";

export function useGetProduct() {
  return useQuery(["products"], getProducts);
}
