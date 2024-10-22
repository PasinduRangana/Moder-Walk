"use client";

import CategoryCard from "@/app/components/CategoryCard/page";
import IteamCard from "@/app/components/ItemCard/page";
import { useSelector } from "react-redux";

const HomePage = () => {
  const allProducts = useSelector((state) => state.products.allProducts);



  return (
    <div>
      {/* Body section */}
      <section className="mt-6 ml-12 mr-12">
        <h2 className="font-title text-black font-main-header-weight text-sub-header-size">
          Flash Sale
        </h2>
        {/* Cards section */}
        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-8 mt-6 auto-rows-auto">
        {allProducts.map((data) => {
         
            if (
              data.category === "men's clothing" ||
              data.category === "women's clothing"
            ) {
              return <IteamCard data={data} key={data.id} />;
            }
            return null; 
          })}
        </section>
        {/* Categories Section */}
        <section className="mt-12 mb-8 ml-4 mr-4">
          <h2 className="font-title text-black font-main-header-weight text-sub-header-size mb-6">
            Categories
          </h2>
          <CategoryCard />
        </section>
      </section>
    </div>
  );
};

export default HomePage;
