import "./App.css";
import Card from "./components/common/Card";
import TestimonialCard from "./components/common/TestimonialCard";
import ImageSlider from "./components/Slider";

function App() {
  return (
    <div className="w-full lg:flex bg-[#1A1A1C] text-white">
      <div className="w-full lg:w-7/12 bg-overlay lg:pl-16 pt-20 px-8">
        <div className="lg:flex justify-between items-center">
          <Card
            className="w-full lg:w-[322px]"
            image={"/bell.svg"}
            title={"Get notified when a highly correlated whale makes a move"}
            description={
              "Find out when a certain whale moves more than any preset amount on-chain or when a dormant whale you care about becomes active."
            }
          />
          <ImageSlider />
        </div>

        <div className="flex flex-col-reverse justify-between items-center lg:flex-row lg:pr-16">
          <div className="w-full lg:w-1/3 lg:pr-8 lg:pt-8 pb-8 ">
            <img src="./cohort.png" className="rounded-xl" alt="cohorts" />
          </div>
          <Card
            align={"right"}
            className="w-full lg:w-[305px] text-right"
            image={"/Eye.svg"}
            title={"Watch what the whales are doing"}
            description={
              "All whales are not equal. Know exactly what the whales impacting YOUR portfolio are doing."
            }
          />
        </div>

        <div className="text-right lg:pr-16">
          <p className="text-2xl">Testimonials</p>
          <hr class="h-px my-4 border-[0.5px] dark:bg-gray-50 opacity-50" />
        </div>

        <div className="lg:flex pt-6 pb-12 items-end">
          <img src="./Vector.svg" alt="vector" className="w-12 h-12" />
          {/* carousel */}
          <div className="lg:flex lg:pl-10">
            <TestimonialCard
              title={"Jack F"}
              feedback={
                "“Love how Loch integrates portfolio analytics and whale watching into one unified app.”"
              }
              position={"Ex Blackrock PM"}
            />
            <TestimonialCard
              title={"Yash P"}
              feedback={`“I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!”`}
              position={"Research, 3poch Crypto Hedge Fund"}
            />
            <TestimonialCard
              title={"Shiv S"}
              feedback={
                "“Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.”"
              }
              position={"Co-Founder Magik Labs"}
            />
          </div>
        </div>
      </div>

      <div className="w-full lg:w-5/12 bg-white flex justify-center items-center min-h-screen">
        <div className="w-10/12 lg:w-[365px]">
          <div className="px-4 pb-6">
            <p className="text-4xl font-medium text-gray-300 leading-10 pb-6">
              Sign up for exclusive access.
            </p>
            <input
              type="email"
              placeholder="Your email address"
              className="rounded-md border border-gray-100 bg-white shadow-sm text-base placeholder-opacity-50 indent-6 placeholder-gray-500 w-full h-12 mb-4"
            />
            <button
              type="button"
              class="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm py-4 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Get started
            </button>
          </div>
          <div className="text-gray-900 text-base text-center">
            You’ll receive an email with an invite link to join.
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
