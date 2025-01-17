"use client";
import Navbar from "./navbar";
import { motion } from "framer-motion";
import MyIMG from "./img";
import ResumeBTN from "./resumeBTN";
import { MyName, Age, Major } from "../data.json";

const Section1 = () => {
  return (
    <div className="relative md:h-screen pt-[20vh] pb-[10vh] section1">
      <Navbar />
      <div className=" md:absolute left-[10%] px-[10%] md:w-[80%]  md:h-[60vh] top-40 md:px-10 md:grid grid-cols-2">
        <MyIMG className={"md:hidden"} />
        <div className="flex md:justify-center flex-col gap-[20px] px-[15%] md:px-0 md:h-[100%] h-[40vh] relative">
          <motion.p
            className="font-[JockeyOne] text-3xl "
            initial={{ paddingBottom: 20 }}
            animate={{ paddingBottom: 0 }}
            transition={{ duration: 0.3 }}
          >
            Hi There!
          </motion.p>
          <motion.p
            className="text-xl"
            initial={{ paddingBottom: 15 }}
            animate={{ paddingBottom: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            I’m <span className="font-[Judson] text-3xl">{MyName}</span>
          </motion.p>
          <motion.p
            className="text-xl"
            initial={{ paddingBottom: 10 }}
            animate={{ paddingBottom: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            I’m {Age} Years Old
          </motion.p>
          <motion.p
            className="text-l"
            initial={{ paddingBottom: 5 }}
            animate={{ paddingBottom: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            {Major}
          </motion.p>
          <ResumeBTN />
        </div>
        <MyIMG className={"hidden md:flex"} />
      </div>
    </div>
  );
};
export default Section1;
