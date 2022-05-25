import secondnavbar_sports_image1 from "@/assets/images/secondnavbar_sports_image1.webp";
import secondnavbar_sports_image2 from "@/assets/images/secondnavbar_sports_image2.webp";
import secondnavbar_sports_image3 from "@/assets/images/secondnavbar_sports_image3.webp";
import secondnavbar_sports_image4 from "@/assets/images/secondnavbar_sports_image4.webp";
import secondnavbar_sports_ob1 from "@/assets/images/secondnavbar_sports_ob1.webp";
import secondnavbar_sports_ob2 from "@/assets/images/secondnavbar_sports_ob2.webp";
import secondnavbar_sports_ob3 from "@/assets/images/secondnavbar_sports_ob3.webp";
import secondnavbar_btn from "@/assets/images/secondnavbar_btn.webp";
import { motion } from "framer-motion";

const NavMenuTwo = () => {
  const boxes = [
    {
      mainImage: secondnavbar_sports_image1,
      sideImage: secondnavbar_sports_ob1,
      btnImage: secondnavbar_btn,
    },
    {
      mainImage: secondnavbar_sports_image2,
      sideImage: secondnavbar_sports_ob2,
      btnImage: secondnavbar_btn,
    },
    {
      mainImage: secondnavbar_sports_image3,
      sideImage: secondnavbar_sports_ob3,
      btnImage: secondnavbar_btn,
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      className="container mx-auto overflow-hidden h-full"
    >
      <div className="flex items-center justify-between">
        <div className="basis-3/4 flex space-x-5">
          {boxes.map((box, i) => (
            <div
              key={i}
              className="flex items-center justify-center space-x-2 cursor-pointer hover:bg-lighter"
            >
              <div>
                <img src={box.mainImage} className="w-full" alt="" />
              </div>
              {box.sideImage && (
                <div className="flex flex-col justify-center space-y-2">
                  <img src={box.sideImage} className="w-full" alt="" />
                  <img src={box.btnImage} className="w-2/3 mx-auto" alt="" />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="basis-1/4 flex items-center justify-center h-full cursor-pointer">
          <img src={secondnavbar_sports_image4} className="h-[300px]" alt="" />
        </div>
      </div>
    </motion.div>
  );
};

export default NavMenuTwo;
