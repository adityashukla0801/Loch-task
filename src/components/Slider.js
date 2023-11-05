import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class ImageSlider extends React.Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1.9, // Display two sliders
      slidesToScroll: 1,
      autoplay: true, // Enable auto slide
      autoplaySpeed: 3000,
    };

    return (
      <div className="w-full lg:w-[407px] text-[#19191A]">
        <Slider {...settings}>
          <div className="custom-card-slider w-[189.7px] h-[171.5px] rounded-md bg-[#fff] mr-2 p-3.5">
            <div className="flex items-center justify-between">
              <img src="/black_bell.svg" alt="eye" className="w-7 h-7" />
              <span className="text-[9px] text-[#19191A] mb-4">Save</span>
            </div>
            <div className="bold font-sm mt-3.5">
              We’ll be sending notifications to you here
            </div>
            <div className="mt-2">
              <input
                placeholder="hello@gmail.com"
                className="w-full border rounded-[5.6px]"
              />
            </div>
          </div>

          <div className="custom-card-slider w-[189.7px] h-[171.5px] rounded-md bg-[#fff] mr-2 p-3.5">
            <div className="flex items-center justify-between">
              <img src="/bar-chart-2.svg" alt="eye" className="w-7 h-7" />
              <input type="checkbox" className="w-4 h-4 mb-2" checked />
            </div>
            <div className="bold font-sm mt-3.5">
              Notify me when any wallets move more than
            </div>
            <select className="mt-2 bg-gray-300 p-1 rounded-[5.6px]">
              <option>$1,000.00</option>
            </select>
          </div>

          <div className="custom-card-slider ml-3 w-[189.7px] h-[171.5px] rounded-md bg-[#fff] mr-2 p-3.5">
            <div className="flex items-center justify-between">
              <img src="/clock.svg" alt="eye" className="w-7 h-7" />
              <input type="checkbox" className="w-4 h-4 mb-2" checked />
            </div>
            <div className="bold font-sm mt-3.5">
              Notify me when any wallet dormant for
            </div>
            <select className="mt-2 bg-gray-300 p-1 rounded-[5.6px]">
              <option>&gt; 30 days</option>
            </select>
          </div>
        </Slider>
      </div>
    );
  }
}

export default ImageSlider;
