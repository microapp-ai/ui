import { IconArrowLeft, IconArrowRampLeft, IconArrowRight, IconTrash } from "@tabler/icons-react";
import React, { useState, useEffect } from "react";

interface ImageCarouselProps {
  images: File[];
  onChange: (images: File[]) => void;
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, onChange }) => {
  const [selectedImages, setSelectedImages] = useState<File[]>(images);
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  // Update selectedImages when images prop changes
  useEffect(() => {
    setSelectedImages(images);
  }, [images]);

  // Function to handle image deletion
  const handleRemove = (index: number) => {
    const updatedImages = selectedImages.filter((_, i) => i !== index);
    setSelectedImages(updatedImages);
    onChange(updatedImages); // Call onChange when images are updated
  };

  // Function to handle left and right arrow clicks for reordering
  const moveImage = (index: number, direction: "left" | "right") => {
    const newIndex = direction === "left" ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= selectedImages.length) return;

    const updatedImages = [...selectedImages];
    const [movedImage] = updatedImages.splice(index, 1);
    updatedImages.splice(newIndex, 0, movedImage);
    setSelectedImages(updatedImages);
    onChange(updatedImages);
  };

  return (
    <div className="flex flex-wrap gap-4 mt-6 max-h-[70vh] overflow-y-auto p-8">
      <style>{`
          /* Custom Scrollbar */
          ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
          }

          ::-webkit-scrollbar-track {
            background: transparent; /* Background of the scrollbar track */
          }

          ::-webkit-scrollbar-thumb {
            background-color: #888; /* Color of the scrollbar handle */
            border-radius: 10px;
            border: 3px solid transparent; /* Padding around the handle */
            background-clip: padding-box;
          }

          ::-webkit-scrollbar-thumb:hover {
            background-color: #555; /* Darker color when hovered */
          }
        `}</style>
      {selectedImages.map((image, index) => (
        <div
          key={image.name}
          className={`relative transition-transform ease-linear duration-500 px-[4px] ${hoveredImage === index ? "z-10" : "z-0"} ${hoveredImage === index ? "scale-[1]" : "scale-100"
            }`}
          onMouseEnter={() => setHoveredImage(index)}
          onMouseLeave={() => setHoveredImage(null)}
        >
          <img
            src={URL.createObjectURL(image)}
            alt={image.name}
            className={`w-44 h-44 rounded-2xl shadow-lg transform transition-transform duration-300 ease-linear ${hoveredImage === index ? "scale-[1.05]" : "scale-100"}`}
          />
          <div
            className={`absolute left-[12px] top-[8px] h-8 w-8 rounded-full bg-muted hover:bg-actionable-secondary-hover text-center text-foreground font-bold  p-1 flex items-center justify-center`}
          >
            <div>
              {index + 1}
            </div>
          </div>
          {hoveredImage === index && (
            <>
              <button
                onClick={() => moveImage(index, "left")}
                className={`absolute left-[-26px] top-1/2 transform -translate-y-1/2 h-8 w-8 rounded-full bg-muted hover:bg-actionable-secondary-hover text-center p-1 ${index === 0 ? "hidden" : "block"
                  }`}
              >
                <IconArrowLeft className="text-foreground" /> {/* Left arrow */}
              </button>

              <button
                onClick={() => moveImage(index, "right")}
                className={`absolute right-[-26px] top-1/2 transform -translate-y-1/2 h-8 w-8 rounded-full bg-muted hover:bg-actionable-secondary-hover text-center p-1 ${index === selectedImages.length - 1 ? "hidden" : "block"
                  }`}
              >
                <IconArrowRight className="text-foreground" /> {/* Right arrow */}
              </button>

              <button
                onClick={() => handleRemove(index)}
                className="absolute right-3 bottom-2 h-8 w-8 rounded-full bg-destructive text-center p-1"
              >
                <IconTrash className="text-white" /> {/* Trash icon */}
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};
