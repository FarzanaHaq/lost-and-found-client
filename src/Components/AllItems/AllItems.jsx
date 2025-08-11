import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router";
import { MapPin, Calendar, Tag } from "lucide-react";

const AllItems = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async (query) => {
    try {
      setLoading(true);
      fetch(
        query
          ? `http://localhost:3000/search?title=${query}`
          : `http://localhost:3000/allItems`,
        {
          method: "GET",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setItems(data);
        });
    } catch (error) {
      console.error("Error fetching items:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchItems(searchTerm);
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>All Items</title>
      </Helmet>
      <div className="mt-28 ">
        <h1 className="text-center text-2xl font-bold text-[#1EA69A]">
          All Lost & Found Items
        </h1>
        <div className="flex justify-center mt-8">
          <form onSubmit={handleSearch} className="flex gap-2 mb-6">
            <input
              type="text"
              placeholder="Search by title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className=" border border-gray-300 px-4 py-2 focus:border-[#1EA69A] focus:ring focus:ring-sky-200 w-[500px]"
            />
            <button
              type="submit"
              className="bg-[#1EA69A] text-white px-6 py-2 "
            >
              Search
            </button>
          </form>
        </div>
        <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto mt-5 mb-20">
          {items.map((item) => (
            <div className="bg-white shadow-lg  overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
              {/* Image */}
              <div className="relative">
                <img
                  src={item.photo}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <span
                  className={`absolute top-3 right-3 px-3 py-1 rounded-full text-sm font-medium ${
                    item.type === "Found"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {item.type}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <Tag size={16} className="text-[#1EA69A]" />
                  <span>{item.category}</span>
                </div>

                <h3 className="text-lg font-bold text-[#1EA69A] mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 h-10">
                  {item.description}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} className="text-[#1EA69A]" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={16} className="text-[#1EA69A]" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Contact Button */}
                <Link to={`/details/${item._id}`}>
                  <button className="btn bg-[#1EA69A] text-white w-full mt-3">
                    View details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllItems;
