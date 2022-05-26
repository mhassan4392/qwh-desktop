import style_title_left from "@/assets/images/style_title_left.webp";
import style_title_right from "@/assets/images/style_title_right.webp";

const AppDownload = ({ logo, title, subtitle }) => {
  return (
    <>
      <div className="flex items-center justify-center">
        <img src={logo} className="w-72" alt="" />
      </div>
      <div className="flex items-center justify-between my-2">
        <div className="basis-[40%]">
          <img src={style_title_left} className="w-full" alt="" />
        </div>
        <div className="basis-[20%] text-3xl font-bold text-center">
          {title}
        </div>
        <div className="basis-[40%]">
          <img src={style_title_right} className="w-full" alt="" />
        </div>
      </div>
      <p className="text-center text-sm">{subtitle}</p>
    </>
  );
};

export default AppDownload;
