import Image from "next/image";
import { MyImage } from "../data.json";

const MyIMG = ({ isHidden , className }) => {
  return (
    // ${isHidden && "hidden"}
    <div className={`flex md:justify-end justify-center items-center select-none ${className}`}>
      <div className="w-[300px] h-[300px] relative flex items-center justify-center ">
        <Image
          src={MyImage}
          width={1200}
          height={1200}
          alt="My Image"
          className="w-[80%] h-[80%]  object-cover rounded"
        />
        <div className="line-bottom"></div>
        <div className="line-top-left-horizontal"></div>
        <div className="line-top-left-vertical"></div>
      </div>
    </div>
  );
};
export default MyIMG;
