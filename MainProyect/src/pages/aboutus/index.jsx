import React from "react";
import singlepage1920 from "../../assets/img/single page image 1920.jpg";
import car1 from "../../assets/img/aboutcar1.jpg";
import car2 from "../../assets/img/aboutcar2.jpg";
import delivery from "../../assets/img/delivery.jpg";
import polciybg2 from "../../assets/img/policybg2.png";
function About() {
  return (
    <div>
      <div>
        <div className="relative p-[100px]">
          <div className="flex flex-col justify-center gap-[20px] items-center ">
            <p className="text-[white] text-[36px] font-bold">
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
          <div
            className="bg-cover bg-center absolute inset-0 z-[-1]"
            style={{ backgroundImage: `url(${singlepage1920})` }}
          ></div>
          <div className="bg-cover bg-center absolute bg-[#282828D9] inset-0 z-[-1]"></div>
        </div>
        <div className="relative flex justify-center items-center">
          <div className="bg-white w-[250px] p-[20px] rounded-md absolute z-[2] left-80 shadow-md h-[130px]">
            <div className="flex flex-col justify-center items-center">
              <p className="text-[36px] text-primary">20+ il</p>
              <p className="text-[#707070]">təcrübə</p>
            </div>
          </div>
          <div className="bg-white w-[250px] p-[20px] rounded-md absolute z-[2] shadow-md h-[130px]">
            <div className="flex flex-col justify-center items-center">
              <p className="text-[36px] text-primary">80+</p>
              <p className="text-[#707070]">icarə maşın</p>
            </div>
          </div>
          <div className="bg-white w-[250px] p-[20px] rounded-md absolute z-[2] right-80 shadow-md h-[130px]">
            <div className="flex flex-col justify-center items-center">
              <p className="text-[36px] text-primary">98%</p>
              <p className="text-[#707070]">müştəri məmnuniyyəti</p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-[100px] px-[100px] relative flex flex-col gap-[120px]">
        <div
          className="bg-cover bg-center absolute inset-0 z-[-1]"
          style={{ backgroundImage: `url(${polciybg2})` }}
        ></div>
        <div className="grid lg:grid-cols-2 justify-center md:grid-cols-1">
          <div className="relative">
            <img
              src={car1}
              alt=""
              className="w-[450px] h-[440px] object-cover"
            />
            <div className="w-[347px] h-[436px] bg-[#282828] absolute left-[-20px] top-[-10px] z-[-1]"></div>
          </div>
          <div>
            <div className="flex flex-col gap-[20px]">
              <p className="text-[20px] text-[#F36F20]">BİZ KİMİK?</p>
              <p className="text-black font-bold text-[24px]">
                AFN Transport və Nəqliyyat şirkəti Azərbaycanda öz nəqliyyat
                bazasına görə ilk sıralarda yerləşən şirkətlərdən biridir.
              </p>
              <p className="text-[#707070]">
                İstər xidmət səviyyəmiz, istərsə də yüksək keyfiyyətimizlə bir
                çox icarə maşın şirkətlərdən seçilir.
              </p>
              <p className="text-[#707070]">
                Şirkət bu növ icarə maşınlar ilə məşğuldur: minik maşınlar,
                mikroavtobus və avtobuslar (günlük, aylıq və uzunmüddətli).
              </p>
              <p className="text-[#707070]">
                Geniş avtoparkımız sizə Bakı və Azərbaycanda istənilən vaxt
                istənilən növ icarə maşın götürməyə imkan verir.
              </p>
              <p className="text-[#707070]">
                Şirkətin balansında son model sedan, suv, crossover, minivan, 4
                – 55 nəfər tutumlu komfortlu, geniş və təmiz icarə maşınlar yer
                almaqdadır.
              </p>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-[100px]  md:grid-cols-1">
          <div>
            <div className="flex flex-col gap-[20px]">
              <p className="text-[20px] text-[#F36F20]">
                NİYƏ BİZİ SEÇMƏLİSİNİZ?
              </p>
              <p className="text-black font-bold text-[24px]">
                Şirkətimiz 10 ildən artıqdır ki, fəaliyyət göstərir.
              </p>
              <p className="text-[#707070]">
                Fəaliyyət göstərdiyimiz müddət ərzində bir çox dövlət qurumları,
                hökümət və qeyri-hökümət təşkilatları, çoxlu sayda şirkətlərlə
                əməkdaşlıq etmişik.
              </p>
              <p className="text-[#707070]">
                Nümunə olaraq bunlardan GEO Travel, Paşa Travel, Konsis, Conco,
                Socar AQŞ, Caspian Events, Balaxanı Sənaye Parkı və s. kimi
                tanınmış şirkətlərin adını çəkə bilərik.
              </p>
              <p className="text-[#707070]">
                Həmçinin bir çox dövlət tədbirlərinin də nəqliyyat işlərini
                təşkil etmişik. Bunlara misal olaraq, Eurovision (2012), Qəbələ
                Atıcılıq Klubu Dünya Kuboku (2014), Bakı Avropa oyunları (2015),
                İslam oyunları (2017), Cüdo Dünya Çempionatı (2018), UEFA
                (2019), International Business Forum (2021).
              </p>
              <p className="text-[#707070]">
                AFN Transporta məxsus bütün nəqliyyatlar mütəmadi olaraq
                (oturacaqlar, tutacaqlar, yük daşıma yerləri və s.) dezinfeksiya
                olunur.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src={car2}
              alt=""
              className="w-[400px] h-[440px] object-cover"
            />
            <div className="w-[347px] h-[436px] bg-[#F36F20] absolute left-20 bottom-[-10px] z-[-1]"></div>
          </div>
        </div>
      </div>
      <div className="bg-[#DFDFDF] grid lg:grid-cols-2 md:grid-cols-1 items-start justify-center ">
        <div>
          <img
            src={delivery}
            alt=""
            className="w-[650px] h-[460px] object-cover"
          />
        </div>
        <div className="py-[30px] flex flex-col gap-[30px]">
          <div className="flex flex-col gap-[10px]">
            <p className="text-[36px] text-black font-bold">Çatdırılma</p>
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
          <div className="text-[20px] text-[#282828] flex w-[600px] flex-col gap-[20px]">
            <p>
              AFN Transport olaraq her Class”a uygun arenda avtomobil
              modellərimizi istənilən ünvana çatdırılma mövcuddur.{" "}
            </p>
            <p>
              AFN Transport tam 10 ildir ki müştərilərinə arenda masinlar ilə
              təmin edir.
            </p>
            <p>
              Keyfiyyetli avotomobil, avtobus ve mikroavtobuslarin icaresi ucun
              AFN Transport.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
