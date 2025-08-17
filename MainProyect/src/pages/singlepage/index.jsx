import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Other from "../../components/singlepage/other";
import { singleCar } from "../../services";
import Breadcrumb from "../../components/singlepage/breadcrumb";
import SliderSinglePage from "../../components/singlepage/slider";
import FeauterSinglePage from "../../components/singlepage/feauter";
function SinglePage() {
  const [hidden, setHidden] = useState("hidden");
  const [showfeauter, setShowFeauter] = useState("block");
  const [textcolor, setTextColor] = useState("text-black");
  const [feutercolor, setFeuterColor] = useState(
    "text-primary font-semibold border-b-2 border-primary"
  );
  const { id } = useParams();
  const [carData, setCarData] = useState(null);
  useEffect(() => {
    async function fetchCarData() {
      try {
        const data = await singleCar(id);
        setCarData(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchCarData();
  }, [id]);
  return (
    <div
      className="mx-auto w-[80%] max-w-[1320px] lg:p-[30px] sm:p-[15px]"
      id="singlepage"
    >
      <Breadcrumb />
      <br />
      <br />
      <SliderSinglePage carData={carData} />
      <br />
      <FeauterSinglePage
        carData={carData}
        hidden={hidden}
        showfeauter={showfeauter}
        textcolor={textcolor}
        feutercolor={feutercolor}
        setHidden={setHidden}
        setShowFeauter={setShowFeauter}
        setTextColor={setTextColor}
        setFeuterColor={setFeuterColor}
      />
      <div className="p-[30px]">
        <div className="flex flex-col justify-center items-center gap-[10px] mb-[50px]">
          <h2 className="text-black text-[36px]">Digər avtomobillər</h2>
          <svg
            width="55"
            height="4"
            viewBox="0 0 55 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="55" height="4" rx="2" fill="#F36F20" />
          </svg>
        </div>
        <Other />
      </div>
    </div>
  );
}

export default SinglePage;
