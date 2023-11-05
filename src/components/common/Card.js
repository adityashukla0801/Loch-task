import React from "react";

const Card = ({ image, description, title, className, align }) => {
  return (
    <div
      className={`pb-8 ${className} ${
        align === "right" ? "text-right flex flex-col items-end" : ""
      }`}
    >
      <img src={image} alt="img" className="w-8 h-8" />
      <p className="text-3xl py-4 w-10/12">{title}</p>
      <p className="text-base">{description}</p>
    </div>
  );
};

export default Card;
