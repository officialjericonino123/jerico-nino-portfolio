import FeaturedImages1 from "../../../assets/images/img/MODELS/img13.jpg";
import FeaturedImages2 from "../../../assets/images/img/MODELS/img14.jpg";
import FeaturedImages3 from "../../../assets/images/img/MODELS/img15.jpg";
import FeaturedImages4 from "../../../assets/images/img/MODELS/img19.jpg";
import FeaturedImages5 from "../../../assets/images/img/MODELS/img20.jpg";
import FeaturedImages6 from "../../../assets/images/img/MODELS/img22.jpg";

const FeaturedImages = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 p-[5px] gap-[10px] m-[20px]">
        <div className="overflow-hidden rounded-md">
          <img
            src={FeaturedImages1}
            className="w-full rounded-md hover:scale-[1.1] duration-500 ease-in-out"
          />
        </div>

        <div className="overflow-hidden rounded-md">
          <img
            src={FeaturedImages2}
            className="w-full rounded-md hover:scale-[1.1] duration-500 ease-in-out"
          />
        </div>

        <div className="overflow-hidden rounded-md">
          <img
            src={FeaturedImages3}
            className="w-full rounded-md hover:scale-[1.1] duration-500 ease-in-out"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 p-[5px] gap-[10px] m-[20px]">
        <div className="overflow-hidden rounded-md">
          <img
            src={FeaturedImages4}
            className="w-full rounded-md hover:scale-[1.1] duration-500 ease-in-out"
          />
        </div>

        <div className="overflow-hidden rounded-md">
          <img
            src={FeaturedImages5}
            className="w-full rounded-md hover:scale-[1.1] duration-500 ease-in-out"
          />
        </div>

        <div className="overflow-hidden rounded-md">
          <img
            src={FeaturedImages6}
            className="w-full rounded-md hover:scale-[1.1] duration-500 ease-in-out"
          />
        </div>
      </div>
    </>
  );
};

export default FeaturedImages;
