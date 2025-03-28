import { ContactRound } from "lucide-react";
import { DiamondPlus } from "lucide-react";
import { CalendarArrowUp } from "lucide-react";
import { Rocket } from "lucide-react";

const Facts = () => {
  return (
    <div className=" h-auto mt-16">
      <div className="w-full h-[60vh] bg-[#266464] rounded-xl flex justify-center items-center xl:h-[40vh]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-3 w-fit sm:gap-x-28 md:gap-x-10 xl:gap-x-32">
          {/* One */}
          <div className="w-[20vh] h-auto rounded-lg flex flex-col justify-center items-center py-4">
            <ContactRound size={40} color="#FFFFFF" />
            <p className="text-[6vh] text-white font-bold">400</p>
            <span className="text-white font-satoshi text-sm">
              Total Freelancer
            </span>
          </div>

          {/* Two */}
          <div className="w-[20vh] h-auto rounded-lg flex flex-col justify-center items-center py-4">
            <DiamondPlus size={40} color="#FFFFFF" />
            <p className="text-[6vh] text-white font-bold">200</p>
            <span className="text-white font-satoshi text-sm">
              Positive Review
            </span>
          </div>

          {/* Three */}
          <div className="w-[20vh] h-auto rounded-lg flex flex-col justify-center items-center py-4">
            <CalendarArrowUp size={40} color="#FFFFFF" />
            <p className="text-[6vh] text-white font-bold">1000</p>
            <span className="text-white font-satoshi text-sm">
              Order Received
            </span>
          </div>

          {/* Four */}
          <div className="w-[20vh] h-auto rounded-lg flex flex-col justify-center items-center py-4">
            <Rocket size={40} color="#FFFFFF" />
            <p className="text-[6vh] text-white font-bold">90000</p>
            <span className="text-white font-satoshi text-sm">
              Projects Completed
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;
