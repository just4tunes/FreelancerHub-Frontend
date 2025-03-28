
const Cform = () => {
    return (
      <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-4 py-10 xl:px-24">


        {/* Left Section - Image */}
        <div className="w-full md:w-1/2 flex justify-center xl:w-[50%]">
          <img
            src="/images/contactimg.svg"
            alt="Contact Us"
            className="h-auto object-cover sm:pt-20 md:w-[60%] md:pt-0 xl:w-[90%]"
          />
        </div>
  
        {/* Right Section - Form */}
        <div className="w-full max-w-md  rounded-lg p-6 xl:w-[50%] ">
          <h2 className="text-2xl font-bold  text-[#266464] mb-6">
            Get in Touch
          </h2>
  
          <form className="space-y-4">
            {/* Name Field */}
            <div>
              <label className="block text-[#266464] font-medium">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-[#266464]  rounded-md focus:outline-none"
              />
            </div>
  
            {/* Email Field */}
            <div>
              <label className="block text-[#266464] font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-[#266464]  rounded-md focus:outline-none"
              />
            </div>
  
            {/* Your Question Field */}
            <div>
              <label className="block text-[#266464] font-medium">Your Question</label>
              <input
                type="text"
                placeholder="Type your question"
                className="w-full px-4 py-2 border border-[#266464]  rounded-md focus:outline-none"
              />
            </div>
  
            {/* Your Comment Field */}
            <div>
              <label className="block text-[#266464] font-medium">Your Comment</label>
              <textarea
                rows="4"
                placeholder="Write your comment here..."
                className="w-full px-4 py-2 border border-[#266464] rounded-md focus:outline-none"
              ></textarea>
            </div>
  
            {/* Send Message Button */}
            <div className="">
              <button
                type="submit"
                className="w-[50%] bg-[#266464] text-white font-medium py-2 rounded-md transition duration-200 hover:bg-gray-900"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default Cform;
  