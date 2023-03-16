import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import getProducts from "@/api/getProducts";
import getProduct from "@/api/getProduct";
import postNewProduct from "@/api/postNewProduct";

import { type IProduct } from "@/share/interfaces/products";

const productQueryKey = "products";

export function useGetProduct() {
  return useQuery(["products"], getProducts);
}

export function useGetProductById(id: string) {
  return useQuery([productQueryKey, id], async () => await getProduct({ id }));
}

export function usePostProduct() {
  const queryClient = useQueryClient();
  const { mutate, isLoading, isError, error } = useMutation(
    async ({ product }: { product: IProduct }) => {
      await queryClient.invalidateQueries([productQueryKey]);
      await postNewProduct({ body: product });
    }
  );
  return { mutate, isLoading, isError, error };
}
