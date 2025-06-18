// app/experiences/page.jsx
import HomePageSlider from "@/Components/HomePageSlider";
import Image from "next/image";

const experiences = [
  {
    id: 1,
    title: "Desert Safari in Jaisalmer",
    description: "Ride camels and experience golden sands at sunset.",
    image: "https://a0.muscache.com/im/pictures/Mt/MtTemplate-3642383/original/30685c66-2988-4b48-9b0c-1cf6384a1383.jpeg?im_w=480",
    discount: "20% OFF",
  },
  {
    id: 2,
    title: "Backwater Boating in Kerala",
    description: "Glide through scenic canals on traditional houseboats.",
    image: "https://static.wixstatic.com/media/ed75e9_a632f4cd3b5444549d4a4f12be78f530~mv2_d_3119_2079_s_2.jpg/v1/fill/w_2500,h_1666,al_c/ed75e9_a632f4cd3b5444549d4a4f12be78f530~mv2_d_3119_2079_s_2.jpg",
    discount: "30% OFF",
  },
  {
    id: 3,
    title: "Tea Estate Walks in Darjeeling",
    description: "Walk through lush plantations and taste fresh tea.",
    image: "https://res.cloudinary.com/kmadmin/image/upload/v1621848158/kiomoi/Darjeeling_Tea_Plantations_Darjeeling_1621848156915.jpg",
    discount: "15% OFF",
  },
  {
    id: 4,
    title: "Local Food Tasting in Amritsar",
    description: "Taste the best street food and iconic Punjabi flavors.",
    image: "https://www.alphonsostories.com/AlphonSoStoriesImages/SubServiceImage/cooking-session-with-a-local-family-1-AlphonSo-Stories.jpg",
    discount: "10% OFF",
  },
  {
    id: 5,
    title: "Paragliding in Bir Billing",
    description: "Soar over the Himalayas for a once-in-a-lifetime view.",
    image: "https://indiathrills.com/wp-content/uploads/2020/02/Thrilling-paragliding-adventure-in-bir-billing.jpg",
    discount: "25% OFF",
  },
  {
    id: 6,
    title: "Heritage Walk in Jaipur",
    description: "Discover hidden gems and majestic havelis of the Pink City.",
    image: "https://a0.muscache.com/im/pictures/Mt/MtTemplate-639251/original/4bae55e2-db04-4d3c-b115-42daef67253c.jpeg?im_w=480",
    discount: "18% OFF",
  },
];

export async function generateMetadata() {
  return {
    title: "Experiences | Stay Finder",
    description: "Explore curated experiences near your stay, from local tours to food trails and cultural events.",
    openGraph: {
      title: "Experiences | Stay Finder",
      description: "Explore curated experiences near your stay, from local tours to food trails and cultural events.",
      url: "https://stayfinder-beta.vercel.app/experiences",
      siteName: "Stay Finder",
      images: [
        {
          url: "https://images.unsplash.com/photo-1533106418989-88406c7cc8a7?auto=format&fit=crop&w=1200&q=80",
          width: 1200,
          height: 630,
          alt: "Experiences with Stay Finder",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Experiences | Stay Finder",
      description: "Explore curated experiences near your stay, from local tours to food trails and cultural events.",
      images: ["https://images.unsplash.com/photo-1533106418989-88406c7cc8a7?auto=format&fit=crop&w=1200&q=80"],
    },
  };
}



export default function ExperiencesPage() {
  return (
    <>
    <HomePageSlider />
      {/* Keep HomePageSlider above this in your layout */}
      <section className="pb-12 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-cyan-900 dark:text-blue-400 mb-8 text-center">
          Explore Experiences
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="relative cursor-pointer bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden transition hover:scale-[1.02] hover:shadow-xl"
            >
              <div className="relative w-full h-56">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  layout="fill"
                  objectFit="cover"
                />
                <span className="absolute top-2 left-2 bg-cyan-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {exp.discount}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {exp.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
