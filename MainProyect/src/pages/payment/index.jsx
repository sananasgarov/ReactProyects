import { Link } from "react-router-dom";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function PayMentSec() {
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("text");
  const [adate, setAdate] = useState(null);
  const [vdate, setVdate] = useState(null);
  return (
    <div className="bg-[#282828]">
      <div className="mx-auto max-w-[1320px] w-[60%]  text-white p-[30px]">
        <Link to="/allproducts">
          <div className="flex justify-start items-center gap-2 mb-4">
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.75 7.75001H3.925L8.4625 2.30001C8.67467 2.04474 8.77675 1.71564 8.74628 1.3851C8.7158 1.05457 8.55527 0.749682 8.3 0.537509C8.04473 0.325336 7.71563 0.223258 7.3851 0.253733C7.05456 0.284208 6.74967 0.444738 6.5375 0.700009L0.2875 8.20001C0.245451 8.25966 0.207849 8.32233 0.175 8.38751C0.175 8.45001 0.175 8.48751 0.0875002 8.55001C0.0308421 8.69333 0.0011764 8.8459 0 9.00001C0.0011764 9.15412 0.0308421 9.30668 0.0875002 9.45001C0.0875002 9.51251 0.0874998 9.55001 0.175 9.61251C0.207849 9.67768 0.245451 9.74035 0.2875 9.80001L6.5375 17.3C6.65503 17.4411 6.8022 17.5546 6.96856 17.6324C7.13491 17.7101 7.31636 17.7503 7.5 17.75C7.79207 17.7506 8.07511 17.6489 8.3 17.4625C8.42657 17.3576 8.5312 17.2287 8.60789 17.0833C8.68458 16.9378 8.73183 16.7787 8.74692 16.615C8.76202 16.4513 8.74466 16.2862 8.69586 16.1292C8.64705 15.9722 8.56775 15.8263 8.4625 15.7L3.925 10.25H18.75C19.0815 10.25 19.3995 10.1183 19.6339 9.88389C19.8683 9.64947 20 9.33153 20 9.00001C20 8.66849 19.8683 8.35054 19.6339 8.11612C19.3995 7.8817 19.0815 7.75001 18.75 7.75001Z"
                fill="white"
              />
            </svg>
            <p className="text-white">Geri qayıt</p>
          </div>
        </Link>
        <div className="text-white flex flex-col items-center gap-4 mb-8">
          <div>
            <p className="text-[36px] font-bold">Onlayn avtomobil icarəsi</p>
          </div>
          <div>
            <p className="text-[20px]">
              Bir neçə kliklə Bakıda asan və sadə onlayn icarə avtomobil
              sifarişi
            </p>
          </div>
        </div>
        <div className="bg-[#FFFFFF] p-[20px] rounded-lg">
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
            <select
              name="brand"
              id="brand"
              className="border border-[#C4C4C4] rounded-md  text-[#979797] px-[13px] py-[10px] text-[16px]"
            >
              <option value="Marka" selected>
                Marka
              </option>
            </select>
            <select
              name="model"
              id="model"
              className="border border-[#C4C4C4] rounded-md  text-[#979797] px-[13px] py-[10px] text-[16px]"
            >
              <option value="Model" selected>
                Model
              </option>
            </select>
          </div>
          <br />
          <div>
            <h2 className="text-[#282828] font-bold text-[24px]">Çatdırılma</h2>
            <div className="lg:grid-cols-2 grid sm:grid-cols-1 gap-4">
              <div className="flex flex-col gap-4 items-start justify-center">
                <div>
                  <select
                    name="city"
                    id="city"
                    className="border  border-[#C4C4C4] rounded-md lg:w-[350px] md:w-[250px] sm:w-[180px]  focus:outline-0 text-[#979797] placeholder:text-[#979797] px-[13px] py-[10px] text-[16px]"
                  >
                    <option value="City" selected>
                      City
                    </option>
                  </select>
                </div>
                <div>
                  <DatePicker
                    selected={adate}
                    onChange={(d) => setAdate(d)}
                    placeholderText="Təhvil verme tarixi"
                    dateFormat="dd/MM/yyyy"
                    className="border border-[#C4C4C4] placeholder:text-[#979797] rounded-md lg:w-[350px] md:w-[250px] sm:w-[180px]  text-[#979797] px-[13px] py-[10px] text-[16px] w-64 focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="border border-[#C4C4C4] rounded-md lg:w-[350px] md:w-[250px] sm:w-[180px]   text-primary focus:outline-0 placeholder:text-[#979797] px-[13px] py-[10px] text-[16px]"
                    placeholder="*Adınız və Soyadınız"
                    required
                  />
                </div>
                <div>
                  <PhoneInput
                    country={"az"}
                    value={phone}
                    onChange={setPhone}
                    inputClass="border border-[#C4C4C4] rounded-md text-primary focus:outline-0 placeholder:text-[#979797] px-[13px] py-[10px] text-[16px]"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    className="border border-[#C4C4C4] rounded-md  lg:w-[350px] md:w-[250px] sm:w-[180px]  text-primary focus:outline-0 placeholder:text-[#979797] px-[13px] py-[10px] text-[16px]"
                    placeholder="*Email"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4 items-start ">
                <div>
                  <input
                    type="text"
                    className="border border-[#C4C4C4] rounded-md lg:w-[350px] md:w-[250px] sm:w-[180px]   text-primary focus:outline-0 placeholder:text-[#979797] px-[13px] py-[10px] text-[16px]"
                    placeholder="*Ünvan"
                    required
                  />
                </div>
                <div className="relative">
                  <DatePicker
                    selected={vdate}
                    onChange={(d) => setVdate(d)}
                    placeholderText="Təhvil alma tarixi"
                    dateFormat="dd/MM/yyyy"
                    className="border border-[#C4C4C4] rounded-md lg:w-[350px] md:w-[250px] sm:w-[180px] placeholder:text-[#979797]  text-[#979797] px-[13px] py-[10px] text-[16px] w-64 focus:outline-none"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Əlavə qeydləriniz"
                    className="w-full h-32 border border-gray-300 lg:w-[350px] md:w-[250px] sm:w-[180px]  rounded-lg p-3 text-primary placeholder:text-gray-400 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
          <br />
          <div>
            <h2 className="text-[#282828] text-[24px] font-bold">
              Əlavə xidmətlər
            </h2>
            <br />
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
              <div className="flex items-center gap-4">
                <input
                  type="checkbox"
                  id="childseat"
                  className="w-5 border-[#979797] h-5 accent-primary"
                />
                <span className="text-[#282828] text-[20px]">
                  Uşaq oturacağı (10 AZN/gün)
                </span>
              </div>
              <div className="flex items-center gap-4">
                <input
                  type="checkbox"
                  id="privatedriver"
                  className="w-5 border-[#979797] h-5 accent-primary"
                />
                <span className="text-[#282828] text-[20px]">
                  Şəxsi sürücü (30 AZN/gün)
                </span>
              </div>
            </div>
          </div>
          <br />
          <hr className="text-[#E3E3E3]" />
          <br />
          <div>
            <h2 className="text-[#282828] text-[24px] font-bold">
              Ödəniş növünü seçin
            </h2>
            <br />
            <div>
              <div className="flex items-center gap-4">
                <input
                  type="radio"
                  id="onlinepay"
                  name="payment"
                  className="w-5 h-5 accent-amber-500"
                />
                <span className="text-[#282828] text-[20px]">
                  Onlayn ödəniş (Visa, Master Card)
                </span>
              </div>
              <div className="flex items-center gap-4">
                <input
                  type="radio"
                  id="cashpay"
                  name="payment"
                  className="w-5 h-5 accent-amber-500"
                />
                <span className="text-[#282828] text-[20px]">Nağd ödəniş</span>
              </div>
              <div className="flex items-center gap-4">
                <input
                  type="radio"
                  id="postterminal"
                  name="payment"
                  className="w-5 h-5 accent-amber-500"
                />
                <span className="text-[#282828] text-[20px]">
                  POS terminal (Visa, Master card)
                </span>
              </div>
            </div>
          </div>
          <br />
          <hr className="text-[#E3E3E3]" />
          <br />
          <div className="text-[#282828] text-[20px]">
            <div className="flex items-center gap-[10px]">
              <div>
                <p>Avtomobilin icarə qiyməti (13 gün)</p>
              </div>
              <svg
                width="262"
                height="1"
                viewBox="0 0 262 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="2.18557e-08"
                  y1="0.75"
                  x2="262"
                  y2="0.750023"
                  stroke="#A6A6A6"
                  stroke-width="0.5"
                />
              </svg>

              <div>572 AZN</div>
            </div>
            <div>
              <div className="flex items-center gap-[10px]">
                <div>
                  <p>Uşaq oturacağı</p>
                </div>
                <svg
                  width="458"
                  height="1"
                  viewBox="0 0 458 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="2.18557e-08"
                    y1="0.75"
                    x2="458"
                    y2="0.75004"
                    stroke="#A6A6A6"
                    stroke-width="0.5"
                  />
                </svg>

                <div>130 AZN</div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-[10px]">
                <div>
                  <p>Şəxsi sürücü</p>
                </div>
                <svg
                  width="490"
                  height="1"
                  viewBox="0 0 490 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="2.18557e-08"
                    y1="0.75"
                    x2="490"
                    y2="0.750043"
                    stroke="#A6A6A6"
                    stroke-width="0.5"
                  />
                </svg>

                <div>390 AZN</div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-[10px]">
                <div>
                  <p className="font-bold">Cari Qiymet</p>
                </div>
                <svg
                  width="262"
                  height="1"
                  viewBox="0 0 262 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="2.18557e-08"
                    y1="0.75"
                    x2="262"
                    y2="0.750023"
                    stroke="#A6A6A6"
                    stroke-width="0.5"
                  />
                </svg>

                <div>
                  <p className="text-primary font-bold">
                    572 + 50 + 30 = 652 AZN
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="flex justify-center items-center">
            <Link>
              <button className="bg-primary text-white rounded-md px-[80px] py-[10px] hover:opacity-80 cursor-pointer transition-all duration-300">Ödənişə davam et</button>
            </Link>
          </div>
          <br />
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default PayMentSec;
