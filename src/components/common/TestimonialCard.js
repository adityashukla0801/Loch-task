import React from "react";

const TestimonialCard = ({ title, position, feedback }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm mr-5 w-full lg:w-[360px] p-5 my-4">
      <div className="pb-5">
        <span className="text-base text-gray-900 pr-2">{title}</span>
        <span className="text-sm text-gray-400">{position}</span>
      </div>
      <div className="text-base text-[#1D2129]">{feedback}</div>
    </div>
  );
};

export default TestimonialCard;
