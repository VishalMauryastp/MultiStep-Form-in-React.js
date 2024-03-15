// MultiStepForm.js
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ScheduleMeeting } from "react-schedule-meeting";

const Step1 = ({ nextStep, formData, setFormData }) => {
  const [dateTime, setDateTime] = useState("");

  const handleNext = () => {
    setFormData({ ...formData, dateTime });
    nextStep();
  };

  const availableTimeslots = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  ].map((id) => {
    return {
      id,
      startTime: new Date(
        new Date(new Date().setDate(new Date().getDate() + id)).setHours(
          9,
          0,
          0,
          0
        )
      ),
      endTime: new Date(
        new Date(new Date().setDate(new Date().getDate() + id)).setHours(
          17,
          0,
          0,
          0
        )
      ),
    };
  });

  return (
    <div className="max-xl:w-[90%] xl:max-w-screen-xl mx-auto py-[60px]">
      <h2 className="text-2xl font-semibold mb-4">Select Date and Time Slot</h2>
      <ScheduleMeeting
        borderRadius={10}
        primaryColor="#3f5b85"
        eventDurationInMinutes={120}
        availableTimeslots={availableTimeslots}
        onStartTimeSelect={(val) => {
          setDateTime(val?.startTime);
        }}
      />

      {/* <input
        type="datetime-local"
        value={dateTime}
        onChange={(e) => setDateTime(e.target.value)}
        className="border border-gray-300 p-2 mb-4"
      /> */}
      <button
        onClick={handleNext}
        className="bg-blue-500 text-white py-2 px-8 rounded mt-4"
      >
        Next
      </button>
    </div>
  );
};

const Step2 = ({ nextStep, prevStep, formData, setFormData }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [guests, setGuests] = useState("");
  const [wantdecoration, setWantdecoration] = useState("");

  const handleNext = () => {
    setFormData({ ...formData, name, phone, email, guests, wantdecoration });
    nextStep();
  };

  return (
    <div className="min-h-screen flex">
      <div className="max-md:w-[95%] md:min-w-[520px] m-auto shadow-2xl border p-[20px] rounded">
        <h2 className="text-2xl font-semibold mb-4">General Information</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 p-2 w-full"
            placeholder="Name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border border-gray-300 p-2 w-full"
            placeholder="Phone Number"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 p-2 w-full"
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="guests" className="block mb-1">
            Number of Guests
          </label>
          <select
            id="guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="border border-gray-300 p-2 w-full"
          >
            <option value="">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {/* deco */}
        <div className="mb-4">
          <label htmlFor="wantdecoration" className="block mb-1">
            Do you want decoration?
          </label>
          <input
            type="wantdecoration"
            id="wantdecoration"
            value={wantdecoration}
            onChange={(e) => setWantdecoration(e.target.value)}
            className="border border-gray-300 p-2 w-full"
            placeholder="Yes/No"
          />
        </div>

        <div className="mt-8 ">
          <button
            onClick={prevStep}
            className="bg-gray-500 text-white py-2 px-4 rounded mr-4"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="bg-blue-500 text-white py-2 px-8 rounded"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

const Step3 = ({ nextStep, prevStep, formData, setFormData }) => {
  const [decoration, setDecoration] = useState("");

  const handleNext = () => {
    setFormData({ ...formData, decoration });
    nextStep();
  };

  return (
    <div className="py-[40px]">
      <h2 className="max-lg:w-[90%] lg:max-w-screen-xl mx-auto text-2xl font-semibold mb-4">
        Decoration Details
      </h2>
      <div className="max-md:w-[90%] md:max-w-[600px] mx-auto">
        <p>Select Decoration:</p>
        <div className=" my-8">
          <div className="grid grid-cols-3  md:grid-cols-3 lg:grid-cols-4 gap-8 ">
            <label className="cursor-pointer">
              <input
                type="radio"
                value="Birthday"
                checked={decoration === "Birthday"}
                onChange={() => setDecoration("Birthday")}
                className="form-radio"
              />

              <span className="">
                <img src="/Birthday.png" alt="" />
                <p className="text-center mt-2"> Birthday</p>
              </span>
            </label>
            <label className="cursor-pointer">
              <input
                type="radio"
                value="Aniversary"
                checked={decoration === "Aniversary"}
                onChange={() => setDecoration("Aniversary")}
                className="form-radio "
              />

              <span className="">
                <img src="/Anniversary.png" alt="" />
                <p className="text-center mt-2"> Anniversary</p>
              </span>
            </label>
            <label className="cursor-pointer">
              <input
                type="radio"
                value="RomanticDate"
                checked={decoration === "RomanticDate"}
                onChange={() => setDecoration("RomanticDate")}
                className="form-radio "
              />

              <span className="">
                <img className="" src="/Congratulations (1).png" alt="" />
                <p className="text-center mt-2 "> Romantic Date</p>
              </span>
            </label>
            <label className="cursor-pointer">
              <input
                type="radio"
                value="MarriageProposal"
                checked={decoration === "MarriageProposal"}
                onChange={() => setDecoration("MarriageProposal")}
                className="form-radio "
              />

              <span className="">
                <img className="" src="/Marriage Proposal.png" alt="" />
                <p className="text-center mt-2 "> Marriage Proposal</p>
              </span>
            </label>
            <label className="cursor-pointer">
              <input
                type="radio"
                value="Bridetobe"
                checked={decoration === "Bridetobe"}
                onChange={() => setDecoration("Bridetobe")}
                className="form-radio "
              />

              <span className="">
                <img className="" src="/Anniversary.png" alt="" />
                <p className="text-center mt-2 ">Bride to be</p>
              </span>
            </label>
            <label className="cursor-pointer">
              <input
                type="radio"
                value="Farewell"
                checked={decoration === "Farewell"}
                onChange={() => setDecoration("Farewell")}
                className="form-radio "
              />

              <span className="">
                <img className="" src="/Farewell.png" alt="" />
                <p className="text-center mt-2 ">Farewell</p>
              </span>
            </label>
            <label className="cursor-pointer">
              <input
                type="radio"
                value="Congratulations"
                checked={decoration === "Congratulations"}
                onChange={() => setDecoration("Congratulations")}
                className="form-radio "
              />

              <span className="">
                <img className="" src="/Congratulations.png" alt="" />
                <p className="text-center mt-2 ">Congratulations</p>
              </span>
            </label>
            <label className="cursor-pointer">
              <input
                type="radio"
                value="BabyShower"
                checked={decoration === "BabyShower"}
                onChange={() => setDecoration("BabyShower")}
                className="form-radio "
              />

              <span className="">
                <img className="" src="/Baby Shower.png" alt="" />
                <p className="text-center mt-2 ">Baby Shower</p>
              </span>
            </label>
          </div>
          {/* Add similar radio buttons for other decoration options */}
        </div>
        <div className="md:mt-16">
          <button
            onClick={prevStep}
            className="bg-gray-500 text-white py-2 px-4 rounded mr-4"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="bg-blue-500 text-white py-2 px-8 rounded"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

// const Step4 = ({ nextStep, prevStep, formData, setFormData }) => {
//   const [cake, setCake] = useState("");

//   // Sample array of cake options with image URLs
//   const cakeOptions = [
//     {
//       name: "Black Forest Cake (500)",
//       imageUrl: "/Black Forest Cake (500).png",
//     },
//     {
//       name: "Butterscotch Cake (500)",
//       imageUrl: "/Butterscotch Cake (500).png",
//     },
//     {
//       name: "Chocolate Cake (500)",
//       imageUrl: "/Chocolate Cake (500).png",
//     },
//     {
//       name: "Pineapple Cake (500)",
//       imageUrl: "Pineapple Cake (500).png",
//     },
//     {
//       name: "Round Red Velvet Cake (600)",
//       imageUrl: "/Round Red Velvet Cake (600).png",
//     },
//     {
//       name: "Blueberry Cake (600)",
//       imageUrl: "/Blueberry Cake (600).png",
//     },
//     {
//       name: "Mango Cake (600)",
//       imageUrl: "Mango Cake (600).png",
//     },
//     {
//       name: "Heart Red Velvet Cake (700)",
//       imageUrl: "Heart Red Velvet Cake (700).png",
//     },
//     {
//       name: "Death by chocolate Cake (700)",
//       imageUrl: "Death by chocolate Cake (700).png",
//     },
//     {
//       name: "Choco Almond Cake (750)",
//       imageUrl: "Choco Almond Cake (750).png",
//     },
//     {
//       name: "Heart Pinata Cake (850)",
//       imageUrl: "Heart Pinata Cake (850).png",
//     },
//   ];

//   const handleNext = () => {
//     setFormData({ ...formData, cake });
//     nextStep();
//   };

//   return (
//     <div>
//       <div className="w-[90%] mx-auto ">
//         <h2 className="text-2xl font-semibold mb-8 mt-8 md:mt-16 ">
//           {" "}
//           Select Cake
//         </h2>

//         <div className="grid grid-cols-2 md:grid-cols-4   gap-4 mb-4">
//           {cakeOptions.map((option, index) => (
//             <label key={index} className="cursor-pointer">
//               <input
//                 type="radio"
//                 value={option.name}
//                 checked={cake === option.name}
//                 onChange={() => setCake(option.name)}
//                 className="form-radio"
//               />
//               <div>
//                 <img
//                   src={option.imageUrl}
//                   alt={option.name}
//                   className="w-20 h-20 object-cover"
//                 />
//                 <span className="ml-2 block mt-2">{option.name}</span>
//               </div>
//             </label>
//           ))}
//         </div>
//         <div className="mt-16">
//           <button
//             onClick={prevStep}
//             className="bg-gray-500 text-white py-2 px-4 rounded mr-4"
//           >
//             Previous
//           </button>
//           <button
//             onClick={handleNext}
//             className="bg-blue-500 text-white py-2 px-8 rounded"
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

const Step4 = ({ nextStep, prevStep, formData, setFormData }) => {
  const [selectedCakes, setSelectedCakes] = useState([]);

  const cakeOptions = [
    {
      name: "Black Forest Cake (500)",
      imageUrl: "/Black Forest Cake (500).png",
    },
    {
      name: "Butterscotch Cake (500)",
      imageUrl: "/Butterscotch Cake (500).png",
    },
    {
      name: "Chocolate Cake (500)",
      imageUrl: "/Chocolate Cake (500).png",
    },
    {
      name: "Pineapple Cake (500)",
      imageUrl: "/Pineapple Cake (500).png",
    },
    {
      name: "Round Red Velvet Cake (600)",
      imageUrl: "/Round Red Velvet Cake (600).png",
    },
    {
      name: "Blueberry Cake (600)",
      imageUrl: "/Blueberry Cake (600).png",
    },
    {
      name: "Mango Cake (600)",
      imageUrl: "/Mango Cake (600).png",
    },
    {
      name: "Heart Red Velvet Cake (700)",
      imageUrl: "Heart Red Velvet Cake (700).png",
    },
    {
      name: "Death by chocolate Cake (700)",
      imageUrl: "/Death by chocolate Cake (700).png",
    },
    {
      name: "Choco Almond Cake (750)",
      imageUrl: "/Choco Almond Cake (750).png",
    },
    {
      name: "Heart Pinata Cake (850)",
      imageUrl: "/Heart Pinata Cake (850).png",
    },
  ];

  const handleCakeToggle = (cakeName) => {
    const cakeIndex = selectedCakes.indexOf(cakeName);
    if (cakeIndex === -1) {
      setSelectedCakes([...selectedCakes, cakeName]);
    } else {
      const updatedCakes = [...selectedCakes];
      updatedCakes.splice(cakeIndex, 1);
      setSelectedCakes(updatedCakes);
    }
  };

  const handleNext = () => {
    setFormData({ ...formData, cakes: selectedCakes });
    nextStep();
  };

  return (
    <div>
      <div className="w-[90%] mx-auto">
        <h2 className="text-2xl font-semibold mb-8 mt-8 md:mt-16">
          Select Cake
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          {cakeOptions.map((option, index) => (
            <label key={index} className="cursor-pointer">
              <input
                type="checkbox"
                checked={selectedCakes.includes(option.name)}
                onChange={() => handleCakeToggle(option.name)}
                className="form-checkbox"
              />
              <div>
                <img
                  src={option.imageUrl}
                  alt={option.name}
                  className="w-20 h-20 object-cover"
                />
                <span className="ml-2 block mt-2">{option.name}</span>
              </div>
            </label>
          ))}
        </div>
        <div className="mt-16">
          <button
            onClick={prevStep}
            className="bg-gray-500 text-white py-2 px-4 rounded mr-4"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="bg-blue-500 text-white py-2 px-8 rounded"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

const Step5 = ({ nextStep, prevStep, formData, setFormData }) => {
  const [extraDecorations, setExtraDecorations] = useState([]);

  const handleNext = () => {
    setFormData({ ...formData, extraDecorations });
    nextStep();
  };

  const toggleDecoration = (decoration) => {
    if (extraDecorations.includes(decoration)) {
      setExtraDecorations(
        extraDecorations.filter((item) => item !== decoration)
      );
    } else {
      setExtraDecorations([...extraDecorations, decoration]);
    }
  };

  return (
    <div className=" py-[40px]">
      <div className="w-[500px] mx-auto ">
        <h2 className="text-2xl font-semibold mb-4"> Extra Decorations</h2>

        <div className="grid grid-cols-3 gap-4 mb-4 mt-8">
          <label className="">
            <input
              type="checkbox"
              checked={extraDecorations.includes("RoseHeart(Rs 150)")}
              onChange={() => toggleDecoration("RoseHeart(Rs 150)")}
              className="form-checkbox"
            />
            <div>
              <img
                className="w-[70%]"
                src="/Rose Heart (Rs 150).png"
                alt="Rose Heart (Rs 150)"
              />
              <p className="ml-2 text-center">Rose Heart (Rs 150)</p>
            </div>
          </label>
          <label className="">
            <input
              type="checkbox"
              checked={extraDecorations.includes("CandlePath(Rs 300)")}
              onChange={() => toggleDecoration("CandlePath(Rs 300)")}
              className="form-checkbox"
            />
            <div>
              <img
                className="w-[70%]"
                src="/Candle Path (Rs 300).png"
                alt="Candle Path (Rs 300).png"
              />
              <p className="ml-2 text-center ">Candle Path (Rs 300)</p>
            </div>
          </label>
          <label className="">
            <input
              type="checkbox"
              checked={extraDecorations.includes("Led")}
              onChange={() => toggleDecoration("Led")}
              className="form-checkbox"
            />
            <div>
              <img
                className="w-[70%]"
                src="/LED Numbers (Rs 200).png"
                alt="LED Numbers (Rs 200).png"
              />
              <p className="ml-2 text-center ">LED Numbers (Rs 200)</p>
            </div>
          </label>
          {/* Add similar checkboxes for other decoration options */}
        </div>
        <div className="">
          <h2 className="text-2xl font-semibold mt-8 mb-4">Gifts</h2>
          <div className="grid grid-cols-3 gap-4  mt-8">
            <label className="">
              <input
                type="checkbox"
                checked={extraDecorations.includes("RoseBouquet(Rs 350)")}
                onChange={() => toggleDecoration("RoseBouquet(Rs 350)")}
                className="form-checkbox"
              />
              <div>
                <img
                  className="w-[70%]"
                  src="/Rose Bouquet (Rs 350).png"
                  alt="Rose Bouquet (Rs 350)"
                />
                <p className="ml-2 text-center">Rose Bouquet (Rs 350)</p>
              </div>
            </label>
            <label className="">
              <input
                type="checkbox"
                checked={extraDecorations.includes("SmallTeddyBear(Rs300)")}
                onChange={() => toggleDecoration("SmallTeddyBear(Rs300)")}
                className="form-checkbox"
              />
              <div>
                <img
                  className="w-[70%]"
                  src="/Small Teddy Bear (Rs 300).png"
                  alt="Small Teddy Bear (Rs 300)"
                />
                <p className="ml-2 text-center ">Small Teddy Bear (Rs 300)</p>
              </div>
            </label>
            <label className="">
              <input
                type="checkbox"
                checked={extraDecorations.includes("SmallHeartPillow(Rs200)")}
                onChange={() => toggleDecoration("SmallHeartPillow(Rs200)")}
                className="form-checkbox"
              />
              <div>
                <img
                  className="w-[70%]"
                  src="/Small Heart Pillow(Rs 200).png"
                  alt="Small Heart Pillow(Rs 200).png"
                />
                <p className="ml-2 text-center ">Small Heart Pillow(Rs 200)</p>
              </div>
            </label>
            {/* Add similar checkboxes for other decoration options */}
          </div>
        </div>
        <div className="mt-8">
          <button
            onClick={prevStep}
            className="bg-gray-500 text-white py-2 px-4 rounded mr-4"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="bg-blue-500 text-white py-2 px-8 rounded"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

const Step6 = ({ formData, onSubmit }) => {
  return (
    <div className=" min-h-screen flex">
      <div className=" w-[600px] m-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Terms and Conditions
        </h2>
        {/* Display terms and conditions */}
        <ul className="flex flex-col gap-[12px] mt-8">
          <li className="list-decimal">
            We do NOT provide any movie/OTT accounts. We will do the setup using
            your OTT accounts/downloaded content.
          </li>
          <li className="list-decimal">
            Smoking/Drinking is NOT allowed inside the theater.
          </li>
          <li className="list-decimal">
            Any DAMAGE caused to theater, including decorative materials like
            balloons, lights etc will have to be reimbursed.
          </li>
          <li className="list-decimal">
            Guests are requested to maintain CLEANLINESS inside the theater
          </li>
          <li className="list-decimal">
            Party poppers/Snow sprays/Cold Fire, and any other similar items are
            strictly prohibited inside the theater.
          </li>
          <li className="list-decimal">
            Carrying AADHAAR CARD is mandatory. It will be scanned during entry.
          </li>
          <li className="list-decimal">
            Couples under 18 years of age are not allowed to book the theatre
          </li>
          <li className="list-decimal">
            Pets are strictly not allowed inside the theatre
          </li>
          <li className="list-decimal">
            We collect an advance amount of Rs 750 + convenience fee to book the
            slot.
          </li>
        </ul>
        <p className="mt-4">
          By clicking "Book Now", you agree to our terms and conditions.
        </p>
        <button
          onClick={onSubmit}
          className="bg-blue-500 mx-auto block mt-8 text-white py-2 px-4 rounded "
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const location = useLocation();
  const TheatreName = location?.state && location?.state?.venue;
  console.log(TheatreName);

  const TheatreLocation = window?.location?.pathname;
  console.log(TheatreLocation);

  useEffect(() => {
    if (TheatreName && TheatreLocation) {
      setFormData({ ...formData, TheatreName, TheatreLocation });
    }
  }, [TheatreName, TheatreLocation]);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    console.log(formData); // Log the form data to the console
    // Handle form submission here
  };

  return (
    <div className="w-full mx-auto font-Poppins    rounded">
      {step === 1 && (
        <Step1
          nextStep={nextStep}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {step === 2 && (
        <Step2
          nextStep={nextStep}
          prevStep={prevStep}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {step === 3 && (
        <Step3
          nextStep={nextStep}
          prevStep={prevStep}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {step === 4 && (
        <Step4
          nextStep={nextStep}
          prevStep={prevStep}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {step === 5 && (
        <Step5
          nextStep={nextStep}
          prevStep={prevStep}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {step === 6 && <Step6 formData={formData} onSubmit={handleSubmit} />}
    </div>
  );
};

export default MultiStepForm;
