import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

const NewBanner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="mt-16 h-[1200px] relative">
      <div className=" bg-[#D8E9E7] h-[980px] ">
        <h1 className="text-[90px] font-[800] text-[#292A35] pt-25 pl-25 leading-25">
          We believe the <br /> future is bright!
        </h1>
        <div>
          <div className="max-w-[1200px] mt-28 mb-25">
            <Slider {...settings}>
              <div className="relative h-[650px] space-y-4 bg-cover bg-center bg-[url('https://i.ibb.co.com/6RrbgHJ6/will-paterson-zb13-N8-EDj-GE-unsplash.jpg')]"></div>
              <div className="relative h-[650px] space-y-4 bg-cover bg-center bg-[url('https://i.ibb.co/1fT1dMWm/taylor-beach-4t-Ye-Gr-Ki-HTE-unsplash.jpg')]"></div>
              <div className="relative h-[650px] space-y-4 bg-cover bg-center bg-[url('https://i.ibb.co.com/846mGqy7/ben-duchac-96-DW4-Pow3q-I-unsplash.jpg')]"></div>
            </Slider>
          </div>
        </div>
      </div>
      <div className=" w-[260px] bg-[#FFC941] absolute top-50 right-25">
        <button className="w-full py-6 border-b-1 border-yellow-200 font-[500] hover:bg-[#202124] hover:text-white">
          Lost Something?
        </button>
        <button className="w-full py-6 border-b-1 border-yellow-200 font-[500] hover:bg-[#202124] hover:text-white">
          Found Something?
        </button>
        <button className="w-full py-6 border-b-1 border-yellow-200 font-[500] hover:bg-[#202124] hover:text-white">
          Latest Blogs
        </button>
        <button className="w-full py-6 font-[500] border-b-1 border-yellow-200 hover:bg-[#202124] hover:text-white">
          Volunteer
        </button>
        <button className="w-full py-6 font-[500] hover:bg-[#202124] hover:text-white">
          Join Us
        </button>
      </div>
    </div>
  );
};

export default NewBanner;
