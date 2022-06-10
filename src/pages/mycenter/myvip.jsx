import { useEffect, useState } from "react";
import SectionOne from "../../components/pages/mycenter/myvip/SectionOne";
import SectionTwo from "../../components/pages/mycenter/myvip/SectionTwo";

import { motion, useAnimation } from "framer-motion";
import SectionThree from "../../components/pages/mycenter/myvip/SectionThree";

const MyVip = () => {
  const controls = useAnimation();
  const [vip, setVip] = useState(0);

  useEffect(() => {
    const run = async () => {
      controls.set({
        opacity: 0,
        y: "100px",
      });

      controls.start({
        y: 0,
        opacity: 1,
      });
    };

    run();
  }, [vip]);
  return (
    <div className="h-full flex flex-col gap-5">
      <div className="bg-white rounded">
        <SectionOne vip={vip} setVip={setVip} />
      </div>
      <motion.div animate={controls} className="bg-white rounded">
        <SectionTwo vip={vip} />
      </motion.div>
      <motion.div animate={controls} className="bg-white rounded grow">
        <SectionThree vip={vip} />
      </motion.div>
    </div>
  );
};

export default MyVip;
