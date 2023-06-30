import { ArrowRightUp } from '../elements/Logo'
import { Categories } from '../lib/Constant'

const Category = () => {
  return (
    <div className="flex flex-col justify-center items-center p-4">
      <div className="w-full flex justify-center">
        <div className="flex justify-between items-center sm:w-4/5 md:w-4/5 w-full ">
          <div className="text-left w-full p-4">
            <h1 className="text-2xl py-0.5 font-semibold">Top Categories</h1>
            <p className="text-sm py-0.5">
              Lorem ipsum dolor sit amet, consectetur.
            </p>
          </div>
          <div className="flex justify-end items-end">
            <button className="px-8 flex justify-center items-center text-center rounded-md h-fit py-3 bg-[#6440FB12] mx-3">
              <span className="text-primary w-28 font-semibold text-sm text-center border-primary">
                All Categories
              </span>
              <ArrowRightUp customClass={"text-primary"} />
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:w-4/5 md:w-4/5 w-full p-2 gap-4">
          {Categories?.map((x, index) => (
            <div
              key={index}
              className="flex justify-start items-center p-0.5"
            >
              <div className="p-1 rounded-sm w-1/2 h-full">
                <img
                  src="/assets/images/slidervector.png"
                  className="bg-contain rounded-sm h-full w-fit"
                />
              </div>
              <div className="text-left">
                <h4 className="text-sm font-bold">{x?.title}</h4>
                <p className="text-xs text-gray-500">{x?.tagline}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Category;
