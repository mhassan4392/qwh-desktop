import { motion } from "framer-motion";

import suspension_help from "@/assets/images/suspension_help.webp";
import suspension_service from "@/assets/images/suspension_service.webp";
import suspension_download from "@/assets/images/suspension_download.webp";
import suspension_top from "@/assets/images/suspension_top.webp";
import suspension_help_hover from "@/assets/images/suspension_help_hover.webp";
import suspension_service_hover from "@/assets/images/suspension_service_hover.webp";
import suspension_download_hover from "@/assets/images/suspension_download_hover.webp";
import suspension_top_hover from "@/assets/images/suspension_top_hover.webp";
import FloatingButton from "./FlotingButton";
const FloatingButtons = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="fixed right-2 top-[45%] z-20">
        <div className="space-y-3">
          <FloatingButton
            image1={suspension_help}
            image2={suspension_help_hover}
          />

          <FloatingButton
            image1={suspension_service}
            image2={suspension_service_hover}
          />

          <FloatingButton
            image1={suspension_download}
            image2={suspension_download_hover}
          />
        </div>
      </div>

      <div
        className="fixed right-2 top-[80%] z-20"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <FloatingButton
          tooltip={false}
          image1={suspension_top}
          image2={suspension_top_hover}
        />
      </div>
    </motion.div>
  );
};

export default FloatingButtons;
