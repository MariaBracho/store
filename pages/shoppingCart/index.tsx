import ProductList from "@/components/ProductList";
import Toast from "@/components/shared/Toast";
import useProduct from "@/store/useProduct";
import { useEffect, useState } from "react";

export default function ShoppingCart() {
  const {
    productsCart: productsCard,
    deleteCart: deleteCard,
    isProductInCart,
    updateToastMEssage,
    ToastMessage,
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

  return (
    <div className="px-10 pt-10">
      <Toast showToast={show} message={ToastMessage.message} />
      <div className="flex flex-col items-center">
        <div className="w-full max-w-[1400px]">
          <p className="text-2xl font-semibold">Shopping Cart</p>
        </div>
        <ProductList
          data={productsCard}
          isLoading={false}
          onClick={deleteCard}
          isProductInCart={isProductInCart}
        />
      </div>
    </div>
  );
}
