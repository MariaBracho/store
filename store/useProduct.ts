import { create } from "zustand";
import { type IProduct } from "@/share/interfaces/products";

interface Store {
  productsCart: IProduct[];
  ToastMessage: {
    message: string;
    show: boolean;
  };
  addToCart: (newProduct: IProduct) => void;
  deleteCart: (deleteProduct: IProduct) => void;
  isProductInCart: (product: IProduct["id"]) => boolean;
  updateProductAmount: (id: IProduct["id"], newAmount: number) => void;
  updateToastMEssage: ({
    message,
    show
  }: {
    message: string;
    show: boolean;
  }) => void;
}

const useProduct = create<Store>((set, get) => ({
  productsCart: [],
  ToastMessage: {
    message: "",
    show: false
  },
  updateToastMEssage: ({ message, show }) => {
    set({ ToastMessage: { message, show } });
  },
  addToCart: (newProduct) => {
    set({
      productsCart: [...get().productsCart, newProduct],
      ToastMessage: { message: "Product added ✨", show: true }
    });
  },
  isProductInCart: (productId) => {
    return get().productsCart.some((p) => p.id === productId);
  },
  deleteCart: (deleteProduct) => {
    const newProductList = get().productsCart.filter(
      (product) => product.id !== deleteProduct.id
    );
    set({
      ToastMessage: { message: "Product deleted 😢", show: true },
      productsCart: newProductList
    });
  },
  updateProductAmount: (id, newAmount) => {
    const newProductList = get().productsCart.map((p) => {
      if (p.id === id) {
        return { ...p, amount: newAmount };
      }
      return p;
    });
    set({ productsCart: newProductList });
  }
}));

export default useProduct;
