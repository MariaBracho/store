import { type IProduct } from "@/share/interfaces/products";
import { useState } from "react";

export default function Card({
  title,
  description,
  price,
  image,
  onClick,
  isShoppingCard = false,
}: IProduct & { onClick: () => void; isShoppingCard?: boolean }) {
  const [seeMore, setSeeMore] = useState<boolean>(false);

  return (
    <div className="card w-80 h-[380px] bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={title} className="h-28 w-24" />
      </figure>
      <div className="card-body">
        <h2 className="card-title line-clamp-1">{title}</h2>
        <div className="overflow-auto hideScroll max-h-72">
          <p
            data-seeMore={seeMore}
            className="text-sm data-[seeMore=true]:line-clamp-none data-[seeMore=false]:line-clamp-6 font-medium"
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
      </div>
    </div>
  );
}
