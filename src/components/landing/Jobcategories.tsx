import { FileCode2 } from "lucide-react";
import { BookText } from "lucide-react";
import { BadgePoundSterling } from "lucide-react";
import { PaintbrushVertical } from "lucide-react";
import { QrCode } from "lucide-react";
import { School } from "lucide-react";
import { Palette } from "lucide-react";
import { HardDriveDownload } from "lucide-react";

const Jobcategories = () => {
  return (
    <div className="w-full h-auto ">
      <div className="w-full items-center justify-center flex ">
        <h1 className="mt-7 mb-4 text-xl sm:text-3xl  text-center xl:mt-24 ">
          Popular Jobs
        </h1>
      </div>

      <div className="flex justify-center items-center gap-6 flex-wrap">
        {/* Box 1 */}
        <div className="w-48 h-36 flex flex-col items-center justify-center gap-2 rounded-lg mt-4 bg-white hover:bg-[#266464] transition-all duration-300">
          <FileCode2
            size={40}
            color="#266464"
            className="group-hover:text-white"
          />
          <p className="font-medium text-lg text-[#266464] group-hover:text-white">
            Web & Software Dev
          </p>
          <h2 className="w-full text-center text-sm text-gray-700 group-hover:text-gray-300 font-serif">
            Software Engineer, Web/Mobile Developer & more
          </h2>
        </div>

        {/* Box 2 */}
        <div className="w-48 h-36 flex flex-col items-center justify-center gap-2 rounded-lg mt-4 bg-white hover:bg-[#266464] transition-all duration-300">
          <BookText
            size={40}
            color="#266464"
            className="group-hover:text-white"
          />
          <p className="font-medium text-lg text-[#266464] group-hover:text-white">
            Writing & Editing
          </p>
          <h2 className="w-full text-center text-sm text-gray-700 group-hover:text-gray-300 font-serif">
            Content Writer, Editor, Researcher & more
          </h2>
        </div>

        {/* Box 3 */}
        <div className="w-48 h-36 flex flex-col items-center justify-center gap-2 rounded-lg mt-4 bg-white hover:bg-[#266464] transition-all duration-300">
          <BadgePoundSterling
            size={40}
            color="#266464"
            className="group-hover:text-white"
          />
          <p className="font-medium text-lg text-[#266464] group-hover:text-white">
            Sales & Marketing
          </p>
          <h2 className="w-full text-center text-sm text-gray-700 group-hover:text-gray-300 font-serif">
            Brand Manager, SEO Expert & more
          </h2>
        </div>

        {/* Box 4 */}
        <div className="w-48 h-36 flex flex-col items-center justify-center gap-2 rounded-lg mt-4 bg-white hover:bg-[#266464] transition-all duration-300">
          <PaintbrushVertical
            size={40}
            color="#266464"
            className="group-hover:text-white"
          />
          <p className="font-medium text-lg text-[#266464] group-hover:text-white">
            Graphics & Design
          </p>
          <h2 className="w-full text-center text-sm text-gray-700 group-hover:text-gray-300 font-serif">
            UI/UX Designer, Illustrator & more
          </h2>
        </div>

        {/* Box 5 */}
        <div className="w-48 h-36 flex flex-col items-center justify-center gap-2 rounded-lg mt-4 bg-white hover:bg-[#266464] transition-all duration-300">
          <QrCode
            size={40}
            color="#266464"
            className="group-hover:text-white"
          />
          <p className="font-medium text-lg text-[#266464] group-hover:text-white">
            Digital Marketing
          </p>
          <h2 className="w-full text-center text-sm text-gray-700 group-hover:text-gray-300 font-serif">
            Social Media Manager, Ad Specialist
          </h2>
        </div>

        {/* Box 6 */}
        <div className="w-48 h-36 flex flex-col items-center justify-center gap-2 rounded-lg mt-4 bg-white hover:bg-[#266464] transition-all duration-300">
          <School
            size={40}
            color="#266464"
            className="group-hover:text-white"
          />
          <p className="font-medium text-lg text-[#266464] group-hover:text-white">
            Education & Training
          </p>
          <h2 className="w-full text-center text-sm text-gray-700 group-hover:text-gray-300 font-serif">
            Tutor, Online Instructor & more
          </h2>
        </div>

        {/* Box 7 */}
        <div className="w-48 h-36 flex flex-col items-center justify-center gap-2 rounded-lg mt-4 bg-white hover:bg-[#266464] transition-all duration-300">
          <Palette
            size={40}
            color="#266464"
            className="group-hover:text-white"
          />
          <p className="font-medium text-lg text-[#266464] group-hover:text-white">
            Art & Creativity
          </p>
          <h2 className="w-full text-center text-sm text-gray-700 group-hover:text-gray-300 font-serif">
            Painter, Illustrator, Creative Artist
          </h2>
        </div>

        {/* Box 8 */}
        <div className="w-48 h-36 flex flex-col items-center justify-center gap-2 rounded-lg mt-4 bg-white hover:bg-[#266464] transition-all duration-300">
          <HardDriveDownload
            size={40}
            color="#266464"
            className="group-hover:text-white"
          />
          <p className="font-medium text-lg text-[#266464] group-hover:text-white">
            Data Science
          </p>
          <h2 className="w-full text-center text-sm text-gray-700 group-hover:text-gray-300 font-serif">
            Data Analyst, Machine Learning Engineer
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Jobcategories;
