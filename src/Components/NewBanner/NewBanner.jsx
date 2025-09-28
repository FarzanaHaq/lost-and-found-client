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
    <div className="h-[763px] lg:h-[1070px] relative">
      <div className=" bg-[#D8E9E7] h-[844px] lg:h-[990px] px-5 lg:px-0">
        <h1 className="w-[280px] md:w-[350px] lg:w-[900px] text-[40px] md:text-[40px]  lg:text-[90px] font-[800] text-[#292A35] pt-10 md:pt-15 lg:pt-25 md:pl-5 lg:pl-25 lg:leading-25">
          We believe the future is bright!
        </h1>
        <div className=" bg-[#FFC941] md:w-[300px] mt-5 md:absolute md:right-10 lg:right-20 z-10">
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
          <button className="w-full  py-6 font-[500] hover:bg-[#202124] hover:text-white">
            Join Us
          </button>
        </div>
        <div>
          <div className="max-w-[1200px] mt-10 md:mt-25 lg:mt-30 mb-25 ">
            <Slider {...settings}>
              <div className="relative h-[200px] md:h-[400px] lg:h-[650px] space-y-4 bg-cover bg-center bg-[url('https://i.ibb.co.com/6RrbgHJ6/will-paterson-zb13-N8-EDj-GE-unsplash.jpg')]"></div>
              <div className="relative h-[200px] md:h-[400px] lg:h-[650px] space-y-4 bg-cover bg-center bg-[url('https://i.ibb.co/1fT1dMWm/taylor-beach-4t-Ye-Gr-Ki-HTE-unsplash.jpg')]"></div>
              <div className="relative h-[200px] md:h-[400px] lg:h-[650px] space-y-4 bg-cover bg-center bg-[url('https://i.ibb.co.com/846mGqy7/ben-duchac-96-DW4-Pow3q-I-unsplash.jpg')]"></div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewBanner;
