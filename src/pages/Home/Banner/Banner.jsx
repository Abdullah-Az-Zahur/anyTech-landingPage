import ctaMobileWaveLines from "../../../assets/image/backgrounds/ctaMobileWaveLines.svg";
import WaveLinesDesktop1 from "../../../assets/image/backgrounds/WaveLinesDesktop1.svg";
import WaveLinesDesktop2 from "../../../assets/image/backgrounds/WaveLinesDesktop2.svg";
import WaveLinesDesktop3 from "../../../assets/image/backgrounds/WaveLinesDesktop3.svg";
import WaveLinesDesktop4 from "../../../assets/image/backgrounds/WaveLinesDesktop4.svg";
import WaveLinesMobile1 from "../../../assets/image/backgrounds/WaveLinesMobile1.svg";
import WaveLinesMobile2 from "../../../assets/image/backgrounds/WaveLinesMobile2.svg";
import HeroImage from "../../../assets/image/backgrounds/Woman-laptop-purple-computer-website-glasses.jpg";

const Banner = () => {
  return (
    <div className="bg-blue-600">
      <section className=" pt-20 relative w-full text-white overflow-hidden bg-clip-hero svelte-1qwx760 ">
        <div className="h-full w-full relative z-20 flex">
          <div className="w-2/3">
            <h2>afsd</h2>
          </div>
          <div className="">
            <img src={HeroImage} alt="" srcset="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
