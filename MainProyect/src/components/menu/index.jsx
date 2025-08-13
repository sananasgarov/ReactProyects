import React, { useState } from "react";
import icon from "../../assets/img/icon.png";
import menubg from "../../assets/img/menubg.png";
import menubg2 from "../../assets/img/menubg2.jpg";
import { Link } from "react-router-dom";
function Menu({ setIsOpen, setAnim, anim, isOpen }) {
  function closeMenu(params) {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  }
  return (
    <div
      className={`fixed inset-0 z-[101] grid lg:grid-cols-2 bg-[#F3F3F3]
        ${isOpen ? "animate-slideInRight" : "animate-slideOutRight"}`}
    >
      <div
        className="flex-col md:hidden sm:hidden lg:flex max-w-[1320px] mx-auto justify-center p-8"
        id="my-element3"
      >
        <img src={icon} alt="AFN Rent A Car" className="w-50 object-contain" />
        <div className="opacity-10">
          <img src={menubg} alt="" className="w-130 object-contain" />
        </div>
        <div className="flex flex-col gap-4 text-[#282828] max-w-[250px]">
          <div className="hover:text-primary transiton-all flex items-center gap-2 duration-300">
            <svg
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current"
            >
              <path d="M7.00001 0.125C5.35957 0.126935 3.78688 0.779452 2.62692 1.93941C1.46696 3.09938 0.814442 4.67207 0.812507 6.3125C0.810542 7.65306 1.24843 8.95725 2.05901 10.025C2.05901 10.025 2.22776 10.2472 2.25532 10.2793L7.00001 15.875L11.7469 10.2764C11.7717 10.2466 11.941 10.025 11.941 10.025L11.9416 10.0233C12.7517 8.95603 13.1894 7.65245 13.1875 6.3125C13.1856 4.67207 12.5331 3.09938 11.3731 1.93941C10.2131 0.779452 8.64044 0.126935 7.00001 0.125ZM7.00001 8.5625C6.555 8.5625 6.11998 8.43054 5.74997 8.18331C5.37996 7.93607 5.09157 7.58467 4.92128 7.17354C4.75098 6.7624 4.70642 6.31 4.79324 5.87355C4.88006 5.43709 5.09435 5.03618 5.40902 4.72151C5.72368 4.40684 6.1246 4.19255 6.56105 4.10573C6.99751 4.01892 7.44991 4.06347 7.86104 4.23377C8.27218 4.40407 8.62358 4.69246 8.87081 5.06247C9.11805 5.43248 9.25001 5.86749 9.25001 6.3125C9.24926 6.90901 9.01197 7.48087 8.59017 7.90267C8.16838 8.32446 7.59652 8.56176 7.00001 8.5625Z" />
            </svg>
            <a href="#!">
              <p>Bakı ş., Xocalı pr.13</p>
            </a>
          </div>
          <div className="hover:text-primary transiton-all flex items-center gap-2 duration-300">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current"
            >
              <path d="M6.76442 9.17322C7.69219 10.1144 8.81477 10.841 10.0533 11.3021L11.7289 9.96877C11.7785 9.93456 11.8374 9.91625 11.8978 9.91625C11.9581 9.91625 12.017 9.93456 12.0666 9.96877L15.1778 11.9732C15.2959 12.0442 15.3958 12.1417 15.4698 12.258C15.5438 12.3743 15.5897 12.5062 15.6039 12.6433C15.6181 12.7803 15.6003 12.9189 15.5518 13.0479C15.5033 13.1768 15.4254 13.2928 15.3244 13.3865L13.8666 14.8266C13.6579 15.0328 13.4013 15.1842 13.1198 15.2672C12.8383 15.3502 12.5406 15.3622 12.2533 15.3021C9.38763 14.7102 6.74626 13.3241 4.63109 11.3021C2.56286 9.25999 1.13165 6.66159 0.511088 3.82211C0.449784 3.53928 0.462579 3.24541 0.548233 2.96898C0.633887 2.69256 0.789495 2.44294 0.999977 2.24433L2.51109 0.786551C2.6046 0.690456 2.71864 0.616762 2.84467 0.570985C2.97069 0.525209 3.10544 0.508537 3.23883 0.522217C3.37221 0.535897 3.50077 0.579576 3.61488 0.649982C3.72899 0.720388 3.8257 0.815697 3.89776 0.928773L5.96887 3.99988C6.00459 4.04811 6.02387 4.10654 6.02387 4.16655C6.02387 4.22657 6.00459 4.28499 5.96887 4.33322L4.60442 5.97322C5.07801 7.18697 5.81586 8.28007 6.76442 9.17322Z" />
            </svg>

            <a href="tel:+994503949194">(+994) 50 394 91 94</a>
          </div>
          <div className="hover:text-primary transiton-all flex items-center gap-2 duration-300">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current"
            >
              <path d="M6.76442 9.17322C7.69219 10.1144 8.81477 10.841 10.0533 11.3021L11.7289 9.96877C11.7785 9.93456 11.8374 9.91625 11.8978 9.91625C11.9581 9.91625 12.017 9.93456 12.0666 9.96877L15.1778 11.9732C15.2959 12.0442 15.3958 12.1417 15.4698 12.258C15.5438 12.3743 15.5897 12.5062 15.6039 12.6433C15.6181 12.7803 15.6003 12.9189 15.5518 13.0479C15.5033 13.1768 15.4254 13.2928 15.3244 13.3865L13.8666 14.8266C13.6579 15.0328 13.4013 15.1842 13.1198 15.2672C12.8383 15.3502 12.5406 15.3622 12.2533 15.3021C9.38763 14.7102 6.74626 13.3241 4.63109 11.3021C2.56286 9.25999 1.13165 6.66159 0.511088 3.82211C0.449784 3.53928 0.462579 3.24541 0.548233 2.96898C0.633887 2.69256 0.789495 2.44294 0.999977 2.24433L2.51109 0.786551C2.6046 0.690456 2.71864 0.616762 2.84467 0.570985C2.97069 0.525209 3.10544 0.508537 3.23883 0.522217C3.37221 0.535897 3.50077 0.579576 3.61488 0.649982C3.72899 0.720388 3.8257 0.815697 3.89776 0.928773L5.96887 3.99988C6.00459 4.04811 6.02387 4.10654 6.02387 4.16655C6.02387 4.22657 6.00459 4.28499 5.96887 4.33322L4.60442 5.97322C5.07801 7.18697 5.81586 8.28007 6.76442 9.17322Z" />
            </svg>

            <a href="tel:+994124901164">(+994) 12 490 11 64</a>
          </div>
          <div className="hover:text-primary transiton-all flex items-center gap-2 duration-300">
            <svg
              width="16"
              height="10"
              viewBox="0 0 16 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current"
            >
              <path d="M1.25919 1.22875L7.25919 4.45195C7.46079 4.55995 7.72159 4.61115 7.98399 4.61115C8.24639 4.61115 8.50719 4.55995 8.70879 4.45195L14.7088 1.22875C15.1 1.01835 15.4696 0.199951 14.752 0.199951H1.21679C0.499189 0.199951 0.868789 1.01835 1.25919 1.22875ZM14.8904 2.99115L8.70879 6.21275C8.43679 6.35515 8.24639 6.37195 7.98399 6.37195C7.72159 6.37195 7.53119 6.35515 7.25919 6.21275C6.98719 6.07035 1.55279 3.22155 1.10879 2.99035C0.796789 2.82715 0.799989 3.01835 0.799989 3.16555V8.99995C0.799989 9.33595 1.25279 9.79995 1.59999 9.79995H14.4C14.7472 9.79995 15.2 9.33595 15.2 8.99995V3.16635C15.2 3.01915 15.2032 2.82795 14.8904 2.99115Z" />
            </svg>

            <a href="mailto:info@afn.az">info@afn.az</a>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col justify-center items-start px-12 py-8 text-white">
        <div className="absolute inset-0 bg-[#282828] z-[1] opacity-70"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${menubg2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <button
          onClick={closeMenu}
          className="absolute cursor-pointer top-8 right-23 z-[1000] text-2xl font-bold"
        >
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_229_16738)">
              <path
                d="M30 8.4L27.6 6L18 15.6L8.4 6L6 8.4L15.6 18L6 27.6L8.4 30L18 20.4L27.6 30L30 27.6L20.4 18L30 8.4Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_229_16738">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(6 6)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
        <div className="flex gap-8 mb-12 z-10 text-lg font-semibold">
          <span className="border-b-2 border-orange-500">AZ</span>
          <span>EN</span>
          <span>RU</span>
        </div>
        <ul className="flex flex-col gap-6 text-3xl font-bold z-10">
          <li className="hover:text-orange-500 transition-colors">
            <Link to="/" onClick={closeMenu}>
              Əsas səhifə
            </Link>
          </li>
          <li className="hover:text-orange-500 transition-colors">
            <Link to="/allproducts" onClick={closeMenu}>
              İcarə maşınlar
            </Link>
          </li>
          <li className="hover:text-orange-500 transition-colors">
            <Link to="/aboutus" onClick={closeMenu}>
              Şirkət haqqında
            </Link>
          </li>
          <li className="hover:text-orange-500 transition-colors">
            <Link to="/policy" onClick={closeMenu}>
              Şərtlər
            </Link>
          </li>
          <li className="hover:text-orange-500 transition-colors">
            <Link to="/contact" onClick={closeMenu}>
              Əlaqə
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
