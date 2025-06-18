"use client";

import { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { addDays, differenceInDays } from "date-fns";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
// import { toast } from "react-toastify";

export default function DatePicker({ onChange, pricePerNight, propertyId }) {
  const router = useRouter();
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
  const handleBook = async () => {
    const bookingPromise = async () => {
      const res = await fetch(`/api/bookings/book/${propertyId}`, {
        method: "POST",
        body: JSON.stringify(range),
      });

      if (res.status === 401) {
        router.push("/auth");
        throw new Error("Redirecting to login...");
      }

      if (res.status === 409) {
        throw new Error(
          "Sorry, this place is already booked in the selected dates."
        );
      }

      const data = await res.json();

      if (!data.success) {
        throw new Error("Booking failed. Please try again later.");
      }

      return data;
    };

    toast.promise(bookingPromise(), {
      pending: "Booking in progress...",
      success: {
        render({ data }) {
          const start = new Date(range[0].startDate).toLocaleDateString();
          const end = new Date(range[0].endDate).toLocaleDateString();
          return `Successfully booked from ${start} to ${end}! 🎉`;
        },
      },
      error: {
        render({ data }) {
          return `${data.message}`;
        },
      },
    });
  };

  return (
    <>
      <div className="border rounded-lg p-2 space-y-4 mb-4">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <button
          onClick={handleBook}
          className="bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-lg font-semibold transition"
        >
          Book Now
        </button>
        <button className="border border-cyan-600 text-cyan-600 hover:bg-cyan-50 dark:hover:bg-gray-800 py-3 rounded-lg font-semibold transition">
          Check Availability
        </button>
      </div>
    </>
  );
}
