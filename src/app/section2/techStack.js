"use client";
import { motion } from "framer-motion";
import { TechStack, Quotes } from "../data.json";
const TeckStackComponent = () => {
  return (
    <div className="md:h-[80vh] mt-20 px-[10%] flex flex-col justify-between select-none">
      <div>
        <h1 className="text-3xl">Tech Stack :</h1>
      </div>

      <motion.div
        className="flex flex-wrap justify-between py-5"
        initial={{ paddingLeft: 200, paddingRight: 200 }}
        animate={{ paddingLeft: 0, paddingRight: 0 }}
        transition={{ delay:0.2 ,duration: 0.3 }}
      >
        {TechStack.map((teck, index) => (
          <img
            className="inline-block mx-3 my-2 h-8"
            key={index}
            src={teck[1]}
            alt={teck[0]}
            title={teck[0]}
          />
        ))}
      </motion.div>
      <motion.hr
        initial={{ marginRight: 500,marginLeft: 500 }}
        animate={{ margin: 0 }}
        transition={{ duration: 0.8 }}
      />
      <div className=" h-[10vh] flex items-center justify-center">
        <motion.p
          className="md:text-2xl text-xl font-[Fustat] select-text"
          dir="rtl"
          initial={{ paddingBottom: 30 }}
          animate={{ paddingBottom: 0 }}
        >
          {Quotes[1]}
        </motion.p>
      </div>
    </div>
  );
};
export default TeckStackComponent;
