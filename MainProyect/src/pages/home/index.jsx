import SliderSec from "../../components/HomeSec/slidersec";
import Cars from "../../components/HomeSec/cars";
import Advandec from "../../components/HomeSec/advancedsec";
import Partnyor from "../../components/HomeSec/partnyorsec";
import QuestionSec from "../../components/HomeSec/questionSec";
import Delivery from "../../components/HomeSec/deliverySec";
import HomeAbout from "../../components/HomeSec/homeabout";
function Home() {
  return (
    <div className="mx-auto">
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
