import { useLoaderData } from "react-router";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { use } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Details = () => {
  const {
    title,
    description,
    type,
    category,
    date,
    location,
    name,
    email,
    photo,
    _id,
    status,
  } = useLoaderData();
  const { user } = use(AuthContext);
  const [selectedDate, setSelectedDate] = useState(new Date());

  function handleSubmit(e) {
    e.preventDefault();
    const recoveredName = e.target.name.value;
    const recoveredEmail = e.target.email.value;
    const recoveredLocation = e.target.location.value;
    const newPost = {
      title,
      type,
      description,
      category,
      location,
      name,
      email,
      photo,
      date,
      old_id: _id,
      recoveredName,
      recoveredEmail,
      recoveredLocation,
      recoveredDate: selectedDate.toISOString().split("T")[0],
    };

    const newAdd = {
      status: "recovered",
    };
    console.log(newPost);

    fetch("https://new-try-tau.vercel.app/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(newPost),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast("Item recovered");
      });

    fetch(`https://new-try-tau.vercel.app/new/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(newAdd),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }
  return (
    <div>
      <div className="max-w-6xl mx-auto my-8 lg:my-14">
        <div className="card lg:card-side bg-base-100 shadow-sm">
          <figure className="lg:w-[550px] lg:h-[450px] object-cover object-center">
            <img
              className="w-[333px] object-cover object-center"
              src={photo}
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="">
              <span className="text-[16px] font-bold">Title: </span>
              <span className="text-[15px] font-medium text-gray-600">
                {title}
              </span>
            </h2>
            <p>
              <span className="text-[16px] font-bold">Description: </span>
              <span className="text-[15px] font-medium text-gray-600">
                {description}
              </span>
            </p>
            <p>
              <span className="text-[16px] font-bold">Type: </span>
              <span className="text-[15px] font-medium text-gray-600">
                {type}
              </span>
            </p>
            <p>
              <span className="text-[16px] font-bold">Category: </span>
              <span className="text-[15px] font-medium text-gray-600">
                {category}
              </span>
            </p>
            <p>
              <span className="text-[16px] font-bold">Date: </span>
              <span className="text-[15px] font-medium text-gray-600">
                {date}
              </span>
            </p>
            <p>
              <span className="text-[17px] font-bold">Location: </span>
              <span className="text-[15px] font-medium text-gray-600">
                {location}
              </span>
            </p>
            <p>
              <span className="text-[16px] font-bold">By: </span>
              <span className="text-[15px] font-medium text-gray-600">
                {name}
              </span>
            </p>
            <p>
              <span className="text-[16px] font-bold">Contact: </span>
              <span className="text-[15px] font-medium text-gray-600">
                {email}
              </span>
            </p>
    
            <div className="card-actions justify-end">
              <div>
                {type == "Lost" ? (
                  <button
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                    className="btn bg-[#01875F] text-white rounded-full"
                    disabled={status == "recovered"}
                  >
                    Found this!
                  </button>
                ) : (
                  <button
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                    className="btn bg-[#01875F] text-white rounded-full"
                    disabled={status == "recovered"}
                  >
                    This is mine!
                  </button>
                )}
              </div>
              <div></div>
            </div>
          </div>
        </div>

        {/* You can open the modal using document.getElementById('ID').showModal() method */}

        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <form onSubmit={handleSubmit}>
              <h2 className="">
                <span className="text-[16px] font-bold">Title: </span>
                <span className="text-[15px] font-medium text-gray-600">
                  {title}
                </span>
              </h2>
              <p>
                <span className="text-[16px] font-bold">Description: </span>
                <span className="text-[15px] font-medium text-gray-600">
                  {description}
                </span>
              </p>
              <p>
                <span className="text-[16px] font-bold">Type: </span>
                <span className="text-[15px] font-medium text-gray-600">
                  {type}
                </span>
              </p>
              <p>
                <span className="text-[16px] font-bold">Category: </span>
                <span className="text-[15px] font-medium text-gray-600">
                  {category}
                </span>
              </p>
              <p>
                <span className="text-[16px] font-bold">Date: </span>
                <span className="text-[15px] font-medium text-gray-600">
                  {date}
                </span>
              </p>
              <p>
                <span className="text-[17px] font-bold">Location: </span>
                <span className="text-[15px] font-medium text-gray-600">
                  {location}
                </span>
              </p>
              <p>
                <span className="text-[16px] font-bold">By: </span>
                <span className="text-[15px] font-medium text-gray-600">
                  {name}
                </span>
              </p>
              <p>
                <span className="text-[16px] font-bold">Contact: </span>
                <span className="text-[15px] font-medium text-gray-600">
                  {email}
                </span>
              </p>
              <label className="label text-[16px] font-bold text-black">
                Location:
              </label>
              <br />
              <input
                type="text"
                name="location"
                className="input w-3/5"
                placeholder="Please enter recovered location"
              />
              <br />
              <label className="label text-[16px] font-bold text-black">
                Date:
              </label>
              <br />
              <DatePicker
                className="border-2 border-gray-300 p-1 "
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
              />
              <br />
              <label className="label  text-[16px] font-bold text-black">
                Name:
              </label>
              <input
                type="text"
                name="name"
                className="input w-full"
                defaultValue={user?.displayName}
                disabled
              />

              <label className="label  text-[16px] font-bold text-black">
                Email:
              </label>
              <input
                type="text"
                name="email"
                className="input w-full"
                defaultValue={user?.email}
                disabled
              />
              <input
                type="submit"
                className="btn w-full text-[#01875F] font-bold text-[18px] mt-5"
                value="Submit"
              />
            </form>
          </div>
        </dialog>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};
export default Details;
