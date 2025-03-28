import AnimatedImageSection from "../common/AnimatedImageSection";

function Hero() {
  return (
    <div className="w-full h-auto  px-3 sm:px-16 md:px-7 lg:flex xl:px-16 ">
      <div className="lg:w-[50%]">
        <div className="lg:mt-7">
          <p className="font-satoshi font-bold text-3xl tracking-wide leading-9 mb-2 md:text-5xl md:leading-[10vh]">
            Connect. Collaborate. Succeed.
          </p>

          <span className="font-serif text-sm lg:text-lg">
            Join a thriving marketplace where university students find freelance
            gigs, showcase their skills, and build experience while studying.
            Whether you need a project done or want to earn from your expertise,
            StudentFreelance is your gateway to opportunity!
          </span>
        </div>

        <div className="flex gap-4 sm:mt-5">
          <button className=" py-2 bg-[#266464] hover:bg-[#1f5252] text-white rounded-md  w-[20vh] mt-5 sm:py-3 font-serif">
            Click Me
          </button>

          <button className="w-32 h-10 border mt-5 border-[#266464] text-black rounded-md hover:bg-[#266464] hover:text-white transition sm:h-10">
            Outline Button
          </button>
        </div>

        {/* // second section */}

        <div className="w-full h-auto mt-8">
          <p className="text-sm">Trusted by</p>
          <div>
            <div className="flex flex-col sm:flex-row flex-wrap w-fit mt-6 gap-3">
              <div className="flex gap-3 sm:gap-6">
                <img src="/images/22.png" alt="Image" className="w-20 h-auto" />
                <img
                  src="/images/19.png"
                  alt="Image"
                  className="w-20 h-5 mt-3"
                />
                <img
                  src="/images/20.png"
                  alt="Image"
                  className="w-20 h-4 mt-2.5"
                />
              </div>
              <div className="flex w-full sm:w-auto mt-2 sm:mt-0 sm:ml-6">
                <img src="/images/21.png" alt="Image" className="w-20 h-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>


<div className="lg:w-[50%]">
<AnimatedImageSection/>

</div>
   
    </div>
  );
}

export default Hero;
