import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import "./FlotingButton.css";

const FloatingButton = ({ image1, image2, tooltip = true }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative"
    >
      <AnimatePresence>
        {hover && tooltip && (
          <motion.div
            style={{
              backgroundImage:
                "linear-gradient(to bottom, #fff 6%, #e5edff 74%, #fff 102%)",
            }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            className="absolute -left-[140px] flex items-center rounded-lg justify-center w-[125px] h-[58px] tool"
          >
            ToolTip
          </motion.div>
        )}
      </AnimatePresence>
      <img
        src={hover ? image2 : image1}
        className="w-12 cursor-pointer z-20"
        alt=""
      />
    </div>
  );
};

export default FloatingButton;
