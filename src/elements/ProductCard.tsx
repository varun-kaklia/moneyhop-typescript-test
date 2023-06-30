import {  Category, Star, Stock } from './Logo';

interface ProductProps {
  product?: {
    thumbnail?: string;
    title?: string;
    description?: string;
    category?: string;
    price?: number;
    rating?: number;
    stock?: number;
  };
}

const ProductCard = ({ product }: ProductProps) => {
  if (!product) {
    return null;
  }
  const { thumbnail, title, description, stock, category, rating, price } = product;
  return (
    <div className="mx-4 rounded border w-72 border-gray-200 overflow-hidden shadow-lg">
      <div className="p-2 h-40">
        <img src={thumbnail} alt={title} className="w-full rounded-lg h-full object-contain bg-inherit bg-white" />
      </div>
      <div className="px-6 flex items-center">
        <span className="text-[#E59819] pr-2">{rating}</span>
        <Star customClass={'text-[#E59819]'} />
        <Star customClass={'text-[#E59819]'} />
        <Star customClass={'text-[#E59819]'} />
        <Star customClass={'text-[#E59819]'} />
        <Star customClass={'text-[#E59819]'} />
        <span className="text-sm px-2">(1991)</span>
      </div>
      <div className="px-6 py-2 text-left">
        <div className="font-bold text-xl mb-2 truncate ...">{title}</div>
        <div className="flex">
          <div className="pr-2 flex items-center">
            <Category />
            <span className="text-sm px-1">{category}</span>
          </div>
          <div className="px-2 flex items-center">
            <Stock />
            <span className="text-sm px-1">{stock}</span>
          </div>
        </div>
      </div>
      <div className="px-6 py-2">
        <div className="border-t border-gray-200">
          <div className="flex justify-between items-center">
            <div className="py-2 flex items-center">
              <img src={'/assets/images/tutor.png'} className="w-8 h-8 bg-gray-200 rounded-full" />
              <h2 className="text-sm px-2">SHubh</h2>
            </div>
            <div className="py-2 flex items-center">
              <p className="text-base px-0.5 font-medium text-gray-600 line-through">$189</p>
              <p className="text-lg px-0.5 font-semibold">${price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
