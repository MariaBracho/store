import { useState } from "react";
import Image from "next/image";
import useProduct from "@/store/useProduct";
import { type IProduct } from "@/share/interfaces/products";

interface Props extends IProduct {
  onClick: () => void;
  isShoppingCard?: boolean;
}

export default function Card({
  id,
  title,
  description,
  price,
  image,
  onClick,
  amount: productAmount,
  isShoppingCard = false,
}: Props) {
  const [seeMore, setSeeMore] = useState<boolean>(false);
  const [amount, setAmount] = useState<number>(productAmount);

  const store = useProduct();

  const increaseAmount = () => {
    setAmount((current) => current + 1);
    store.updateProductAmount(id, amount + 1);
  };
  const decreaseAmount = () => {
    setAmount((current) => current - 1);
    store.updateProductAmount(id, amount - 1);
  };

  const disabledButton = amount === 0;

  return (
    <div className="card w-80 h-[380px] bg-base-100 shadow-xl">
      <figure>
        <Image
          src={image}
          alt={title}
          className="h-auto w-auto"
          height={112}
          width={96}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title line-clamp-1">{title}</h2>
        <div className="overflow-auto hideScroll max-h-72">
          <p
            data-seemore={seeMore}
            className="text-sm data-[seemore=true]:line-clamp-none data-[seemore=false]:line-clamp-6 font-medium"
          >
            {description}
          </p>
          <p
            className="cursor-pointer font-bold text-primary"
            onClick={() => {
              setSeeMore(!seeMore);
            }}
          >
            {seeMore ? "see less" : "see more"}
          </p>
        </div>

        <div className="card-actions justify-end items-center">
          <p className="font-bold">$ {price}</p>
          {isShoppingCard ? (
            <button onClick={onClick} className="btn">
              delete
            </button>
          ) : (
            <button onClick={onClick} className="btn">
              add
            </button>
          )}
        </div>

        {isShoppingCard && (
          <div className="w-36">
            <div className="flex items-center justify-center gap-2">
              <button
                onClick={increaseAmount}
                className=" btn h-6 min-h-6 w-6 btn-ghost font-extrabold text-2xl"
              >
                <p className="h-full flex items-center">+</p>
              </button>
              <p className="text-center font-bold">{amount}</p>
              <button
                disabled={disabledButton}
                onClick={decreaseAmount}
                className="btn btn-ghost h-6 min-h-6 font-extrabold text-2xl"
              >
                <p className="h-full flex items-center">-</p>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
