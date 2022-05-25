import secondnavbar_casino_image1 from "@/assets/images/secondnavbar_casino_image1.webp";
import secondnavbar_casino_image2 from "@/assets/images/secondnavbar_casino_image2.webp";
import secondnavbar_casino_image3 from "@/assets/images/secondnavbar_casino_image3.webp";
import secondnavbar_casino_image4 from "@/assets/images/secondnavbar_casino_image4.webp";
import secondnavbar_casino_ob1 from "@/assets/images/secondnavbar_casino_ob1.webp";
import secondnavbar_casino_ob2 from "@/assets/images/secondnavbar_casino_ob2.webp";
import secondnavbar_casino_ob3 from "@/assets/images/secondnavbar_casino_ob3.webp";
import secondnavbar_casino_ob4 from "@/assets/images/secondnavbar_casino_ob4.webp";
import { motion } from "framer-motion";

const NavMenuThree = () => {
  const boxes = [
    {
      mainImage: secondnavbar_casino_image1,
      sideImage: secondnavbar_casino_ob1,
    },
    {
      mainImage: secondnavbar_casino_image2,
      sideImage: secondnavbar_casino_ob2,
    },
    {
      mainImage: secondnavbar_casino_image3,
      sideImage: secondnavbar_casino_ob3,
    },
    {
      mainImage: secondnavbar_casino_image4,
      sideImage: secondnavbar_casino_ob4,
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      className="container mx-auto overflow-hidden h-full"
    >
      <div className="flex items-center justify-between h-full">
        <div className="w-full flex space-x-5">
          {boxes.map((box, i) => (
            <div
              key={i}
              className="flex flex-col basis-1/4 space-y-3 items-center justify-center"
            >
              <img src={box.sideImage} className="w-44" alt="" />
              <img src={box.mainImage} className="max-h-[200px]" alt="" />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default NavMenuThree;
