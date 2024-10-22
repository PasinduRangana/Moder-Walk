"use client";

import IteamCard from "@/app/components/ItemCard/page";

const HomePage = () => {
  return (
    <div>
      {/* Header section */}
      <section className="flex flex-col justify-center items-center">
        <h1 className="font-title text-black text-main-header-size font-main-header-weight">
          Modern Walk
        </h1>
        <div className="border-2 border-gray shadow-customShadow w-full mt-2"></div>
      </section>

      {/* Body section */}
      <section className="mt-6 ml-12 mr-12">
        <h2 className="font-title text-black font-main-header-weight text-sub-header-size">
          Flash Slae
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {/* Cards section */}
         <IteamCard/>
          {/* Card 2 */}
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <img
              src="/images/womens-short-sleeve.png"
              alt="Women's Short Sleeve"
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-lg font-semibold">Women's Short Sleeve</h3>
            <p className="text-red-600 font-bold">Rs 7.95</p>
            <p className="text-gray-600">100% Polyester. Machine wash...</p>
          </div>
          {/* Card 3 */}
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <img
              src="/images/mens-cotton-jacket.png"
              alt="Mens Cotton Jacket"
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-lg font-semibold">Mens Cotton Jacket</h3>
            <p className="text-green-600 font-bold">Rs 55.99</p>
            <p className="text-gray-600">
              Great outdoor jacket for Spring/Autumn...
            </p>
          </div>
          {/* Card 4 */}
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <img
              src="/images/womens-short-sleeve.png"
              alt="Women's Short Sleeve"
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-lg font-semibold">Women's Short Sleeve</h3>
            <p className="text-red-600 font-bold">Rs 7.95</p>
            <p className="text-gray-600">100% Polyester. Machine wash...</p>
          </div>
        </div>
        {/* Categories Section */}
        <div className="mt-12 mb-8 ml-4 mr-4">
          <h2 className="font-title text-black font-semibold text-2xl mb-4">
            Categories
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <a
              href="/mens-clothing"
              className="bg-teal-500 text-white font-semibold py-8 rounded-lg text-center text-xl"
            >
              Men's Clothing
            </a>
            <a
              href="/womens-clothing"
              className="bg-pink-500 text-white font-semibold py-8 rounded-lg text-center text-xl"
            >
              Women's Clothing
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
