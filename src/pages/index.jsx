import AppDownload from "../components/pages/index/AppDownload";
import Banner from "../components/pages/index/Banner";
import QualityServices from "../components/pages/index/QualityServices";
import ShowcaseSlider from "../components/pages/index/ShowcaseSlider";

const Index = () => {
  return (
    <div>
      <ShowcaseSlider />
      <Banner />
      <AppDownload />
      <QualityServices />
    </div>
  );
};

export default Index;
