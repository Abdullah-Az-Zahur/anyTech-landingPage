import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import WaveLinesDesktop1 from "../../../assets/image/backgrounds/WaveLinesDesktop1.svg";
import WaveLinesDesktop2 from "../../../assets/image/backgrounds/WaveLinesDesktop2.svg";
import WaveLinesDesktop3 from "../../../assets/image/backgrounds/WaveLinesDesktop3.svg";
import WaveLinesDesktop4 from "../../../assets/image/backgrounds/WaveLinesDesktop4.svg";
import HeroImage from "../../../assets/image/backgrounds/Woman-laptop-purple-computer-website-glasses.jpg";
import { IoIosArrowForward } from "react-icons/io";

const Banner = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouseX(e.clientX / window.innerWidth - 0.5);
      setMouseY(e.clientY / window.innerHeight - 0.5);
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-blue-600">
      {/* Full Background Image */}
      <img
        src={HeroImage}
        alt="Hero Background"
        className="absolute  right-0 w-full h-full pt-20 object-cover  "
        style={{
          clipPath: "polygon(80% 0%, 130% 10%, 90% 100%, 0% 100%, 0% 150%)"
        }}
      />

      {/* Floating Wave Lines - Covering Full Banner */}
      <motion.img
        src={WaveLinesDesktop1}
        alt="Wave1"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-80 mix-blend-screen"
        animate={{ x: mouseX * 30, y: mouseY * 20 }}
        transition={{ type: "tween", stiffness: 100 }}
      />
      <motion.img
        src={WaveLinesDesktop2}
        alt="Wave2"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-60 mix-blend-screen"
        animate={{ x: -mouseX * 40, y: mouseY * 25 }}
        transition={{ type: "tween", stiffness: 100 }}
      />
      <motion.img
        src={WaveLinesDesktop3}
        alt="Wave3"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-50 mix-blend-screen"
        animate={{ x: mouseX * 25, y: -mouseY * 30 }}
        transition={{ type: "tween", stiffness: 100 }}
      />
      <motion.img
        src={WaveLinesDesktop4}
        alt="Wave4"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-70 mix-blend-screen"
        animate={{ x: -mouseX * 35, y: -mouseY * 20 }}
        transition={{ type: "tween", stiffness: 100 }}
      />

      {/* Text Content (Positioned Left) */}
      <div className="relative z-10 flex items-center h-full w-full px-10">
        <div className="text-white max-w-lg">
          <h1 className="text-7xl font-bold mb-4">Embrace the future of finance</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae nesciunt exercitationem suscipit qui. Optio, iste.
          </p>

          <button type="button" className="mt-6 bg-orange-400 text-white text-xl font-bold p-5 rounded-md px-8 flex items-center gap-2 text-center">Reach Out Us <IoIosArrowForward /></button>
        </div>
        
      </div>
    </div>
  );
};

export default Banner;
