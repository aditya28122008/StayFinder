import HomePageSlider from "@/Components/HomePageSlider";
import PropertyCard from "@/Components/PropertyCard";
import prisma from "@/lib/prisma";

// const sampleProperties = [
//   {
//     image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
//     title: 'Cozy Hillview Apartment',
//     description: '2 BHK with serene mountain view, balcony, and high-speed WiFi.',
//     price: 4800,
//     discountPrice: 3999,
//   },
//   {
//     image: '/beachside.jpg',
//     title: 'Beachside Bungalow',
//     description: 'Private villa near the beach with a pool, lounge, and garden.',
//     price: 9500,
//     discountPrice: 7999,
//   },
//   {
//     image: 'https://images.unsplash.com/photo-1599423300746-b62533397364',
//     title: 'Urban Studio Loft',
//     description: 'Compact studio in downtown with city view and work desk.',
//     price: 3600,
//     discountPrice: 2999,
//   },
//   {
//     image: '/beachside.jpg',
//     title: 'Luxury Villa with Pool',
//     description: 'Spacious villa with private pool, modern kitchen, and garden.',
//     price: 12500,
//     discountPrice: 9999,
//   },
//   {
//     image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf',
//     title: 'Rustic Farm Stay',
//     description: 'Experience nature with farm animals, fresh air, and greenery.',
//     price: 5000,
//     discountPrice: 4399,
//   },
// ];

export default async function PropertyGrid() {
  let properties = [];
  const propertiesArray = await prisma.property.findMany();
  if (propertiesArray.length > 0) {
    for (const property of propertiesArray) {
      const images = await prisma.image.findMany({
        where: { propertyId: property.id },
      });
      properties.push({ property: property, images: images });
    }
  }
  return (
    <>
      <HomePageSlider />
      <section className="pb-12 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-cyan-900 dark:text-blue-400 mb-8 text-center">
          Explore Our Stays
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((property, idx) => (
            <PropertyCard
              key={idx}
              property={property.property}
              images={property.images}
            />
          ))}
        </div>
      </section>
    </>
  );
}
