import React from 'react';

const Error = () => {
    return (
       <div>
      <div className="bg-gray-300 h-screen">
        <div>
          <h1 className="text-center pt-40 text-green-800 font-bold text-[18px]">Page Not Available</h1>
          <div className="flex justify-center mt-5">
            <Link to={"/"}>
              <button className="btn btn-outline border-green-800 border-2 text-green-800 font-bold">Home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Error;