import React from "react";
import { Link } from "react-router";

function Footer() {
  return (
    <div className=" bg-[#070707]">
      <div className="grid lg:grid-cols-4 px-[30px] py-[50px]  md:grid-cols-2 max-w-[1320px] mx-auto sm:grid-cols-1 gap-[30px] justify-center">
        <div>
          <h2 className="text-[24px]">LOGO</h2>
          <br />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>
          <br />
          <a href="#!" className="hover:text-[#E87D0E] transition-all duration-300">@Logo</a>
        </div>
        <div>
          <ul>
            <li className="text-[24px] font-bold">
              <Link to="/about">
                <button className="hover:text-[#E87D0E] transition-all cursor-pointer duration-300">
                  About us
                </button>
              </Link>
            </li>
            <br />
            <li>
              <Link to="/">
                <button className=" hover:text-[#E87D0E] transition-all cursor-pointer duration-300">
                  Zeux
                </button>
              </Link>
            </li>
            <li>
              <Link to="/">
                <button className=" hover:text-[#E87D0E] transition-all cursor-pointer duration-300">
                  Portfolio
                </button>
              </Link>
            </li>
            <li>
              <Link to="/">
                <button className=" hover:text-[#E87D0E] transition-all cursor-pointer duration-300">
                  Careers
                </button>
              </Link>
            </li>
            <li>
              <Link to="/">
                <button className=" hover:text-[#E87D0E] cursor-pointer transition-all duration-300">
                  Contact us
                </button>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-[24px] font-bold">Contact us</h2>
          <br />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>
          <br />
          <a href="tel:+90889097890" className="hover:text-[#E87D0E] transition-all duration-300">+908 89097 890</a>
        </div>
        <div className="flex justify-center gap-[20px] items-center">
          <div>
            <a
              href="#!"
              className="bg-white rounded-[50%] flex hover:scale-120 transition-all duration-300 items-center justify-center p-[10px] h-auto"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.99924 1.9925H9.09474V0.0845C8.90574 0.0585 8.25574 0 7.49874 0C5.91924 0 4.83724 0.9935 4.83724 2.8195V4.5H3.09424V6.633H4.83724V12H6.97424V6.6335H8.64674L8.91224 4.5005H6.97374V3.031C6.97424 2.4145 7.14024 1.9925 7.99924 1.9925Z"
                  fill="black"
                />
              </svg>
            </a>
          </div>
          <div>
            <a
              href="#!"
              className="bg-white rounded-[50%] flex items-center hover:scale-120 transition-all duration-300 justify-center p-[10px] h-auto"
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_311)">
                  <path
                    d="M9.48173 0H3.51971C1.57931 0 0.000732422 1.57858 0.000732422 3.51898V9.4811C0.000732422 11.4214 1.57931 13 3.51971 13H9.48183C11.4221 13 13.0007 11.4214 13.0007 9.4811V3.51898C13.0007 1.57858 11.4221 0 9.48173 0V0ZM12.2386 9.4811C12.2386 11.0012 11.0019 12.2379 9.48173 12.2379H3.51971C1.99955 12.2379 0.762847 11.0012 0.762847 9.4811V3.51898C0.762847 1.99881 1.99955 0.762114 3.51971 0.762114H9.48183C11.0019 0.762114 12.2386 1.99881 12.2386 3.51898V9.4811Z"
                    fill="black"
                  />
                  <path
                    d="M6.50063 2.94531C4.54059 2.94531 2.94604 4.53986 2.94604 6.49989C2.94604 8.45993 4.54059 10.0545 6.50063 10.0545C8.46066 10.0545 10.0552 8.45993 10.0552 6.49989C10.0552 4.53986 8.46066 2.94531 6.50063 2.94531ZM6.50063 9.29236C4.96093 9.29236 3.70816 8.03969 3.70816 6.49989C3.70816 4.96019 4.96093 3.70743 6.50063 3.70743C8.04043 3.70743 9.29309 4.96019 9.29309 6.49989C9.29309 8.03969 8.04043 9.29236 6.50063 9.29236Z"
                    fill="black"
                  />
                  <path
                    d="M10.1402 1.68311C9.56096 1.68311 9.08984 2.15432 9.08984 2.73344C9.08984 3.31266 9.56096 3.78388 10.1402 3.78388C10.7194 3.78388 11.1906 3.31266 11.1906 2.73344C11.1906 2.15422 10.7194 1.68311 10.1402 1.68311ZM10.1402 3.02166C9.98129 3.02166 9.85196 2.89233 9.85196 2.73344C9.85196 2.57445 9.98129 2.44522 10.1402 2.44522C10.2992 2.44522 10.4285 2.57445 10.4285 2.73344C10.4285 2.89233 10.2992 3.02166 10.1402 3.02166Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_311">
                    <rect
                      width="13"
                      height="13"
                      fill="white"
                      transform="translate(0.000732422)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
          <div>
            <a
              href="#!"
              className="bg-white rounded-[50%] flex items-center hover:scale-120 transition-all duration-300 justify-center p-[10px] h-auto"
            >
              <svg
                width="13"
                height="11"
                viewBox="0 0 13 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.0007 1.46919C12.5173 1.68125 12.0022 1.82181 11.4651 1.89006C12.0176 1.56019 12.4393 1.04181 12.6375 0.417C12.1224 0.724125 11.5537 0.941063 10.9475 1.06213C10.4584 0.541313 9.76129 0.21875 9.00079 0.21875C7.52529 0.21875 6.33742 1.41638 6.33742 2.88456C6.33742 3.09581 6.35529 3.29894 6.39917 3.49231C4.18348 3.38425 2.22292 2.32231 0.905857 0.704625C0.67592 1.10356 0.541045 1.56019 0.541045 2.05175C0.541045 2.97475 1.01636 3.79294 1.72486 4.26662C1.29667 4.2585 0.876607 4.13419 0.520732 3.93837C0.520732 3.9465 0.520732 3.95706 0.520732 3.96762C0.520732 5.26275 1.44454 6.3385 2.65598 6.58631C2.43904 6.64563 2.20261 6.67406 1.95723 6.67406C1.78661 6.67406 1.61436 6.66431 1.45267 6.62856C1.79798 7.684 2.77786 8.45994 3.94298 8.48512C3.03623 9.19444 1.88492 9.62181 0.638545 9.62181C0.419982 9.62181 0.210357 9.61206 0.000732422 9.58525C1.18129 10.3466 2.58042 10.7812 4.08923 10.7812C8.99348 10.7812 11.6747 6.71875 11.6747 3.19737C11.6747 3.07956 11.6707 2.96581 11.665 2.85287C12.1939 2.4775 12.6384 2.00869 13.0007 1.46919Z"
                  fill="black"
                />
              </svg>
            </a>
          </div>
          <div>
            <a
              href="#!"
              className="bg-white rounded-[50%] flex items-center hover:scale-120 transition-all duration-300 justify-center p-[10px] h-auto"
            >
              <svg
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_325)">
                  <path
                    d="M10.9981 11V10.9996H11.0008V6.96531C11.0008 4.99173 10.5759 3.47144 8.26869 3.47144C7.15952 3.47144 6.41519 4.0801 6.11131 4.65714H6.07923V3.65569H3.8916V10.9996H6.16952V7.36314C6.16952 6.40569 6.35102 5.47985 7.53673 5.47985C8.70502 5.47985 8.72244 6.57252 8.72244 7.42456V11H10.9981Z"
                    fill="black"
                  />
                  <path
                    d="M0.182129 3.65601H2.4628V10.9999H0.182129V3.65601Z"
                    fill="black"
                  />
                  <path
                    d="M1.32165 0C0.592441 0 0.000732422 0.591708 0.000732422 1.32092C0.000732422 2.05013 0.592441 2.65421 1.32165 2.65421C2.05086 2.65421 2.64257 2.05013 2.64257 1.32092C2.64211 0.591708 2.0504 0 1.32165 0V0Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_325">
                    <rect
                      width="11"
                      height="11"
                      fill="white"
                      transform="translate(0.000732422)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <hr className="text-[#D2D2D2]" />
      <div className="p-[20px]">
        <p className="text-center text-[#AFAFAF] text-[12px]">
          Copyright ® 2021 Lorem All rights Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
