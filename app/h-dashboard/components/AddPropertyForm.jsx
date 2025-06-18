"use client";

import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function AddPropertyForm({ handleSubmit }) {
  const router = useRouter();
  const handleSubmitAction = async (e) => {
    const submitPromise = async () => {
      const result = await handleSubmit(e);
      if (!result || !result.success) {
        throw new Error("Failed to add the property. Please try again.");
      }
      return result;
    };

    toast
      .promise(submitPromise(), {
        pending: "Submitting your property...",
        success: "Property added successfully! 🎉",
        error: {
          render({ data }) {
            return `${data.message}`;
          },
        },
      })
      .then(() => {
        router.push("/h-dashboard/listings");
      });
  };
  return (
    <form
      className="w-full mx-auto mt-4 px-4 py-8 rounded-xl"
      action={handleSubmitAction}
    >
      <div className="grid md:grid-cols-2 gap-6">
        <div className="relative z-0 w-full group">
          <input
            type="text"
            name="name"
            id="property_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 
              border-gray-300 appearance-none dark:text-white dark:border-gray-600 
              dark:focus:border-blue-500 focus:outline-none focus:ring-0 
              focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="property_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 
              duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
              peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto 
              peer-focus:text-blue-600 peer-focus:dark:text-blue-500 
              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
              peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Property Name
          </label>
        </div>

        {/* Street */}
        <div className="relative z-0 w-full group">
          <input
            type="text"
            name="street"
            id="property_street"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 
              border-gray-300 appearance-none dark:text-white dark:border-gray-600 
              dark:focus:border-blue-500 focus:outline-none focus:ring-0 
              focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="property_street"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 
              duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
              peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto 
              peer-focus:text-blue-600 peer-focus:dark:text-blue-500 
              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
              peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Street
          </label>
        </div>

        {/* City */}
        <div className="relative z-0 w-full group">
          <input
            type="text"
            name="city"
            id="property_city"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 
              border-gray-300 appearance-none dark:text-white dark:border-gray-600 
              dark:focus:border-blue-500 focus:outline-none focus:ring-0 
              focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="property_city"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 
              duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
              peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto 
              peer-focus:text-blue-600 peer-focus:dark:text-blue-500 
              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
              peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            City
          </label>
        </div>

        {/* State */}
        <div className="relative z-0 w-full group">
          <input
            type="text"
            name="state"
            id="property_state"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 
              border-gray-300 appearance-none dark:text-white dark:border-gray-600 
              dark:focus:border-blue-500 focus:outline-none focus:ring-0 
              focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="property_state"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 
              duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
              peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto 
              peer-focus:text-blue-600 peer-focus:dark:text-blue-500 
              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
              peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            State
          </label>
        </div>

        {/* Zip Code */}
        <div className="relative z-0 w-full group">
          <input
            type="text"
            name="cordinates"
            id="cordinates"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 
              border-gray-300 appearance-none dark:text-white dark:border-gray-600 
              dark:focus:border-blue-500 focus:outline-none focus:ring-0 
              focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="cordinates"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 
              duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
              peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto 
              peer-focus:text-blue-600 peer-focus:dark:text-blue-500 
              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
              peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Coordinates [latitude, longitude]
          </label>
        </div>
        <div className="relative z-0 w-full group">
          <input
            type="text"
            name="zipCode"
            id="property_zip"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 
              border-gray-300 appearance-none dark:text-white dark:border-gray-600 
              dark:focus:border-blue-500 focus:outline-none focus:ring-0 
              focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="property_zip"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 
              duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
              peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto 
              peer-focus:text-blue-600 peer-focus:dark:text-blue-500 
              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
              peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            ZIP Code
          </label>
        </div>
        <div className="relative z-0 w-full group">
          <input
            type="text"
            name="flat"
            id="property_flat"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 
              border-gray-300 appearance-none dark:text-white dark:border-gray-600 
              dark:focus:border-blue-500 focus:outline-none focus:ring-0 
              focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="property_flat"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 
              duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
              peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto 
              peer-focus:text-blue-600 peer-focus:dark:text-blue-500 
              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
              peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Flat
          </label>
        </div>
        <div className="relative z-0 w-full group">
          <input
            type="text"
            name="hno"
            id="property_hno"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 
              border-gray-300 appearance-none dark:text-white dark:border-gray-600 
              dark:focus:border-blue-500 focus:outline-none focus:ring-0 
              focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="property_hno"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 
              duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
              peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto 
              peer-focus:text-blue-600 peer-focus:dark:text-blue-500 
              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
              peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            House Number
          </label>
        </div>

        {/* Price */}
        <div className="relative z-0 w-full group">
          <input
            type="number"
            name="price"
            step="0.01"
            id="property_price"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 
              border-gray-300 appearance-none dark:text-white dark:border-gray-600 
              dark:focus:border-blue-500 focus:outline-none focus:ring-0 
              focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="property_price"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 
              duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
              peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto 
              peer-focus:text-blue-600 peer-focus:dark:text-blue-500 
              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
              peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Price (₹)
          </label>
        </div>

        {/* Discounted Price */}
        <div className="relative z-0 w-full group">
          <input
            type="number"
            name="discountedPrice"
            step="0.01"
            id="property_discount"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 
              border-gray-300 appearance-none dark:text-white dark:border-gray-600 
              dark:focus:border-blue-500 focus:outline-none focus:ring-0 
              focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="property_discount"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 
              duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
              peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto 
              peer-focus:text-blue-600 peer-focus:dark:text-blue-500 
              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
              peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Discounted Price (₹)
          </label>
        </div>
      </div>

      {/* Image URL */}
      <div className="w-full mt-6 mb-5">
        <>
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="property_images"
          >
            Upload Property Images
          </label>
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            aria-describedby="property_images_help"
            id="property_images"
            type="file"
            multiple
            name="images"
            accept="image/png, image/gif, image/jpeg"
          />
          <div
            className="mt-1 text-sm text-gray-500 dark:text-gray-300"
            id="property_images_help"
          >
            Property images are useful to showcase the property to potential
            buyers.
          </div>
        </>
      </div>

      {/* Description */}
      <div className="relative z-0 w-full mt-6 mb-8 group">
        <textarea
          name="description"
          id="property_description"
          rows="4"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 
            border-gray-300 appearance-none dark:text-white dark:border-gray-600 
            dark:focus:border-blue-500 focus:outline-none focus:ring-0 
            focus:border-blue-600 peer resize-none"
          placeholder=" "
          required
        />
        <label
          htmlFor="property_description"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 
            duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
            peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto 
            peer-focus:text-blue-600 peer-focus:dark:text-blue-500 
            peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
            peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Property Description
        </label>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full py-3 cursor-pointer bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 
          focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 
          dark:focus:ring-blue-800 transition"
      >
        Add Property
      </button>
    </form>
  );
}
