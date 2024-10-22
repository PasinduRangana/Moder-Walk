"use client";

import Image from "next/image";

import meansJacket from "../../assets/images/mensJacket.png";

const IteamCard = () => {
  return (
    <div className="bg-white rounded-xl pt-4 shadow-md text-center max-w-60 max-h-72 flex flex-col justify-center items-center">
      <p className="font-title text-black font-main-header-weight text-card-title-size">
        Mens Cotton Jacket
      </p>
      <Image
        src={meansJacket}
        alt="Mens Cotton Jacket"
        className="w-28 object-cover mb-4 mt-3"
      />

      <div className="bg-men flex flex-col max-h-28 w-full rounded-xl justify-center items-center px-5 py-2">
        <p className="font-title text-blue font-main-header-weight text-card-title-size">
          Rs 55.99
        </p>
        <p className=" font-title text-black text-card-discription-size font-discription-text-weight">
          Great outdoor jacket for Spring /Autumn...hasdjfg hasdfghj hafdj ADSF
          AJSDNFNN nbnaf adfnmn asdfna,sdfn
        </p>
      </div>
    </div>
  );
};

export default IteamCard;
