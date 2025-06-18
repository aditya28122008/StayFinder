"use client";

import Image from "next/image";
import { Heart } from "lucide-react";
import Link from "next/link";

export default function PropertyCard({ property, images }) {
  const { name, description, price, discountedPrice, id } = property;

  return (
    <Link prefetch href={`/view/${id}`}>
      <div className="relative hover:scale-3d hover:scale-110 cursor-pointer rounded-2xl overflow-hidden bg-white dark:bg-gray-900 border border-cyan-100 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
        {/* Image */}
        <div className="relative h-60 w-full">
          <Image
            src={images[0].url}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          {/* Discount Tag */}
          <div className="absolute top-3 left-3 bg-cyan-600 text-white text-xs font-semibold px-2 py-1 rounded-md shadow-md">
            {Math.round(((price - discountedPrice) / price) * 100)}% OFF
          </div>
          {/* Wishlist Icon */}
          <div className="absolute top-3 right-3 bg-white dark:bg-gray-800 rounded-full p-1 shadow-sm">
            <Heart className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-2">
          <h3 className="text-lg font-semibold text-cyan-900 dark:text-cyan-300">
            {name}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
            {description}
          </p>
          <div className="pt-1">
            <p className="text-base font-bold text-cyan-700 dark:text-cyan-400">
              ₹{discountedPrice.toLocaleString()}
              <span className="text-sm text-gray-500 dark:text-gray-500 line-through ml-2">
                ₹{price.toLocaleString()}
              </span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
