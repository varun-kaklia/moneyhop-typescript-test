import { Category, Container, Footer, Header, NewsLetter, Slider } from "../components/index";
import { Globe } from "../elements/Logo";

const HomePage = () => {
  return (
    <div className="">
      {/* Slider */}
      <div className="py-1">
        <Slider/>
      </div>
      {/* Category Section */}
      <div className="w-full">
        <Category/>
      </div>
      {/* Product Carousal Container */}
      <div className="py-2">
        <Container/>
      </div>
      <div className="py-2">
        <NewsLetter/>
      </div>
    </div>
  );
};

export default HomePage;
