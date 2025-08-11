import React from "react";
import { Link } from "react-router";

const Intro = () => {
  return (
    <div className="max-w-6xl mx-auto flex items-center mb-20">
      <div className="flex-1/2 px-10">
        <p className="my-5 text-gray-500">Serving the Community Since 2005</p>
        <h1 className="text-[20px] font-bold">Reuniting People with What Matters Most</h1>
        <p className="text-gray-500 font-semibold mt-6 text-sm/6">We’ve all felt that sinking feeling — reaching for something and realizing it’s gone. A wallet with precious photos, a ring passed down for generations, a phone filled with memories… When we lose these things, it’s never just about the object. It’s about the moments, the people, and the stories they hold. That’s why this platform exists — to bring back more than just items, but the joy and relief of being reunited with something dear. Whether you’ve found something and want to do the right thing, or you’re searching with hope in your heart, you’ve come to the right place. Here, every post could be the start of a happy reunion.</p>
       <Link to={"/register"}> <button className="bg-[#1EA69A] px-5 py-2 mt-5 font-medium text-white">Join us</button></Link>
      </div>
      <div className="flex-1/2">
       
      <div  className="mt-5">
        {" "}
        <img
          src="https://i.ibb.co.com/fYygKYpg/priscilla-du-preez-Xk-KCui44i-M0-unsplash.jpg"
          alt=""
        />
      </div>
      </div>
    </div>
  );
};

export default Intro;
