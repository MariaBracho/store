import Card from "../Card";
import Spin from "../shared/Spin";
import SearchProduct from "../SearchProduct";
import { useCallback, useMemo, useState } from "react";
import { type IProduct } from "@/share/interfaces/products";
import { useRouter } from "next/router";

interface IProductList {
  data: IProduct[];
  isLoading: boolean;
  onClick: (product: IProduct) => void;
  isProductInCart: (id: string | undefined) => boolean;
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
          <div className="min-h-screen my-10 flex flex-wrap gap-10 justify-center">
            {products.map((product) => {
              const { title, description, price, image, category, id } =
                product;
              return (
                <Card
                  key={id}
                  isShoppingCard={isShoppingCard}
                  onClick={handleClickProduct(product)}
                  title={title}
                  description={description}
                  price={price}
                  category={category}
                  image={image}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
