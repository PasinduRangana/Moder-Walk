"use Client";

import Link from "next/link";

const HeaderComp = () => {
  return (
    
    <a className="flex flex-col justify-center items-center" href="/">
      <h1 className="font-title text-black text-main-header-size font-main-header-weight">
        Modern Walk
      </h1>
      <div className="border-2 border-gray shadow-customShadow w-full mt-2"></div>
    </a>
    
  );
};

export default HeaderComp;
