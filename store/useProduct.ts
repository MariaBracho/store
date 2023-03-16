import { create } from "zustand";
import { type IProduct } from "@/share/interfaces/products";

interface Store {
  productsCard: IProduct[];
  addToCart: (newProduct: IProduct) => void;
  deleteCart: (deleteProduct: IProduct) => void;
  isProductInCart: (product: IProduct["id"]) => boolean;
}

const useProduct = create<Store>((set, get) => ({
  productsCard: [],
  addToCart: (newProduct) => {
    set({ productsCard: [...get().productsCard, newProduct] });
  },
  isProductInCart: (productId) => {
    return get().productsCard.some((p) => p.id === productId);
  },
  deleteCart: (deleteProduct) => {
    const newProductList = get().productsCard.filter(
      (product) => product.id !== deleteProduct.id
    );
    set({ productsCard: newProductList });
  }
}));

export default useProduct;
