import { Award } from "lucide-react";
import { Wallet } from "lucide-react";
import { ShieldPlus } from "lucide-react";

const Adiscription = () => {
  return (
    <div className="w-full h-auto mt-20 ">
      <div className="bg-[#edeae5]  w-full h-auto px-3 sm:px-5 xl:flex">
        <div className="xl:w-[50%]  ">
          <h1 className="pt-9 sm:ml-10 text-black font-satoshi font-extrabold xl:text-2xl mt-7 xl:mt-20">
            A whole world of freelance talent at your fingertips
          </h1>

          <div className="flex items-center gap-4 flex-wrap mt-8  ">
            <div className="flex items-start gap-4 xl:mt-6">
              <Award className="w-16 h-7 text-black mt-1" stroke="black" />
              <div>
                <p className="font-satoshi font-semibold xl:text-xl">
                  Proof of Quality
                </p>
                <span className="text-gray-700 font-serif xl:text-lg xl:w-[70%] xl:block">
                  Check any pro’s work samples, client reviews, and identity
                  verification.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-4 xl:mt-6">
              <Wallet className="w-16 h-7 text-black mt-1" stroke="black" />
              <div>
                <p className="font-satoshi font-semibold xl:text-xl">
                  No cost until you hire
                </p>
                <span className="text-gray-700 font-serif xl:text-lg xl:w-[70%] xl:block">
                  Interview potential fits for your job, negotiate rates, and
                  only pay for work you approve.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-4 xl:mt-6">
              <ShieldPlus className="w-16 h-7 text-black mt-1" stroke="black" />
              <div>
                <p className="font-satoshi font-semibold xl:text-xl">
                  Safe and secure
                </p>
                <span className="text-gray-700 font-serif xl:text-lg xl:w-[70%] xl:block">
                  Focus on your work knowing we help protect your data and
                  privacy. We’re here with 24/7 support if you need it.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 pb-16 xl:w-[50%]">
          <img
            src="/images/about-5.jpg"
            alt="Image"
            className="h-auto object-cover sm:pt-20  md:pt-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Adiscription;
