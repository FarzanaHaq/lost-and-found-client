import { Link } from "react-router";
import { useEffect, useState } from "react";
import "../../../src/index.css";

const Intro = () => {
  return (
    <div className="lg:mb-20 mt-6 relative h-[1300px] lg:h-[800px]">
      <div className="absolute top-10  bg-[#D8E9E7] w-[700px] lg:pl-30 py-10 lg:py-20 px-5">
        <p className="my-5 text-gray-500  uppercase mt-5">
          Serving the Community Since 2005
        </p>
        <h1 className="text-[20px] lg:text-[30px] font-[700] text-[#292A35] letter-primary ">
          Reuniting People with What <br /> Matters Most
        </h1>
        <p className="text-gray-500 font-semibold text-[18px] mt-6 text-sm/6 w-[335px] lg:w-[400px] text-justify">
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
          <button className="bg-[#292A35] px-5 py-2 mt-10 font-medium text-white">
            Join us
          </button>
        </Link>
      </div>
      <div className="pl-3">
        <img
          className="w-[350px] h-[200px] absolute z-10 top-200 lg:right-100 lg:top-100"
          src="https://i.ibb.co.com/1fynK01L/photo-1582213782179-e0d53f98f2ca-mark-https-images-unsplash-com-opengraph-logo-png-mark-w-64-mark-al.jpg"
          alt=""
        />
        <img
          className="w-[350px] h-[200px] absolute z-10 top-255 lg:right-10 lg:top-100"
          src="https://i.ibb.co.com/nNdNVdnH/photo-1687360441027-27e70655b27e-mark-https-images-unsplash-com-opengraph-logo-png-mark-w-64-mark-al.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Intro;
