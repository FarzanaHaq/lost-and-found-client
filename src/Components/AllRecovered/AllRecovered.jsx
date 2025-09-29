import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { LuLayoutDashboard } from "react-icons/lu";
import { Helmet } from "react-helmet";

const AllRecovered = () => {
  const { user } = use(AuthContext);
  const [myData, setMyData] = useState([]);
  const [myClick, setMyClick] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user?.email) return;
    setLoading(true);
    fetch(
      `https://new-try-tau.vercel.app/allRecovered?email=${user?.email}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyData(data);
        setLoading(false)
      });
  }, [user?.email]);

  function handleClick() {
    setMyClick(!myClick);
  }

if (loading) {
  return <div className="flex justify-center my-5">
    <span className="loading loading-spinner loading-xl"></span>
  </div>
}

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Recovered</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="hidden md:flex justify-end p-9 ">
        {" "}
        <button onClick={handleClick} className="text-3xl">
          {" "}
          <LuLayoutDashboard />
        </button>
      </div>

      <div>
        {myData && myData.length > 0 ? (
          myClick ? (
            <div className="max-w-6xl mx-auto ">
              <div className="overflow-x-auto">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="">Image</th>
                      <th>Title</th>
                      <th>Category</th>
                      <th>Location</th>
                      <th>Type</th>
                    </tr>
                  </thead>
                  {myData.map((data) => (
                    <tbody key={data._id}>
                      <tr>
                        <td>
                          <div className="flex items-center gap-3">
                            <div className="avatar">
                              <div className="mask mask-squircle h-12 w-12">
                                <img
                                  src={data.photo}
                                  alt="Avatar Tailwind CSS Component"
                                />
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>{data.title}</td>
                        <td>{data.category}</td>
                        <td>{data.location}</td>
                        <td>{data.type}</td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>
            </div>
          ) : (
            <div>
              <div className="mt-5 ">
                <h1 className="text-center text-2xl font-bold text-sky-800">
                  All recovered items
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-10 mb-20 px-5 lg:px-0">
                  {myData.map((data) => (
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
                        <p className="text-[14px] text-gray-800">
                          {data.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        ) : (
          <div className="text-center text-sky-800 p-20 font-bold text-2xl">
            No data sorry
          </div>
        )}
      </div>
    </div>
  );
};

export default AllRecovered;
