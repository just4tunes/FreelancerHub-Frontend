import { Check } from "lucide-react";

const Avision = () => {
  return (
    <div className="w-full h-auto xl:mt-14 ">
      <div className="w-full px-2 sm:px-14 lg:flex xl:px-24 ">
        <div className="lg:w-[50%] ">
          <h1 className="text-lg font-bold font-satoshi mt-20 lg:text-[4vh] lg:w-52 lg:text-black lg:font-bold lg:leading-9 xl:w-96">
            Join the World's Best Marketplace for Workers
          </h1>
        </div>

        <div className="mt-7 lg:w-[50%]">
          <div className="lg:mt-12">
            <span className="text-sm font-serif  ">
              {" "}
              At StudentFreelance, we empower students and freelancers by
              connecting them to real opportunities. Whether you're a student
              looking to gain experience or a skilled freelancer seeking
              meaningful work, our platform bridges the gap between talent and
              opportunity. We believe in flexibility, fair pay, and skill
              growth, ensuring that every freelancer gets the chance to thrive.
              Our mission is to create a reliable, secure, and diverse
              marketplace where talent meets demand. Join us today and take the
              next step toward building your career, gaining financial
              independence, and making an impact!
            </span>
          </div>

          <div className="flex items-center gap-4 flex-wrap mt-8  ">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" stroke="#00b894" />
              <p className="font-serif">
                Connect to freelancers with experience
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" stroke="#00b894" />
              <p className="font-serif">Work with trusted professionals</p>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" stroke="#00b894" />
              <p className="font-serif">Affordable services for every budget</p>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" stroke="#00b894" />
              <p className="font-serif">Secure payments & reliable support</p>
            </div>
          </div>
          <button className="py-2 sm:py-3 w-[20vh] mt-9 border-2 border-[#266464] text-[#266464] rounded-md font-serif flex items-center justify-center gap-2 ">
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Avision;
