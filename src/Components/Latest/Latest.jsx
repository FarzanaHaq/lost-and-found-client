import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router";

const Latest = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/recent")
      .then((response) => response.json())
      .then((fetchedData) => {
        setData(fetchedData);
      });
  }, []);
  return (
    <div>
      <div className="mt-20 ">
        <h1 className="text-center text-2xl font-bold text-sky-800">
          Latest Find & Lost Items
        </h1>
        <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto mt-10 mb-20">
          {data.slice(0, 6).map((data) => (
            <div className="card bg-base-100 rounded-none shadow-2xl">
              <figure>
                <img
                  className="h-[200px] w-[400px] object-cover object-center"
                  src={data.photo}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body pb-8">
                <h2 className="card-title">{data.title}</h2>
                <p className="text-[14px] text-gray-800">{data.description}</p>
                           <div className="card-actions justify-start mt-3" >
      <div className="badge badge-outline text-gray-500">{data.type}</div>
      <div className="badge badge-outline text-gray-500">{data.location}</div>
    </div>
                <div className="card-actions justify-end mt-5">
                  <Link to={`/details/${data._id}`}>
                    <button className="btn bg-sky-800 text-white">
                      View details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Latest;
