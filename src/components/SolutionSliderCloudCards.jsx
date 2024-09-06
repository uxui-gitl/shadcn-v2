import React, { useState } from "react";
import Image from "next/image";
import OutlinedButtonWithArrow from "@/components/ui/buttons/OutlinedButtonWithArrow";

const SolutionSliderCloudCard = ({ cardData }) => {
  const [isHovered, setIsHovered] = useState(false);

  const {
    label = " ",
    heading = " ",
    subheading = "",
    body = "",
    cardBGColor = "#FFFFFF",
    cardHoverColor = "#FFFFFF",
    frontIconURL = "",
    cardBGImageURL= '',
  } = cardData || {};

  const cardStyle = {
    backgroundColor: cardBGColor,
    backgroundImage: cardBGImageURL ? `url(${cardBGImageURL})` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div
      className="relative flex flex-col max-w-sm rounded-3xl shadow min-h-[564px]"
      style={cardStyle}
    >
      <div className="p-8">
        {label && <div className="text-[#E0028E] mb-8">{label}</div>}
        {/* Icon placeholder section */}
        {frontIconURL && (
          <div className="flex justify-start mb-8">
            <Image
              src={frontIconURL}
              alt="Front Icon"
              width={56} // Size in pixels
              height={56} // Size in pixels
              className="object-contain" // Ensure proper scaling
            />
          </div>
        )}

        {heading && (
          <h5
            className="text-[36px] leading-[42px] font-semibold pb-4"
            dangerouslySetInnerHTML={{ __html: heading }}
          />
        )}

        {subheading && <h6 className="pb-8 font-normal">{subheading}</h6>}

        {body && <p className="font-normal">{body}</p>}
      </div>
      <div
        style={{ backgroundColor: cardHoverColor }}
        className={`absolute inset-0 flex items-center justify-center text-grey-800 p-4 rounded-3xl transition-transform duration-300 ease-in-out ${
          isHovered
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-100"
        }`}
      >
        <div className="p-8">
          <p>Additional content on click</p>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 p-4 z-10">
        <OutlinedButtonWithArrow
          size={64}
          onClick={() => setIsHovered(!isHovered)}
        />
      </div>
    </div>
  );
};

export default SolutionSliderCloudCard;
