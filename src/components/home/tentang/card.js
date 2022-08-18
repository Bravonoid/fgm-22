import { motion, useMotionValue } from "framer-motion";
import pasar from "../../../styles/pasar.module.css";
import Festivalseni from '../../../assets/2nd/festivalseni.png'




const publicURL = "${process.env.PUBLIC_URL}";

export const Card = ({ style, children, image, id, hovered, url, ...rest }) => {
  const setStyle = (hoveredId, idx) => {
    switch (Math.abs(idx - hoveredId)) {
      case 0:
        return " ";
      case 1:
        return "medium-blur";
      case 2:
        return "medium-blur";
 
      case 5:
        return "medium";
      case 6:
        return "medium";
      case 7:
        return "medium";
      case 8:
        return "medium";
        case 9:
        return "medium";
      case 10:
        return "medium";
      default:
        break;
    }
  };

  useMotionValue(0);
  return (
    <>
      <a
        // href={
        //   url !== "" ? url : `/pasar-rakyat/tenant/${id + 1 > 2 ? id : id + 1}`
        // }
        className={`hidden md:flex items-end  flex-wrap border-none ${
          pasar[setStyle(hovered, id)]
        } ${pasar.card} text-2xl font-semibold text-white`}
        {...rest}
      >
        <div className="absolute z-10 px-6 py-6 capitalize">{children}</div>
        <motion.div
          className="w-full h-full relative"
          whileHover={{
            scale: 1.15,
            transition: { type: "just", duration: 0.35 },
          }}
        >
          <div className={`w-full h-full absolute ${pasar.filter}`} />
          <motion.img
            className="w-full h-full absolute"
            style={{
              scale: 1.01,
              background: `url('/assets/${image}')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          />
        </motion.div>
      </a>
      <a
        // href={
        //   url !== "" ? url : `/pasar-rakyat/tenant/${id + 1 > 2 ? id : id + 1}`
        // }
        className={`flex md:hidden mb-3 rounded-xl border-none items-end justify-center flex-wrap w-52 h-60 text-md font-semibold text-white bg-black`}
        {...rest}
      >
        <div className="absolute z-10 p-10 capitalize">{children}</div>
        <div className="w-full h-full relative">
          <div className={`w-full h-full absolute ${pasar.filter}`} />
          <motion.img
            className="w-full h-full rounded-xl"
            style={{
              background: `url('/assets/${image}')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>
      </a>
    </>
  );
};
