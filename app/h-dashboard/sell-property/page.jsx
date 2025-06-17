import { auth } from "@/auth";
import AddPropertyForm from "../components/AddPropertyForm";
import prisma from "@/lib/prisma";
import vars from "@/vars";

export async function generateMetadata() {
  return {
    title: "Sell Property - Stay Finder",
  };
}

const SellProperty = async () => {
  const handleSubmitedForm = async (formData) => {
    "use server";
    const session = await auth();
    if (!session) {
      return {
        success: false,
        message: "You must be logged in to sell a property.",
      };
    }
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });
    if (!user || !user.isHost) {
      return {
        success: false,
        message: "You must be a host to sell a property.",
      };
    }

    const uploadImage = async (image) => {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", vars.CLOUDINARY_UPLOAD_PRESET);
      try {
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${vars.CLOUDINARY_CLOUD_NAME}/image/upload`,
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await response.json();
        return { imageData: data, success: true };
      } catch (error) {
        console.error("Error uploading image:", error);
        return { success: false, message: "Image upload failed." };
      }
    };
    let imagesDataArray = [];
    const images = formData.getAll("images");
    for (const image of images) {
      const imageData = await uploadImage(image);
      if (imageData && imageData.success) {
        imagesDataArray.push({
          url: imageData.imageData.secure_url,
          public_id: imageData.imageData.public_id,
        });
      } else {
        return { success: false, message: "Image upload failed." };
      }
    }
    const propertyData = await prisma.property.create({
      data: {
        name: formData.get("name"),
        description: formData.get("description"),
        price: parseInt(formData.get("price")),
        city: formData.get("city"),
        state: formData.get("state"),
        street: formData.get("street"),
        zipCode: formData.get("zipCode"),
        hno: formData.get("hno"),
        flat: formData.get("flat"),
        cordinates: formData.get("cordinates").split(", "),
        discountedPrice: parseInt(formData.get("discountedPrice")),
        hostId: user.id,
        images: {
          create: imagesDataArray.map((img) => ({
            url: img.url,
            public_id: img.public_id,
          })),
        },
      },
    });
    return {
      success: true,
      message: "Property added successfully.",
      property: propertyData,
    };
  };
  return (
    <div className="mt-10 ml-10">
      <div className="lg:text-4xl md:text-2xl text-xl">Sell Property</div>
      <AddPropertyForm handleSubmit={handleSubmitedForm} />
    </div>
  );
};

export default SellProperty;
