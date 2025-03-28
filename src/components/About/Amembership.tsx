import { useState } from "react";
import { Switch } from "../ui/switch";

const plans = [
  {
    name: "Basic Plan",
    monthlyPrice: 20000,
    yearlyPrice: 200000,
    features: ["✔️ Limited Access", "✔️ 5 Projects", "✔️ Email Support"],
  },
  {
    name: "Standard Plan",
    monthlyPrice: 50000,
    yearlyPrice: 500000,
    features: ["✔️ Full Access", "✔️ 10 Projects", "✔️ Priority Support"],
  },
  {
    name: "Extended Plan",
    monthlyPrice: 100000,
    yearlyPrice: 1000000,
    features: ["✔️ Unlimited Access", "✔️ 20 Projects", "✔️ 24/7 Support"],
  },
  {
    name: "Enterprise Plan",
    monthlyPrice: 200000,
    yearlyPrice: 2000000,
    features: ["✔️ Custom Solutions", "✔️ Unlimited Projects", "✔️ Dedicated Manager"],
  },
];

const Amembership = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center py-10 px-4 pb-20">
      {/* Title */}
      <h1 className="text-3xl font-bold text-black mb-2 font-satoshi">Membership Plan</h1>
      <span className="text-gray-600 mb-6 font-serif">Choose a plan that works for you</span>

      {/* Billing Switch */}
      <div className="flex items-center gap-4 mb-10">
        <span className="text-gray-600 font-serif">Billed Monthly</span>
        <Switch className="bg-green-100" checked={isYearly} onCheckedChange={setIsYearly} />
        <span className="text-gray-600 font-serif">Billed Yearly</span>
      </div>

      {/* Plans */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="p-6 bg-white border-2 border-gray-300 rounded-2xl shadow-md hover:shadow-lg hover:border-[#00b894] transition-all cursor-pointer flex flex-col items-center text-center"
          >
            {/* Plan Price */}
            <h2 className="text-xl font-serif xl:text-3xl text-[#00b894] mt-6 mb-4">
              ₦{isYearly ? plan.yearlyPrice.toLocaleString() : plan.monthlyPrice.toLocaleString()}
              <span className="text-gray-600 text-sm">/{isYearly ? "year" : "month"}</span>
            </h2>

            {/* Plan Name */}
            <h3 className="text-lg font-semibold mt-2 font-satoshi">{plan.name}</h3>

            {/* Features */}
            <ul className="mt-3 space-y-1 text-gray-600 font-serif">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            {/* Buy Now Button */}
            <button className="py-2 sm:py-3 w-full mt-10 border-2 border-[#266464] text-[#266464] rounded-md font-serif flex items-center justify-center gap-2 hover:bg-[#266464] hover:text-white transition ">
              Buy Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amembership;

