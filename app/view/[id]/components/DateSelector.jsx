"use client";
import React from "react";
import DatePicker from "@/Components/DatePicker";

const DateSelector = ({ pricePerNight, propertyId }) => {
  return (
    <>
      <DatePicker
        propertyId={propertyId}
        onChange={(range) => console.log("Selected:", range)}
        pricePerNight={pricePerNight}
      />
    </>
  );
};

export default DateSelector;
