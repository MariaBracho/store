import { useCallback, useMemo, useState } from "react";
import { useRouter } from "next/router";

import Card from "../Card";
import Spin from "../shared/Spin";
import SearchProduct from "../SearchProduct";

import { type IProduct } from "@/share/interfaces/products";

interface IProductList {
  data: IProduct[];
  isLoading: boolean;
  onClick: (product: IProduct) => void;
  isProductInCart: (id: IProduct["id"]) => boolean;
}

export default function ProductList({
  data,
  isLoading,
  onClick,
  isProductInCart,
}: IProductList) {
  const [filteredKey, setFilteredKey] = useState("");

  const filterProduct = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setFilteredKey(value);
    },
    []
  );

  const router = useRouter();

  const currentPath = useMemo(() => router.pathname, [router.pathname]);
  const isShoppingCard = currentPath === "/shoppingCart";

  const handleClickProduct = useCallback(
    (product: IProduct) => () => {
      isProductInCart(product.id) && !isShoppingCard
        ? console.log("product already in cart")
        : onClick(product);
    },
    []
  );

  const products = useMemo(() => {
    return filteredKey
      ? data.filter(({ title }) => title.includes(filteredKey))
      : data;
  }, [data, filteredKey]);

  return (
    <div>
      {isLoading ? (
        <Spin />
      ) : (
        <>
          <SearchProduct onChange={filterProduct} />
          <div className="min-h-screen w-full max-w-[1400px] my-10 flex flex-wrap gap-10 justify-center">
            {products.length !== 0 ? (
              products.map((product) => {
                const {
                  title,
                  amount,
                  description,
                  price,
                  image,
                  category,
                  id,
                } = product;
                return (
                  <Card
                    key={id}
                    id={id}
                    amount={amount}
                    isShoppingCard={isShoppingCard}
                    onClick={handleClickProduct(product)}
                    title={title}
                    description={description}
                    price={price}
                    category={category}
                    image={image}
                  />
                );
              })
            ) : (
              <p className="mt-28 text-2xl font-bold text-gray-500">
                There are no products
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
}
