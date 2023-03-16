import ProductList from "@/components/ProductList";
import useProduct from "@/store/useProduct";

export default function ShoppingCart() {
  const {
    productsCard,
    deleteCart: deleteCard,
    isProductInCart,
  } = useProduct();
  return (
    <div className="px-10 pt-10">
      <p className="text-2xl font-semibold">Shopping Cart</p>
      <ProductList
        data={productsCard}
        isLoading={false}
        onClick={deleteCard}
        isProductInCart={isProductInCart}
      />
    </div>
  );
}
