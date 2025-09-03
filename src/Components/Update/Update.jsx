import { use } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../Context/AuthContext";
import { useLoaderData } from "react-router";

const Update = () => {
  const { user } = use(AuthContext);
  const data = useLoaderData();
  const [selectedDate, setSelectedDate] = useState(data.date);

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

    fetch(`https://lost-found-server-azure.vercel.app/updateItems/${data._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(newPost),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast("Tips Updated");
      });
  }

  return (
    <div>
      <div className="p-24">
        <h1 className="mb-5 text-center text-2xl font-bold text-[#01875F]">
          Update The Lost Item!
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Post Type</label>
              <select name="type" defaultValue={data.type} className="select">
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
               defaultValue={data.title}
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Description</label>
              <input
                type="text"
                name="description"
                className="input w-full"
                 defaultValue={data.description}
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Category</label>
              <select name="category"  defaultValue={data.category} className="select">
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
                 defaultValue={data.location}
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Date</label>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border my-6 p-4">
              <label className="label">Thumbnail</label>
              <input
                type="text"
                name="photo"
                className="input w-full"
                defaultValue={data.photo}
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 h-28">
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
            className="btn w-full text-[#01875F] font-bold text-[18px] mt-7"
            value="Submit"
          />
        </form>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Update;
