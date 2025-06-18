

import { Mail, Phone, MapPin, Send } from "lucide-react";

export async function generateMetadata() {
  return {
    title: "Contact Us | Stay Finder",
    description:
      "Need help or have questions? Get in touch with the Stay Finder team — we're here for you 24/7.",
    openGraph: {
      title: "Contact Us | Stay Finder",
      description:
        "Need help or have questions? Get in touch with the Stay Finder team — we're here for you 24/7.",
      url: "https://stayfinder-beta.vercel.app/contact",
      siteName: "Stay Finder",
      images: [
        {
          url: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?auto=format&fit=crop&w=1200&q=80",
          width: 1200,
          height: 630,
          alt: "Contact Stay Finder",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Contact Us | Stay Finder",
      description:
        "Need help or have questions? Get in touch with the Stay Finder team — we're here for you 24/7.",
      images: [
        "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?auto=format&fit=crop&w=1200&q=80",
      ],
    },
  };
}

export default function Contact() {

  

  return (
    <div className="min-h-screen px-4 py-12 md:px-20 bg-background text-foreground">
      <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
      <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
        Questions, concerns or suggestions? We’d love to hear from you.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <Mail className="text-primary mt-1" />
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-muted-foreground">support@stayfinder.com</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone className="text-primary mt-1" />
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-muted-foreground">+91 98765 43210</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MapPin className="text-primary mt-1" />
            <div>
              <h3 className="font-semibold">Address</h3>
              <p className="text-muted-foreground">
                158/36 Bhopo Ka Bara, Ajmer, Rajasthan
              </p>
            </div>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14237.914062912224!2d74.6535592!3d26.4782881!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDI4JzQxLjgiTiA3NMKwMzknMTIuOCJF!5e0!3m2!1sen!2sin!4v1718615700000!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg border shadow"
          />
        </div>

        {/* Contact Form */}
        <form className="max-w-xl w-full space-y-6">
          <div className="relative z-0 w-full group">
            <input
              type="text"
              name="name"
              id="name"
              className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-gray-900 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Your Name
            </label>
          </div>

          <div className="relative z-0 w-full group">
            <input
              type="email"
              name="email"
              id="email"
              className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-gray-900 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Your Email
            </label>
          </div>

          <div className="relative z-0 w-full group">
            <textarea
              name="message"
              id="message"
              rows="5"
              className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-gray-900 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer resize-none"
              placeholder=" "
              required
            ></textarea>
            <label
              htmlFor="message"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Your Message
            </label>
          </div>

          <button
            type="submit"
            className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-3 text-center inline-flex items-center justify-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
          >
            <Send className="w-4 h-4 mr-2" />
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
