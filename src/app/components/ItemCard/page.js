"use client";

import Image from "next/image";

const IteamCard = ({ data }) => {
  const truncateTitle = data.title.split(" ").slice(0, 3).join(" ");

  return (
    <div className="bg-white rounded-xl pt-4 shadow-md text-center max-w-60 max-h-72 flex flex-col justify-between items-center">
      <p className="font-title text-black font-main-header-weight text-card-title-size line-clamp-1">
        {truncateTitle}
      </p>

      <Image
        src={data.image.replace(/\\/g, "/")}
        loader={({ src }) => src}
        width={64}
        height={64}
        alt="Mens Cotton Jacket"
        className="object-contain"
      />

      <div
        className={`${
          data.category === "women's clothing"
            ? "bg-woman"
            : data.category === "men's clothing"
            ? "bg-men"
            : "bg-slate-400"
        } flex flex-col max-h-28 w-full rounded-xl justify-center items-center px-6 py-2`}
      >
        <p className="font-title text-blue font-main-header-weight text-card-title-size">
          Rs {data.price}
        </p>
        <p className="font-title text-black text-card-discription-size font-discription-text-weight text-center line-clamp-3 break-words">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default IteamCard;
