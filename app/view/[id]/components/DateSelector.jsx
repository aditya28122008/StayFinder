"use client";
import React from "react";
import DatePicker from "@/Components/DatePicker";

const DateSelector = ({ pricePerNight }) => {
  return (
    <div>
      <DatePicker
        onChange={(range) => console.log("Selected:", range)}
        pricePerNight={pricePerNight}
      />
    </div>
  );
};

export default DateSelector;
