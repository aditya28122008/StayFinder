import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import Link from "next/link";
import { Eye } from "lucide-react";

const Listings = async () => {
  const session = await auth();
  const listings = await prisma.property.findMany({
    where: {
      hostId: session.user.id,
    },
  });

  return (
    <div className="mt-10 ml-10">
      <div className="lg:text-4xl md:text-2xl text-xl font-semibold mb-6">
        Your Listed Properties
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-w-6xl">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Price/Night
              </th>
              <th scope="col" className="px-6 py-3 text-right">
                View
              </th>
            </tr>
          </thead>
          <tbody>
            {listings.map((property) => (
              <tr
                key={property.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {property.name}
                </td>
                <td className="px-6 py-4">
                  ₹{property.price.toLocaleString()}
                </td>
                <td className="px-6 py-4 text-right">
                  <Link
                    href={`/view/${property.id}`}
                    className="font-medium text-blue-600 text-end dark:text-blue-500 hover:underline"
                  >
                    <Eye className="w-fit " />
                  </Link>
                </td>
              </tr>
            ))}
            {listings.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-400">
                  No properties listed yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Listings;
