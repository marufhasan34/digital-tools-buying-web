import { VscCircleFilled } from "react-icons/vsc";
import BannerImage from "../../assets/banner.png";
import { IoPlayOutline } from "react-icons/io5";

const Banner = () => {
  return (
    <div className="relative min-h-162.5 flex items-center overflow-hidden">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-4 mt-10 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 text-blue-700 bg-[#e1e7ff]  text-sm font-medium px-5 py-2 rounded-full">
            <VscCircleFilled /> New: AI-Powered Tools Available
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold lg:font-extrabold leading-tight tracking-tighter">
            Supercharge Your <br /> Digital Workflow
          </h1>

          <p className="text-lg text-zinc-700 max-w-lg">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore
            Products
          </p>

          <div className="flex  gap-3 pt-4">
            <button className="btn bg-[linear-gradient(88deg,#4f39f6_0%,#9514fa_100%)] mx-auto lg:mx-0 rounded-full text-white">
              Explore Products
            </button>
            <button className="btn lg:mx-0 mx-auto rounded-full text-blue-800">
             <IoPlayOutline /> Watch Demo
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <img
              className="relative h-130 w-auto object-contain drop-shadow-2xl rounded-3xl"
              src={BannerImage}
              alt="AI Models Banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
