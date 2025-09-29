import { use } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router";
import { Helmet } from "react-helmet";

const MyItems = () => {
  const { user } = use(AuthContext);
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`https://new-try-tau.vercel.app/myItems?email=${user?.email}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyData(data);
      });
  }, [user?.email]);

  function handleClick(params) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://new-try-tau.vercel.app/deleteItems/${params}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  }

  return (
    <div>
        <Helmet>
        <meta charSet="utf-8" />
        <title>My Items</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      {myData && myData.length > 0 ? (
       <div className="max-w-6xl mx-auto mt-10 md:px-8 ">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th className="">Image</th>
              <th>Title</th>
              <th>Category</th>
              <th>Location</th>
              <th>Type</th>
              <th>Update</th>
              <th>Delete</th>
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
                <td>{data.date}</td>
                <td>
                  <Link to={`/update/${data._id}`}>
                    <button className="btn bg-white text-sky-800">Update</button>
                  </Link>
                </td>
                <td>
                  <button onClick={() => handleClick(data._id)} className="btn bg-white text-sky-800">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
      ) : (
        <div className="text-center text-sky-800 p-20 font-bold text-2xl">
          Please add data to view.
        </div>
      )}
    </div>
  );
};

export default MyItems;
