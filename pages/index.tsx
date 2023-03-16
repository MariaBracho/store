import useProduct from "@/store/useProduct";
import { useGetProduct } from "@/querys/productQuerys";
import { useEffect, useState } from "react";

import Hero from "@/components/Hero";
import ProductList from "@/components/ProductList";
import Toast from "@/components/shared/Toast";

export default function Home() {
  const {
    addToCart: addToCard,
    isProductInCart,
    ToastMessage,
    updateToastMEssage,
  } = useProduct();
  const [show, setShow] = useState(ToastMessage.show);

  useEffect(() => {
    setShow(ToastMessage.show);
    if (ToastMessage.show) {
      setTimeout(() => {
        updateToastMEssage({ show: false, message: "" });
      }, 3000);
    }
  }, [ToastMessage.show]);

  const { data = [], isLoading } = useGetProduct();
  return (
    <>
      <main>
        <Hero />
        <div className="flex flex-col items-center">
          <div className="w-full max-w-[1400px]">
            <p className="text-start text-2xl font-semibold px-10 pt-10">
              Products
            </p>
          </div>
          <ProductList
            data={data}
            isLoading={isLoading}
            onClick={addToCard}
            isProductInCart={isProductInCart}
          />
        </div>
        <Toast showToast={show} message={ToastMessage.message} />
      </main>
    </>
  );
}
