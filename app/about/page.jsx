import Image from "next/image";

export const metadata = {
  title: "About Us | Stay Finder",
  description:
    "Learn about Stay Finder's mission, team, and how we make finding unique stays easier and safer for everyone.",
  openGraph: {
    title: "About Us | Stay Finder",
    description:
      "Learn about Stay Finder's mission, team, and how we make finding unique stays easier and safer for everyone.",
    url: "https://stayfinder-beta.vercel.app/about",
    siteName: "Stay Finder",
    images: [
      {
        url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "About Stay Finder",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Stay Finder",
    description:
      "Learn about Stay Finder's mission, team, and how we make finding unique stays easier and safer for everyone.",
    images: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
    ],
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">About Stay Finder</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
          Connecting travelers with unique stays and unforgettable experiences
          across the world.
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Stay Finder aims to make travel more accessible, authentic, and
              memorable. Whether you're a solo adventurer, a family, or a
              digital nomad, we help you find the perfect stay with confidence
              and comfort.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            alt="Travel"
            className="rounded-xl shadow-md"
          />
        </div>
      </section>

      {/* How it Works */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div>
              <h3 className="text-xl font-semibold mb-2">1. Search</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Use filters to browse stays that match your destination, budget,
                and lifestyle.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">2. Book</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Instantly book your favorite place with secure payments and zero
                hassle.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">3. Stay</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Enjoy a comfortable stay and leave a review to help others
                discover it too.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Meet the Team</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-12">
            Built by passionate creators, travelers, and developers who believe
            in connecting the world through hospitality.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow text-center">
              <Image
                height={400}
                width={400}
                quality={100}
                src="/founder.jpg"
                alt="Founder"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h4 className="text-xl font-semibold">Aditya Pandey</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Founder & Full Stack Developer
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Your Trust, Our Priority</h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            Stay Finder verifies each listing, supports 24/7 customer service,
            and prioritizes your safety and satisfaction during every booking.
          </p>
        </div>
      </section>
    </div>
  );
}
