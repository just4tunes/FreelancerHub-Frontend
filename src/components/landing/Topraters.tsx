import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const profiles = [
  {
    id: 1,
    name: "John Doe",
    work: "Web Developer",
    rating: 4.8,
    location: "New York, USA",
    rate: "$50/hr",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    work: "Graphic Designer",
    rating: 4.5,
    location: "Los Angeles, USA",
    rate: "$40/hr",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Michael Brown",
    work: "UI/UX Designer",
    rating: 4.7,
    location: "London, UK",
    rate: "$60/hr",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Sarah Wilson",
    work: "Software Engineer",
    rating: 4.9,
    location: "Berlin, Germany",
    rate: "$70/hr",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 5,
    name: "Sarah Wilson",
    work: "Software Engineer",
    rating: 4.9,
    location: "Berlin, Germany",
    rate: "$70/hr",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 6,
    name: "Sarah Wilson",
    work: "Software Engineer",
    rating: 4.9,
    location: "Berlin, Germany",
    rate: "$70/hr",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

const Topraters = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [current]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? profiles.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === profiles.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center bg-white p-5 rounded-3xl shadow-lg relative xl:mt-14 xl:pb-20">

        <div className="mb-16">
            <h1 className="xl:text-2xl font-bold ">Highest Rated Freelancers</h1>
        </div>
      {/* Carousel Container */}
      <div className="w-full max-w-5xl flex overflow-hidden">
        <AnimatePresence mode="wait">
          {profiles.slice(current, current + 3).map((profile) => (
            <motion.div
              key={profile.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
              className="flex-shrink-0 w-full sm:w-1/2 xl:w-1/3 bg-white rounded-lg p-5 shadow-lg flex flex-col items-center text-center mx-2 font-serif"
            >
              {/* Profile Picture */}
              <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-gray-300">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name & Work */}
              <h2 className="mt-3 text-lg font-semibold text-gray-800 font-serif">
                {profile.name}
              </h2>
              <p className="text-gray-500">{profile.work}</p>

              {/* Ratings */}
              <div className="flex items-center gap-1 text-yellow-500 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < Math.round(profile.rating) ? "currentColor" : "none"}
                    stroke="currentColor"
                  />
                ))}
                <span className="text-gray-600 text-sm ml-2">
                  {profile.rating.toFixed(1)}
                </span>
              </div>

              {/* Location & Rate */}
              <p className="text-gray-500 mt-2">{profile.location}</p>
              <p className="font-bold text-gray-700 mt-1">{profile.rate}</p>

              {/* View Profile Button */}
              <button className="mt-4 px-6 py-2 bg-[#266464] text-white rounded-lg hover:bg-[#1f5252]">
                View Profile
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Stylish Bottom Controls */}
      <div className="flex items-center gap-4 mt-4">
        <button
          onClick={prevSlide}
          className="p-3 bg-[#266464] text-white rounded-full shadow-lg hover:bg-[#1f5252]"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Dots Indicator */}
        <div className="flex gap-2">
          {profiles.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === current ? "bg-[#266464]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-3 bg-[#266464] text-white rounded-full shadow-lg hover:bg-[#1f5252]"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Topraters;

