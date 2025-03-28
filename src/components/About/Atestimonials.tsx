import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "“StudentFreelance helped me find amazing clients worldwide!”",
    name: "Sarah Johnson",
    image: "/images/sarah.jpg",
  },
  {
    text: "“I landed my first remote job thanks to this platform!”",
    name: "David Kim",
    image: "/images/chris.jpg",
  },
  {
    text: "“The best marketplace for freelancers—easy, fast, and reliable!”",
    name: "Jessica Lee",
    image: "/images/jessica.jpg",
  },
  {
    text: "“I found top-tier clients and boosted my career here!”",
    name: "Michael Adams",
    image: "/images/michael.jpg",
  },
  {
    text: "“A game-changer for freelancers looking to grow!”",
    name: "Emily Parker",
    image: "/images/emily.jpg",
  },
];

const Atestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-switch every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[70vh] flex flex-col items-center justify-center text-center py-16 px-4">
      {/* Title */}
      <h1 className="text-3xl font-bold text-black mb-2 font-satoshi">Testimonials</h1>
      <span className="text-gray-600 mb-6 font-serif">What people say about us</span>

      {/* Green Giant Semicolon */}
      <Quote className="w-12 h-12 text-[#00b894] mb-4" />

      {/* Testimonial Text */}
      <div className="relative h-24 w-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={activeIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold text-black w-[80%] lg:w-[50%] font-serif"
          >
            {testimonials[activeIndex].text}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Profile Controls (Styled Overflow & Responsive) */}
      <div className="mt-8 flex gap-3 max-w-xs sm:max-w-md overflow-hidden relative  pt-3 pb-3">
        <div className="flex gap-2 sm:gap-3 justify-center">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-4 cursor-pointer transition-all ${
                activeIndex === index ? "border-[#00b894] scale-110" : "border-gray-300 opacity-60"
              }`}
              whileHover={{ scale: 1.1 }}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Small Dots Indicator */}
      <div className="flex mt-4 space-x-2">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full transition-all ${
              activeIndex === index ? "bg-[#00b894] scale-125" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Atestimonials;


