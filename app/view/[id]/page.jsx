import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import DateSelector from "./components/DateSelector";
import PropertyImagePage from "@/Components/PropertyImagePage";
import MapEmbed from "@/Components/MapEmbed";

import { headers } from "next/headers";

export const dynamic = "force-dynamic"; // Ensures dynamic rendering (needed for headers)

export async function generateMetadata({ params }) {
  const { id } = await params;
  const property = await prisma.property.findUnique({
    where: { id: id },
  });

  const headersList = headers();
  const host = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto") || "https";
  const domain = `${protocol}://${host}`;

  if (!property) {
    return {
      title: "Property Not Found | Stay Finder",
      description: "Sorry, the requested property could not be found.",
      openGraph: {
        title: "Property Not Found | Stay Finder",
        description: "Sorry, the requested property could not be found.",
        type: "website",
        url: `${domain}/property/${id}`,
      },
    };
  }
  const images = await prisma.image.findMany({
    where: { propertyId: property.id },
  });

  return {
    title: `${property.name} | Stay Finder`,
    description:
      property.description || "Explore this beautiful stay on Stay Finder.",
    openGraph: {
      title: `${property.name} | Stay Finder`,
      description:
        property.description || "Explore this beautiful stay on Stay Finder.",
      url: `${domain}/property/${id}`,
      type: "article",
      images: [
        {
          url: images[0].url || `${domain}/default-image.jpg`,
          width: 1200,
          height: 630,
          alt: property.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${property.name} | Stay Finder`,
      description:
        property.description || "Explore this beautiful stay on Stay Finder.",
      images: [images[0].url || `${domain}/default-image.jpg`],
    },
  };
}

const PropertyPage = async ({ params }) => {
  const { id } = await params;
  const property = await prisma.property.findUnique({
    where: { id: id },
  });
  if (!property) return notFound();

  const images = await prisma.image.findMany({
    where: { propertyId: id },
  });

  const host = await prisma.user.findUnique({ where: { id: property.hostId } });

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 text-gray-900 dark:text-white min-h-80 mb-[32rem]">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Image Section */}
        <PropertyImagePage propMainImage={images[0]} propImages={images} />

        {/* Details & Booking */}
        <div className="md:w-1/2">
          {/* Host or Brand */}
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
            Hosted by {host ? host.name : "StayFinder"}{" "}
            {host ? `(${host.email})` : "support@stayfinder.com"}
          </p>

          {/* Title */}
          <h1 className="text-3xl font-bold mb-3">{property.title}</h1>

          {/* Short specs or location */}
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            {property.location || "Premium location · Verified property"}
          </p>

          {/* Price */}
          <div className="mb-4">
            <span className="text-3xl font-extrabold text-cyan-600">
              ₹{property.discountedPrice}
            </span>
            {property.originalPrice &&
              property.originalPrice > property.discountedPrice && (
                <span className="ml-2 text-xl line-through text-red-500">
                  ₹{property.originalPrice}
                </span>
              )}
            <span className="text-md text-gray-500 dark:text-gray-400">
              {" "}
              / night
            </span>
          </div>

          {/* Description */}
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {property.description}
          </p>

          {/* Divider */}
          <hr className="my-4 border-gray-300 dark:border-gray-700" />

          {/* Google Map */}
          <MapEmbed coordinates={property.cordinates} />
          {/* Booking Box */}
          <div className="border border-gray-300 mt-4 dark:border-gray-700 rounded-xl p-6 shadow-md bg-white/10 backdrop-blur-xl dark:bg-gray-900 mb-6">
            <h2 className="text-lg font-semibold mb-3">Select Your Stay</h2>

            {/* Date Selector */}
            <>
              <DateSelector pricePerNight={property.discountedPrice} propertyId={property.id} />
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;
