"use client";

import { useState, useEffect } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { addDays, differenceInDays } from "date-fns";

export default function DatePicker({ onChange, pricePerNight }) {
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: "selection",
    },
  ]);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleSelect = (ranges) => {
    const selection = ranges.selection;
    setRange([selection]);

    const nights = differenceInDays(selection.endDate, selection.startDate);
    if (nights > 0) {
      setTotalAmount(nights * pricePerNight);
    } else {
      setTotalAmount(0);
    }

    onChange && onChange(selection);
  };

  return (
    <div className="border rounded-lg p-2 space-y-4">
      <DateRange
        ranges={range}
        onChange={handleSelect}
        moveRangeOnFirstSelection={false}
        rangeColors={["#06b6d4"]}
        minDate={new Date()}
      />

      {totalAmount > 0 && (
        <div className="text-center text-lg font-semibold text-cyan-600">
          Total Amount: ₹{totalAmount.toLocaleString()}
        </div>
      )}
    </div>
  );
}
