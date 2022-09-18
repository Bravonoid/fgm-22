import { motion, useMotionValue } from "framer-motion";
import pasar from "../../../styles/pasar.module.css";
import Festivalseni from '../../../assets/2nd/festivalseni.png'




const publicURL = "${process.env.PUBLIC_URL}";

export const Card = ({ style, children, image, id, hovered, url, ...rest }) => {
  const setStyle = (hoveredId, idx) => {
    console.log(id)

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
  const setLink = (id) => {
    console.log(id)
    
    switch (id) {
      case 0:
        return "/teater";
      case 1:
        return "/festivalseni";
      case 2:
        return "/pasarrakyat";
 
    
      default:
        break;
    }
  };

  useMotionValue(0);
  return (
    <>
      <a
        href={
          `${setLink(id)}`
         }
        className={`hidden cursor-pointer md:flex items-end  flex-wrap border-none ${
          pasar[setStyle(hovered, id)]
        } ${pasar.card} text-2xl font-semibold text-white`}
        {...rest}
      >
        <div className="absolute z-10 justify-between flex max-w-[72] py-6 capitalize">{children}</div>
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
        href={
          `${setLink(id)}`
       }
        className={`flex md:hidden mb-3 rounded-xl border-none items-end justify-center sm:flex-wrap sm:w-72 sm:h-60 mobile:w-72 mobile:h-40 text-md font-semibold text-white bg-black`}
        {...rest}
      >
        <div className="absolute z-10 p-5  max-w-[32] capitalize">{children}</div>
        <div className="w-full h-full relative">
          <div className={`w-full h-full absolute ${pasar.filter}`} />
          <motion.img
            className="w-full h-full "
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
