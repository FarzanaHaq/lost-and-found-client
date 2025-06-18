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

    fetch("http://localhost:3000/addItems", {
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
      <div className="max-w-6xl mx-auto mt-10">
        <h1 className="mb-5 text-center text-2xl font-bold text-sky-800">
          Add A Lost Item!
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Post Type</label>
              <select name="type" defaultValue="Lost" className="select w-full">
                <option>Lost</option>
                <option>Found</option>
              </select>
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Title</label>
              <input
                type="text"
                name="title"
                className="input w-full"
                placeholder="Title"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Description</label>
              <input
                type="text"
                name="description"
                className="input w-full"
                placeholder="Description"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Category</label>
              <select name="category" defaultValue="Pets" className="select w-full">
                <option>Pets</option>
                <option>Documents</option>
                <option>Electronic</option>
              </select>
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Location</label>
              <input
                type="text"
                name="location"
                className="input w-full"
                placeholder="Location"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Date</label>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                className="border-2 border-gray-200 py-2 px-2 w-full rounded-sm bg-white"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Thumbnail</label>
              <input
                type="text"
                name="photo"
                className="input w-full"
                placeholder="Photo URL"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 ">
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input w-full"
                defaultValue={user?.displayName}
                disabled
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Email</label>
              <input
                type="text"
                name="email"
                className="input w-full"
                defaultValue={user?.email}
                disabled
              />
            </fieldset>
          </div>
          <input
            type="submit"
            className="btn w-full text-sky-800 mt-8 font-bold text-[18px]"
            value="Submit"
          />
        </form>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Add;
