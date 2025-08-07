import SliderSec from "../../components/HomeSec/slidersec";
import HomeAbout from "../../components/HomeSec/HomeAbout";
import Cars from "../../components/HomeSec/cars";
import Advandec from "../../components/HomeSec/advancedsec";
import Partnyor from "../../components/HomeSec/partnyorsec";
import QuestionSec from "../../components/HomeSec/questionSec";
import Delivery from "../../components/HomeSec/deliverySec";
function Home() {
  return (
    <div className="max-w-[1440xp] mx-auto">
      <SliderSec />
      <HomeAbout />
      <Cars />
      <Advandec />
      <Partnyor />
      <QuestionSec />
      <Delivery />
    </div>
  );
}

export default Home;
