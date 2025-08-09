import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className="max-w-7xl mx-auto my-32 px-5">
        <Slider {...settings}>
          <div className="relative h-[550px] space-y-4 bg-cover bg-center bg-[url('https://i.ibb.co/pr9TT49z/juho-luomala-GVRH4yv55kk-unsplash.jpg')]">
             <div className="h-[550px] absolute inset-0 bg-black/30"></div>
           <div className="mt-40 relative z-10">
             <p className="text-center text-white text-[60px] font-medium">
            Lost Something Important?
            </p>
            <p className="text-center text-gray-100 text-[24px] font-semibold mt-5 ">
             Don’t panic. Submit your lost item details and let our <br /> community help you recover it.
            </p>
            <div className="flex justify-center">
              <button className="btn text-white text-[16px] bg-transparent border-none font-bold shadow-none rounded-none mt-5 flex items-center">
               Report Lost Item <FaArrowRight className="mt-1"/>
              </button>
            </div>
           </div>
          </div>
            <div className="relative h-[550px] space-y-4 bg-cover bg-center bg-[url('https://i.ibb.co/1fT1dMWm/taylor-beach-4t-Ye-Gr-Ki-HTE-unsplash.jpg')]">
             <div className="h-[550px] absolute inset-0 bg-black/20"></div>
           <div className="mt-40 relative z-10">
             <p className="text-center text-white text-[50px] font-medium">
           Found Something That’s Not Yours?
            </p>
            <p className="text-center text-gray-100 text-[24px] font-semibold mt-5 ">
              Help reunite it with the rightful owner. Post what you’ve <br /> found in just a few clicks.
            </p>
            <div className="flex justify-center">
              <button className="btn text-white text-[16px] bg-transparent border-none font-bold shadow-none rounded-none mt-5 flex items-center">
                 Post Found Item<FaArrowRight className="mt-1"/>
              </button>
            </div>
           </div>
          </div>
             <div className="relative h-[550px] space-y-4 bg-cover bg-center bg-[url('https://i.ibb.co/WNXXSsDh/elimende-inagella-HTpl-JM19vhk-unsplash.jpg')]">
             <div className="h-[550px] absolute inset-0 bg-black/15"></div>
           <div className="mt-40 relative z-10">
             <p className="text-center text-white text-[50px] font-medium">
            Browse the Latest Lost & Found Reports
            </p>
            <p className="text-center text-gray-100 text-[22px] font-semibold mt-5 ">
             Stay updated with recent activity. You might spot something <br /> you’ve lost — or help someone else.
            </p>
            <div className="flex justify-center">
              <button className="btn text-white bg-transparent text-[16px] border-none font-bold shadow-none rounded-none mt-5 flex items-center">
               View Recent Posts <FaArrowRight className="mt-1"/>
              </button>
            </div>
           </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
