"use client";

import Image from "next/image";

const IteamCard = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md text-center">
      <Image
        src=""
        alt="Mens Cotton Jacket"
        className="w-full h-48 object-cover mb-4"
      />

      <p className="font-title text-blue font-main-header-weight">Rs 55.99</p>
      <p className="font-title text-blue">
        Great outdoor jacket for Spring/Autumn...
      </p>
    </div>
  );
};

export default IteamCard;
