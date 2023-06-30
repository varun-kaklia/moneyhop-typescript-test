import { useEffect, useState } from "react";
import { ArrowRightUp } from "../elements/Logo";
import { makeRequest } from "../api/https";
import { Slider, ProductCard } from "../elements";

const Container = () => {
  const [products, setProducts] = useState([]);

  const api = async () => {
    const req = await makeRequest("get", "");
    const res = await req;
    if (res) {
      setProducts(res?.products);
    }
  };

  useEffect(() => {
    api();
  }, []);

  return (
    <div className="flex justify-center w-full p-4">
      <div className="bg-gray-100 w-full py-12 flex flex-col justify-center rounded-lg">
        <div className="flex justify-center items-center w-full">
          <div className="flex justify-between items-center sm:w-4/5 md:w-4/5 w-full ">
            <div className="text-left w-full p-4">
              <h1 className="text-2xl py-0.5 font-semibold">Top Courses</h1>
              <p className="text-sm py-0.5">
                10,000+ unique online course list designs
              </p>
            </div>
            <div className="flex justify-end items-end">
              <button className="lg:px-8 md:px-6 sm:px-4 px-3 flex justify-center items-center text-center rounded-md h-fit py-3 bg-[#6440FB12] lg:mx-3 md:mx-2 sm:mx-1.5 mx-1">
                <span className="text-primary lg:w-28 md:w-24 sm:w-20 w-20 font-semibold text-sm text-center border-primary">
                  All Courses
                </span>
                <ArrowRightUp customClass={"text-primary"} />
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-full lg:p-6 md:p-4 sm:p-3 p-2">
          <div className="flex justify-between items-center sm:w-4/5 md:w-4/5 w-full ">
            <Slider productLength={products?.length}>
              {products?.length > 0 &&
                products?.map((x, index) => (
                  <ProductCard key={index} product={x} />
                ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
