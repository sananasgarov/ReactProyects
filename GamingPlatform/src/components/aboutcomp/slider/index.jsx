import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import { EffectCreative } from "swiper/modules";
import stray from "../../../assets/img/stray.jpg";
import lol from "../../../assets/img/lol.jpg";
import crysis from "../../../assets/img/crysis.jpg";
import forhonor from "../../../assets/img/forhonor.jpg";
function Slider() {
  return (
    <>
      <Swiper
        grabCursor={true}
        effect={"creative"}
        loop={true}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-120%", 0, -500],
          },
          next: {
            shadow: true,
            translate: ["120%", 0, -500],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper2"
      >
        <SwiperSlide className="flex items-center justify-center text-[18px] bg-inherit border border-[#DC7000] rounded-[10px]"><img src={stray} alt="" /></SwiperSlide>
        <SwiperSlide className="flex items-center justify-center text-[18px] bg-inherit border border-[#DC7000] rounded-[10px]"><img src={lol} alt="" /></SwiperSlide>
        <SwiperSlide className="flex items-center justify-center text-[18px] bg-inherit border border-[#DC7000] rounded-[10px]"><img src={crysis} alt="" /></SwiperSlide>
        <SwiperSlide className="flex items-center justify-center text-[18px] bg-inherit border border-[#DC7000] rounded-[10px]"><img src={forhonor} alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
export default Slider;
