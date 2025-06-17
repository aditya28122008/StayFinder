"use client";

import { useEffect, useState } from "react";

export default function MapEmbed({ coordinates }) {
  const [lat, lng] = coordinates;
  const [source, setSource] = useState("");

  const generateMapEmbedURL = (lat, lng) => {
    // This URL places a marker at the given coordinates
    return `https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`;
  };

  useEffect(() => {
    if (lat && lng) {
      const mapURL = generateMapEmbedURL(lat, lng);
      setSource(mapURL);
    }
  }, [lat, lng]); // include lat/lng in dependencies in case they change

  return (
    <div className="rounded-xl overflow-hidden shadow border border-gray-300 dark:border-gray-700">
      <iframe
        src={source}
        width="100%"
        height="250"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-[250px]"
      />
    </div>
  );
}
