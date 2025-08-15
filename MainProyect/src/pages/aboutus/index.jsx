import React from "react";
import singlepage1920 from "../../assets/img/single page image 1920.jpg";
import car1 from "../../assets/img/aboutcar1.jpg";
import car2 from "../../assets/img/aboutcar2.jpg";
import delivery from "../../assets/img/delivery.jpg";
import polciybg2 from "../../assets/img/policybg2.png";
import Maskgroupbg from "../../assets/img/Mask Group.png";

function About() {
  return (
    <div className="w-full">
      <div className="relative">
        <div className="p-4 sm:p-8 md:p-16 lg:p-24 xl:p-32">
          <div className="flex flex-col justify-center gap-5 items-center">
            <p className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
              Şirkət haqqında
            </p>
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
        </div>
        <div
          className="bg-cover bg-center absolute inset-0 z-[-1]"
          style={{ backgroundImage: `url(${singlepage1920})` }}
        ></div>
        <div className="bg-[#282828D9] absolute inset-0 z-[-1]"></div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 py-8 sm:py-12 px-4 sm:px-6 md:px-8">
        <div className="bg-white w-full max-w-[200px] sm:max-w-[220px] p-4 sm:p-5 rounded-md shadow-md text-center">
          <p className="text-3xl sm:text-4xl md:text-5xl text-primary">
            20+ il
          </p>
          <p className="text-gray-500 text-sm sm:text-base">təcrübə</p>
        </div>
        <div className="bg-white w-full max-w-[200px] sm:max-w-[220px] p-4 sm:p-5 rounded-md shadow-md text-center">
          <p className="text-3xl sm:text-4xl md:text-5xl text-primary">80+</p>
          <p className="text-gray-500 text-sm sm:text-base">icarə maşın</p>
        </div>
        <div className="bg-white w-full max-w-[200px] sm:max-w-[220px] p-4 sm:p-5 rounded-md shadow-md text-center">
          <p className="text-3xl sm:text-4xl md:text-5xl text-primary">98%</p>
          <p className="text-gray-500 text-sm sm:text-base">
            müştəri məmnuniyyəti
          </p>
        </div>
      </div>
      <div className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-16 relative flex flex-col gap-12 md:gap-16 lg:gap-24">
        <div
          className="bg-cover bg-center absolute inset-0 z-[-1]"
          style={{ backgroundImage: `url(${polciybg2})` }}
        ></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          <div
            className="img-wrapper1"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="false"
            data-aos-once="false"
          >
            <img src={car1} alt="Car 1" />
          </div>
          <div
            className="flex flex-col gap-4 sm:gap-5"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="false"
            data-aos-once="false"
          >
            <p className="text-lg sm:text-xl text-[#F36F20]">BİZ KİMİK?</p>
            <p className="text-black font-bold text-xl sm:text-2xl">
              AFN Transport və Nəqliyyat şirkəti Azərbaycanda öz nəqliyyat
              bazasına görə ilk sıralarda yerləşən şirkətlərdən biridir.
            </p>
            <p className="text-gray-600 text-sm sm:text-base">
              İstər xidmət səviyyəmiz, istərsə də yüksək keyfiyyətimizlə bir çox
              icarə maşın şirkətlərdən seçilir.
            </p>
            <p className="text-gray-600 text-sm sm:text-base">
              Şirkət bu növ icarə maşınlar ilə məşğuldur: minik maşınlar,
              mikroavtobus və avtobuslar (günlük, aylıq və uzunmüddətli).
            </p>
            <p className="text-gray-600 text-sm sm:text-base">
              Geniş avtoparkımız sizə Bakı və Azərbaycanda istənilən vaxt
              istənilən növ icarə maşın götürməyə imkan verir.
            </p>
            <p className="text-gray-600 text-sm sm:text-base">
              Şirkətin balansında son model sedan, suv, crossover, minivan, 4 –
              55 nəfər tutumlu komfortlu, geniş və təmiz icarə maşınlar yer
              almaqdadır.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          <div
            className="flex flex-col gap-4 sm:gap-5"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="false"
            data-aos-once="false"
          >
            <p className="text-lg sm:text-xl text-[#F36F20]">
              NİYƏ BİZİ SEÇMƏLİSİNİZ?
            </p>
            <p className="text-black font-bold text-xl sm:text-2xl">
              Şirkətimiz 10 ildən artıqdır ki, fəaliyyət göstərir.
            </p>
            <p className="text-gray-600 text-sm sm:text-base">
              Fəaliyyət göstərdiyimiz müddət ərzində bir çox dövlət qurumları,
              hökümət və qeyri-hökümət təşkilatları, çoxlu sayda şirkətlərlə
              əməkdaşlıq etmişik.
            </p>
            <p className="text-gray-600 text-sm sm:text-base">
              Nümunə olaraq bunlardan GEO Travel, Paşa Travel, Konsis, Conco,
              Socar AQŞ, Caspian Events, Balaxanı Sənaye Parkı və s. kimi
              tanınmış şirkətlərin adını çəkə bilərik.
            </p>
            <p className="text-gray-600 text-sm sm:text-base">
              Həmçinin bir çox dövlət tədbirlərinin də nəqliyyat işlərini təşkil
              etmişik. Bunlara misal olaraq, Eurovision (2012), Qəbələ Atıcılıq
              Klubu Dünya Kuboku (2014), Bakı Avropa oyunları (2015), İslam
              oyunları (2017), Cüdo Dünya Çempionatı (2018), UEFA (2019),
              International Business Forum (2021).
            </p>
            <p className="text-gray-600 text-sm sm:text-base">
              AFN Transporta məxsus bütün nəqliyyatlar mütəmadi olaraq
              (oturacaqlar, tutacaqlar, yük daşıma yerləri və s.) dezinfeksiya
              olunur.
            </p>
          </div>
          <div
            className="img-wrapper"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="false"
            data-aos-once="false"
          >
            <img src={car2} alt="Car 2" id="aboutcar2" />
          </div>
        </div>
      </div>
      <div className="bg-[#DFDFDF] ">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start max-w-[1320px] mx-auto">
          <div
            className="relative"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="false"
            data-aos-once="false"
          >
            <img
              src={delivery}
              alt="Delivery"
              className="w-full h-auto max-h-[460px] object-cover"
            />
          </div>
          <div
            className="py-6 sm:py-8 px-4 sm:px-6 md:px-8 relative flex flex-col gap-6 max-w-3xl mx-auto"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="false"
            data-aos-once="false"
          >
            <div
              className="absolute inset-0 bg-cover bg-center opacity-20 -z-10"
              style={{ backgroundImage: `url(${Maskgroupbg})` }}
            ></div>
            <div className="flex flex-col gap-2">
              <p className="text-2xl sm:text-3xl md:text-4xl text-black font-bold">
                Çatdırılma
              </p>
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
            <div className="text-sm sm:text-base md:text-lg text-[#282828] flex flex-col gap-4">
              <p>
                AFN Transport olaraq her Class”a uygun arenda avtomobil
                modellərimizi istənilən ünvana çatdırılma mövcuddur.
              </p>
              <p>
                AFN Transport tam 10 ildir ki müştərilərinə arenda masinlar ilə
                təmin edir.
              </p>
              <p>
                Keyfiyyetli avotomobil, avtobus ve mikroavtobuslarin icaresi
                ucun AFN Transport.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
