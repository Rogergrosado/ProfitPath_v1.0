"use client";
import { useState } from "react";

export default function ShippingCalculator({ onCalculate }) {
  const [weight, setWeight] = useState("");
  const [destination, setDestination] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onCalculate) {
      onCalculate({ weight, destination });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded">
      <div className="mb-2">
        <label className="block text-sm mb-1">Weight (kg)</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="border p-2 w-full"
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm mb-1">Destination</label>
        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="border p-2 w-full"
        />
      </div>
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
        Calculate
      </button>
    </form>
  );
}
