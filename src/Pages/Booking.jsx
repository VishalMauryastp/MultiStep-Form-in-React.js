import React from "react";
import { useNavigate } from "react-router-dom";

const Booking = () => {
  const navigate = useNavigate("");
  const handleNavigate = (venue) => {
    navigate("/janakpuri/booking", { state: { venue } });
  };
  return (
    <section className="bg-blue-900 font-Poppins">
      <div className="w-[90%] mx-auto  min-h-screen py-[30px]">
        <h1 className="text-2xl font-Poppins font-semibold text-center text-white mt-8 ">
          Choose Your Theatre
        </h1>
        <div className="w-[90%] md:w-[80%] mx-auto grid  md:grid-cols-2 lg:grid-cols-4 gap-8 m-16">
          <div className="bg-white p-4 rounded">
            <div>
              <img src="Birthday.png " alt="" />
            </div>
            <h1 className="text-center font-semibold  mt-4">
              Grandeour Theatre
            </h1>
            <button
              className="w-full py-2 bg-blue-500 rounded text-white font-semibold mt-4"
              onClick={() => handleNavigate("Grandeour Theatre")}
            >
              Book Now
            </button>
          </div>
          <div className="bg-white p-4 rounded">
            <div>
              <img src="Birthday.png " alt="" />
            </div>
            <h1 className="text-center font-semibold  mt-4">Meadow Theatre</h1>
            <button
              className="w-full py-2 bg-blue-500 rounded text-white font-semibold mt-4"
              onClick={() => handleNavigate("Meadow Theatre")}
            >
              Book Now
            </button>
          </div>
          <div className="bg-white p-4 rounded">
            <div>
              <img src="Birthday.png " alt="" />
            </div>
            <h1 className="text-center font-semibold  mt-4">Mystic Theatre</h1>
            <button
              className="w-full py-2 bg-blue-500 rounded text-white font-semibold mt-4"
              onClick={() => handleNavigate("Mystic Theatre")}
            >
              Book Now
            </button>
          </div>
          <div className="bg-white p-4 rounded">
            <div>
              <img src="Birthday.png " alt="" />
            </div>
            <h1 className="text-center font-semibold  mt-4">Amor theater</h1>
            <button
              className="w-full py-2 bg-blue-500 rounded text-white font-semibold mt-4"
              onClick={() => handleNavigate("Amor theater")}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
