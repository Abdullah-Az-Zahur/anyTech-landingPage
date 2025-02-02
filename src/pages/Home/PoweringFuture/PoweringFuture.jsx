import { motion } from "framer-motion";

const PoweringFuture = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 md:gap-[15px] relative mt-20">
      <div className="md:space-y-sm space-y-xs">
        <h6 className="lg:text-head-6 text-res-head-6 uppercase text-blue-main font-Montserrat">
          POWERING THE FUTURE OF FINANCE
        </h6>
        <h2 className=" ">Uncovering new ways to delight customers</h2>
      </div>
      <div className="hidden md:block relative h-fit lg:text-clip justify-between">
        
        {/* hero image */}
        <figure className="w-[76%] mx-auto ">
          <img
            src="https://cdn.sanity.io/images/6jywt20u/production/5ca8af1a922b106b962c34781483bc8e6e066688-1124x1364.png?w=960&auto=format"
            alt=""
            srcset=""
            className=" "
          />
        </figure>

        {/* logos */}
        <div>
          {/* First Figure - Moves in X & Y Axis */}
          <motion.figure
            className="absolute top-[10%] right-[12%] translate-x-1/2 w-[min(115px,_30%)] rounded-full drop-shadow-2xl border"
            style={{ "--motion-translateX": "50%" }} // Custom variable
            animate={{ x: ["50%", "50%"], y: [0, 10, 0] }} // Moves up and down slowly
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src="https://cdn.sanity.io/images/6jywt20u/production/0f6c8e3f8d16b88978823d82126b03593266eb79-116x115.svg?w=116&auto=format"
              alt=""
              width={116}
              height={115}
              loading="lazy"
              className="object-contain w-full h-full"
            />
          </motion.figure>

          {/* Second Figure - Moves only in Y Axis */}
          <motion.figure
            className="absolute top-[40%] left-[20%] w-[min(87px,_20%)] rounded-full drop-shadow-2xl"
            animate={{ y: [0, 10, 0] }} // Moves up and down
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img
              src="https://cdn.sanity.io/images/6jywt20u/production/f034c835798f95c1ce84f9c34ba48682b6383d06-89x88.svg?auto=format"
              alt=""
              width={89}
              height={88}
              loading="lazy"
              className="object-contain w-full h-full"
            />
          </motion.figure>

          {/* Third Figure - Moves in X & Y Axis */}
          <motion.figure
            className="absolute top-[20%] left-[12%] -translate-x-1/2 w-[min(73px,_18%)] rounded-full drop-shadow-2xl"
            style={{ "--motion-translateX": "-50%" }} // Custom variable
            animate={{ x: ["-50%", "-50%"], y: [0, 10, 0] }} // Moves up and down slowly
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src="https://cdn.sanity.io/images/6jywt20u/production/c544c6e75349fb440fc0938052f9288519c87bec-74x75.svg?w=74&auto=format"
              alt=""
              width={74}
              height={75}
              loading="lazy"
              className="object-contain w-full h-full"
            />
          </motion.figure>
        </div>

            {/* bg animation */}
        <figure className="absolute inset-0 w-full h-full -z-10">
          <img
            src="https://anytxn.com/backgrounds/home/futureOfFinance/background.svg"
            alt=""
            srcset=""
            loading="lazy"
            className="object-cover w-full h-full overflow-visible"
          />
        </figure>

        <figure className="absolute h-[50%] w-[50%] z-10 -bottom-[18%] right-[20%]">
          <img
            src="https://anytxn.com/backgrounds/home/futureOfFinance/foreground.png"
            alt=""
            srcset=""
            loading="lazy"
            className="object-cover w-full h-full overflow-visible"
          />
        </figure>
      </div>
    </div>
  );
};

export default PoweringFuture;
