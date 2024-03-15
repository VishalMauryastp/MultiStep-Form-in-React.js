import { useState } from "react";
import "./App.css";
import MultiStepForm from "./components/MultiStepForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Booking from "./Pages/Booking";

function App() {
  const [count, setCount] = useState(0);

  return (
    // <Booking />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Booking />} />
        <Route path="/booking" element={<MultiStepForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
