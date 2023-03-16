import Link from "next/link";
import useProduct from "@/store/useProduct";
import { useMemo } from "react";

export default function Header() {
  const { productsCart: productsCard } = useProduct();

  const mountTotal = useMemo(
    () =>
      productsCard.reduce((acc: number, { amount }: { amount: number }) => {
        return acc + amount;
      }, 0),
    [productsCard]
  );

  const pricesTotal = useMemo(
    () =>
      productsCard.reduce((acc: number, { price, amount }) => {
        return acc + price * amount;
      }, 0),
    [productsCard]
  );

  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          StoreChic
        </Link>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">
                {mountTotal}
              </span>
            </div>
          </label>

          <div
            tabIndex={0}
            className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">{mountTotal} Items</span>
              <p className="text-info">
                Subtotal: <span className="text-neutral"> $ {pricesTotal}</span>{" "}
              </p>
              <div className="card-actions">
                <Link
                  href="/shoppingCart"
                  className="btn btn-primary btn-block"
                >
                  View cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
