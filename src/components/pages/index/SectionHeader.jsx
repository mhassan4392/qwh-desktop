import home_download_title from "@/assets/images/home_download_title.webp";
import style_title_left from "@/assets/images/style_title_left.webp";
import style_title_right from "@/assets/images/style_title_right.webp";

const AppDownload = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <img src={home_download_title} className="w-72" alt="" />
      </div>
      <div className="flex items-center justify-between my-2">
        <div className="basis-[40%]">
          <img src={style_title_left} className="w-full" alt="" />
        </div>
        <div className="basis-[20%] text-3xl font-bold text-center">
          APP下载
        </div>
        <div className="basis-[40%]">
          <img src={style_title_right} className="w-full" alt="" />
        </div>
      </div>
      <p className="text-center text-sm">独家原生APP支持全部移动端</p>
    </>
  );
};

export default AppDownload;
