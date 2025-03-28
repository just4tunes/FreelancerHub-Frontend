import { BriefcaseBusiness, UserRoundPen, Handshake, HeartHandshake } from "lucide-react";

const Info = () => {
  return (
    <div className="relative w-full h-auto bg-[#f8f9fa]  mt-16 px-4 sm:px-10 md:px-16 lg:flex lg:gap-10 xl:mt-32 xl:px-32 xl:h-[70vh] overflow-hidden">
      {/* Background SVG Wave */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <svg
          className="absolute bottom-0 left-0 w-full h-[70vh]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#e0f2f1"
            fillOpacity="1"
            d="M0,224L48,192C96,160,192,96,288,80C384,64,480,96,576,122.7C672,149,768,171,864,181.3C960,192,1056,192,1152,181.3C1248,171,1344,149,1392,138.7L1440,128V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0Z"
          ></path>
        </svg>
      </div>

      {/* Left Content */}
      <div className="lg:w-[50%] relative z-10">
        <h1 className="text-black font-satoshi font-bold text-xl pt-11 sm:text-[4vh] lg:mt-8 xl:text-[5vh] xl:mt-20">
          Need something done?
        </h1>
        <p className="text-black text-md pt-5 font-serif xl:w-80 xl:text-[2.5vh] xl:mt-4">
          Join our platform, create an account, and post your project. Skilled freelancers are ready to bring your ideas to life!
        </p>

        <button className="py-2 bg-[#266464] hover:bg-[#1f5252] text-white rounded-md w-[30vh] mt-7 sm:py-3 xl:mt-12">
          Click Me
        </button>
      </div>

      {/* Right Content - Grid Section */}
      <div className="relative z-10 bg-white h-auto w-full mt-9 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 lg:w-[50%] shadow-lg rounded-xl p-6 xl:mb-8 mb-10">
        {/* Box 1 */}
        <div className="flex flex-col items-start">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#66A3A3]">
            <BriefcaseBusiness size={24} color="#266464" />
          </div>
          <h1 className="font-satoshi pt-5">Post a Job</h1>
          <p className="pt-3 text-sm font-serif">
            It's free and easy to post a job. Simply fill in a title description.
          </p>
        </div>

        {/* Box 2 */}
        <div className="flex flex-col items-start">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#66A3A3]">
            <UserRoundPen size={24} color="#266464" />
          </div>
          <h1 className="font-satoshi pt-5">Choose Freelancers</h1>
          <p className="pt-3 text-sm font-serif">
            It's free and easy to post a job. Simply fill in a title description.
          </p>
        </div>

        {/* Box 3 */}
        <div className="flex flex-col items-start">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#66A3A3]">
            <Handshake size={24} color="#266464" />
          </div>
          <h1 className="font-satoshi pt-5">Pay Safely</h1>
          <p className="pt-3 text-sm font-serif">
            It's free and easy to post a job. Simply fill in a title description.
          </p>
        </div>

        {/* Box 4 */}
        <div className="flex flex-col items-start">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#66A3A3]">
            <HeartHandshake size={24} color="#266464" />
          </div>
          <h1 className="font-satoshi pt-5">We are here to help</h1>
          <p className="pt-3 text-sm font-serif">
            It's free and easy to post a job. Simply fill in a title description.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;

