import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      <div className="max-w-6xl mx-auto my-16">
        <Slider {...settings}>
          <div className=" py-32 space-y-4 bg-cover bg-center bg-[url('https://i.ibb.co/pr9TT49z/juho-luomala-GVRH4yv55kk-unsplash.jpg')]">
            <p className="text-center text-white text-3xl font-medium">
            Lost Something Important?
            </p>
            <p className="text-center text-white text-[18px]">
             Don’t panic. Submit your lost item details and let our community help you recover it.
            </p>
            <div className="flex justify-center">
              <button className="btn text-blue-800 font-bold shadow-none rounded-none mt-5">
               Report Lost Item
              </button>
            </div>
          </div>
          <div className=" py-32 space-y-4 bg-[url('https://i.ibb.co/1fT1dMWm/taylor-beach-4t-Ye-Gr-Ki-HTE-unsplash.jpg')] bg-cover bg-center">
            <p className="text-center text-white  text-3xl font-medium">
             Found Something That’s Not Yours?
            </p>
            <p className="text-center text-white text-[18px]">
            Help reunite it with the rightful owner. Post what you’ve found in just a few clicks.
            </p>
            <div className="flex justify-center">
              <button className="btn text-[#01875F] font-bold shadow-none rounded-none mt-5">
                Post Found Item
              </button>
            </div>
          </div>
          <div className=" py-32 space-y-4 bg-[url('https://i.ibb.co/WNXXSsDh/elimende-inagella-HTpl-JM19vhk-unsplash.jpg')] bg-cover bg-center">
            <p className="text-center text-white  text-3xl font-medium">
              Browse the Latest Lost & Found Reports
            </p>
            <p className="text-center text-white text-[18px]">
              Stay updated with recent activity. You might spot something you’ve lost — or help someone else.
            </p>
            <div className="flex justify-center">
              <button className="btn text-[#01875F] font-bold shadow-none rounded-none mt-5">
               View Recent Posts
              </button>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
