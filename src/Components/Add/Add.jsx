import { use } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from "react-helmet";

const Add = () => {
  const { user } = use(AuthContext);
  const [selectedDate, setSelectedDate] = useState(new Date());

  function handleSubmit(e) {
    e.preventDefault();
    const title = e.target.title.value;
    const type = e.target.type.value;
    const description = e.target.description.value;
    const location = e.target.location.value;
    const category = e.target.category.value;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;

    const newPost = {
      title,
      type,
      description,
      category,
      location,
      name,
      email,
      photo,
      date: selectedDate.toISOString().split("T")[0],
    };

    fetch("https://lost-found-server-azure.vercel.app/addItems", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(newPost),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast("Tips Added");
      });
  }

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Add Items</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="max-w-6xl mx-auto mt-28">
        <h1 className="mb-5 text-center text-[25px] font-bold text-[#292A35]">
          Have you lost/found something? Make a post!
        </h1>
        <form
          onSubmit={handleSubmit}
          className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 mt-10 border border-gray-100 bg-primary"
        >

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Post Type */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Post Type
              </label>
              <select
                name="type"
                defaultValue="Lost"
                className="select select-bordered w-full focus:border-sky-500 focus:ring focus:ring-sky-200"
              >
                <option>Lost</option>
                <option>Found</option>
              </select>
            </div>

            {/* Title */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Title
              </label>
              <input
                type="text"
                name="title"
                placeholder="Enter item title"
                className="input input-bordered w-full focus:border-sky-500 focus:ring focus:ring-sky-200"
              />
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-medium mb-2">
                Description
              </label>
              <textarea
                name="description"
                rows="3"
                placeholder="Describe the item, where it was lost/found..."
                className="textarea textarea-bordered w-full focus:border-sky-500 focus:ring focus:ring-sky-200"
              ></textarea>
            </div>

            {/* Category */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Category
              </label>
              <select
                name="category"
                defaultValue="Pets"
                className="select select-bordered w-full focus:border-sky-500 focus:ring focus:ring-sky-200"
              >
                <option>Pets</option>
                <option>Documents</option>
                <option>Electronics</option>
                <option>Clothing</option>
                <option>Other</option>
              </select>
            </div>

            {/* Location */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Location
              </label>
              <input
                type="text"
                name="location"
                placeholder="e.g. Central Park, Dhaka"
                className="input input-bordered w-full focus:border-sky-500 focus:ring focus:ring-sky-200"
              />
            </div>

            {/* Date */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Date
              </label>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                className="input input-bordered focus:border-sky-500 focus:ring focus:ring-sky-200 w-[405px]"
              />
            </div>

            {/* Thumbnail */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Thumbnail URL
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter image URL"
                className="input input-bordered w-full focus:border-sky-500 focus:ring focus:ring-sky-200"
              />
            </div>

            {/* Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                disabled
                className="input input-bordered w-full bg-gray-100 text-gray-600"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="text"
                name="email"
                defaultValue={user?.email}
                disabled
                className="input input-bordered w-full bg-gray-100 text-gray-600"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn bg-[#292A35] text-white font-bold text-lg w-full mt-8"
          >
            Submit
          </button>
        </form>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Add;
