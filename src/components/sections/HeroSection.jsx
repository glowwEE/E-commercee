import { HeroImg1, HeroImg2, HeroImg3, HeroImg4 } from "../../assets/Images/Images";
import HeroDetails from "../common/HeroDetails";

const HeroSection = () => {

  return (

    <div className=" h-2/6">
      <div className="grid grid-cols-4 grid-rows-2 gap-3 h-screen max-w-[78%] m-auto py-16 ">
        <div className="col-span-2 row-span-2 bg-cyan-400 relative  text-">
          <img className="w-full h-full object-cover" src={HeroImg1} alt="image one" />
          <HeroDetails itemsClass='text-[#2DC071]' titleClass='uppercase text-5xl leading-normal' readMoreClass='capitalize text-xs '/>
        </div>
        <div className="col-span-2 bg-cyan-400  relative">
          <img className="w-full h-full object-cover" src={HeroImg2} alt="" />
          <HeroDetails itemsClass='text-[#2DC071] text-xs' titleClass='uppercase text-xl leading-relaxed' readMoreClass='capitalize text-xs '/>
          </div>
        <div className="col-span-1 bg-cyan-400 relative">
          <img className="w-full h-full object-cover" src={HeroImg3} alt="" />
          <HeroDetails itemsClass='text-[#2DC071] text-xs' titleClass='uppercase text-xl leading-relaxed' readMoreClass='capitalize text-xs '/>
        </div>
        <div className="col-span-1 bg-cyan-400 flex items-center justify-center relative">
        <img className="w-full h-full object-cover" src={HeroImg4} alt="" />
        <HeroDetails itemsClass='text-[#2DC071] text-xs' titleClass='uppercase text-xl leading-relaxed' readMoreClass='capitalize text-xs '/>
        </div>
      </div>
    </div>

  )
}

export default HeroSection;
