import { Link } from "react-router";
import { useEffect, useState } from "react";
import "../../../src/index.css";

const Intro = () => {
  return (
    <div className="mb-20 mt-35 relative">
      <div className="bg-[#D8E9E7] h-[800px] w-[700px]"></div>
      <div className="absolute top-5 left-30">
        <p className="my-5 text-gray-500 pt-20 uppercase">
          Serving the Community Since 2005
        </p>
        <h1 className="text-[30px] font-[700] text-[#292A35] letter-primary ">
          Reuniting People with What <br /> Matters Most
        </h1>
        <p className="text-gray-500 font-semibold text-[18px] mt-6 text-sm/6 w-[400px] ">
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
      <div></div>
    </div>
  );
};

export default Intro;
