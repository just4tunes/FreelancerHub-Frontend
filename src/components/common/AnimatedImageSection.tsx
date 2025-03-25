import { ArrowUpRight, ArrowDownLeft } from "lucide-react";

export default function AnimatedImageSection() {
  return (
    <div className="relative w-full h-[70vh] mt-10 overflow-hidden sm:px-7 md:px-24 lg:px-2 lg:h-[80vh] xl:h-[60vh] xl:w-[90%]">
      {/* Background Image */}
      <img src="/images/wtff'.jpg" alt="Image" className="w-full h-full object-cover" />

      {/* Top Floating Div */}
      <div className="absolute top-10 left-20 bg-white p-4 rounded-lg shadow-lg flex items-center gap-2 animate-floating xl:left-[58vh]">
        <ArrowUpRight className="text-teal-600" />
        <p className="text-black font-satoshi">Safe and secure</p>
      </div>

      {/* Bottom Floating Div */}
      <div className="absolute bottom-10 right-30 bg-white p-4 rounded-lg shadow-lg flex items-center gap-2 animate-floating xl:right-100 xl:bottom-4">
        <p className="text-black font-satoshi">proof of quality </p>
        <ArrowDownLeft className="text-red-600" />
      </div>
    </div>
  );
}
