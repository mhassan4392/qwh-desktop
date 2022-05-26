import AppDownload from "../components/pages/index/AppDownload";
import Banner from "../components/pages/index/Banner";
import QualityServices from "../components/pages/index/QualityServices";
import ShowcaseSlider from "../components/pages/index/ShowcaseSlider";
import TopGames from "../components/pages/index/TopGames";

const Index = () => {
  return (
    <div>
      <ShowcaseSlider />
      <Banner />
      <AppDownload />
      <QualityServices />
      <TopGames />
    </div>
  );
};

export default Index;
