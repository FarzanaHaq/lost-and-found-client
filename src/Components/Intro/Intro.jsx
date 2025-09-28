import { Link } from "react-router";
import { useEffect, useState } from "react";
import "../../../src/index.css";

const Intro = () => {
  return (
    <div className="relative lg:mb-20 mt-20 md:mt-0 lg:mt-0  h-[1230px] md:h-[800px] lg:h-[800px] ">
      <div className=" bg-[#D8E9E7] lg:w-[700px]  px-5 py-15 md:py-5 lg:pl-25">
        <p className="my-5 text-gray-500  uppercase mt-5 md:mt-0 lg:mt-5">
          Serving the Community Since 2005
        </p>
        <h1 className="text-[20px] lg:text-[30px] font-[700] text-[#292A35] letter-primary ">
          Reuniting People with What <br /> Matters Most
        </h1>
        <p className="text-gray-500 font-semibold text-[18px] mt-6 text-sm/6 max-w-[335px] lg:max-w-[400px] text-justify">
          We’ve all felt that sinking feeling — reaching for something and
          realizing it’s gone. A wallet with precious photos, a ring passed down
          for generations, a phone filled with memories… When we lose these
          things, it’s never just about the object. It’s about the moments, the
          people, and the stories they hold. That’s why this platform exists —
          to bring back more than just items, but the joy and relief of being
          reunited with something dear. Whether you’ve found something and want
          to do the right thing, or you’re searching with hope in your heart,
          you’ve come to the right place. Here, every post could be the start of
          a happy reunion.
        </p>
        <Link to={"/register"}>
          {" "}
          <button className="bg-[#292A35] px-5 py-2 mt-10 md:mb-10  font-medium text-white">
            Join us
          </button>
        </Link>
      </div>
      <div className=" flex flex-col items-center gap-4 mt-5 ">
        <img
          className="w-[90%] max-w-[345px] h-auto md:absolute md:top-39 md:right-5 lg:top-80 lg:right-100"
          src="https://i.ibb.co.com/1fynK01L/photo-1582213782179-e0d53f98f2ca-mark-https-images-unsplash-com-opengraph-logo-png-mark-w-64-mark-al.jpg"
          alt=""
        />
        <img
          className="w-[90%] max-w-[345px] h-auto md:absolute md:top-90 md:right-5 lg:top-80 lg:right-10"
          src="https://i.ibb.co.com/nNdNVdnH/photo-1687360441027-27e70655b27e-mark-https-images-unsplash-com-opengraph-logo-png-mark-w-64-mark-al.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Intro;
