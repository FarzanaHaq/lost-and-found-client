import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router";

const AllItems = () => {
  const data = useLoaderData();
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);
  const [all, setAll] = useState(true);
 const [newData, setNewData] = useState(true);
  const handleSearch = () => {
    console.log("Search Term:", search);
    fetch(`http://localhost:3000/search?title=${search}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNewData(data)
        setShow(true);
        setAll(false)
      });
  };

  return (
    <div>
           <Helmet>
        <meta charSet="utf-8" />
        <title>All Items</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="mt-16 ">
        <h1 className="text-center text-2xl font-bold text-sky-800">
          All Lost & Find Items
        </h1>
        <div className="flex justify-center mt-5">
          <div className="join">
            <div>
              <label className="input validator join-item">
                <input
                  type="email"
                  placeholder="Search by Title"
                  required
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </label>
              <div className="validator-hint hidden"></div>
            </div>
            <button
              onClick={handleSearch}
              className="btn btn-neutral bg-sky-800 join-item border-none"
            >
              Search
            </button>
          </div>
        </div>
          {show ? (
          <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto mt-10 mb-20">
          {newData.map((data) => (
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
                <div className="card-actions justify-end">
                  <Link to={`/details/${data._id}`}>
                    <button className="btn btn-primary">View details</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        ) : (
          ""
        )}
         {all ? (
         <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto mt-10 mb-20">
          {data.map((data) => (
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
                <div className="card-actions justify-start">
      <div className="badge badge-outline">{data.type}</div>
      <div className="badge badge-outline">{data.location}</div>
    </div>
                <div className="card-actions justify-end">
                  <Link to={`/details/${data._id}`}>
                    <button className="btn btn-primary bg-sky-800 text-white mt-8">View details</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        ) : (
          ""
        )}
        
      </div>
    </div>
  );
};

export default AllItems;
