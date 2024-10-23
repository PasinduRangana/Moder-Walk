"use client";

const CategoryCard = () => {
  return (
    <div className="flex flex-col sm:flex-row">
      <a
        href="/mens-clothing"
        className="bg-men sm:mr-5 mb-4 sm:mb-0 font-title text-white font-main-header-weight text-main-header-size rounded-lg items-center justify-center text-center h-72 flex basis-full sm:basis-1/2 shadow-md"
      >
        Men's Clothing
      </a>
      <a
        href="/womens-clothing"
        className="bg-woman sm:ml-5 font-title text-white font-main-header-weight rounded-lg text-main-header-size items-center justify-center text-center h-72 flex basis-full sm:basis-1/2 shadow-md"
      >
        Women's Clothing
      </a>
    </div>
  );
};

export default CategoryCard;
