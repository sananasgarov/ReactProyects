import React, { useEffect, useState } from "react";
import iconImg from "../../assets/img/iconwhite.png";
import bgİmg from "../../assets/img/slider bg.png";
import Menu from "../menu";
import { Link } from "react-router";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [fixed, setFixed] = useState(false);

  function openBtn() {
    setIsOpen(!isOpen);
    document.body.style.overflow = "hidden";
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full bg-[#282828] z-[999] transition-all duration-500
        ${
          fixed ? "fixed top-0 left-0 shadow-md animate-slideDown" : "relative"
        }`}
    >
      <div className="flex shadow-md flex-wrap max-w-[1320px] mx-auto justify-between items-center z-[100] w-[100%] p-[20px] text-[white]">
        <div>
          <Link to="/">
            <img
              src={iconImg}
              alt=""
              className="w-[142px] h-[62px] object-cover"
            />
          </Link>
        </div>
        <div
          className="flex-wrap lg:flex justify-between items-center gap-[30px]"
          id="navbarpriv"
        >
          <a
            href="https://www.google.com/maps/place/13A+Khojali+Avenue,+Baku+1025/@40.3827821,49.8647553,17z/data=!3m1!4b1!4m6!3m5!1s0x40307d1b07314051:0x4b062ef0dfc7c9ab!8m2!3d40.382778!4d49.8673302!16s%2Fg%2F11xkvpdxp6?entry=ttu&g_ep=EgoyMDI1MDgwMy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
          >
            <div className="flex justify-between hover:text-primary transition-all duration-300 items-center gap-[5px]">
              <svg
                width="14"
                height="16"
                viewBox="0 0 14 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block fill-current"
              >
                <path d="M7.00001 0.125C5.35957 0.126935 3.78688 0.779452 2.62692 1.93941C1.46696 3.09938 0.814442 4.67207 0.812507 6.3125C0.810542 7.65306 1.24843 8.95725 2.05901 10.025C2.05901 10.025 2.22776 10.2472 2.25532 10.2793L7.00001 15.875L11.7469 10.2764C11.7717 10.2466 11.941 10.025 11.941 10.025L11.9416 10.0233C12.7517 8.95603 13.1894 7.65245 13.1875 6.3125C13.1856 4.67207 12.5331 3.09938 11.3731 1.93941C10.2131 0.779452 8.64044 0.126935 7.00001 0.125ZM7.00001 8.5625C6.555 8.5625 6.11998 8.43054 5.74997 8.18331C5.37996 7.93607 5.09157 7.58467 4.92128 7.17354C4.75098 6.7624 4.70642 6.31 4.79324 5.87355C4.88006 5.43709 5.09435 5.03618 5.40902 4.72151C5.72368 4.40684 6.1246 4.19255 6.56105 4.10573C6.99751 4.01892 7.44991 4.06347 7.86104 4.23377C8.27218 4.40407 8.62358 4.69246 8.87081 5.06247C9.11805 5.43248 9.25001 5.86749 9.25001 6.3125C9.24926 6.90901 9.01197 7.48087 8.59017 7.90267C8.16838 8.32446 7.59652 8.56176 7.00001 8.5625Z" />
              </svg>
              <span>Bakı ş., Xocalı pr.13</span>
            </div>
          </a>
          <a href="tel:+994503949194" target="_blank">
            <div className="flex justify-between hover:text-primary transition-all duration-300 items-center gap-[5px]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current"
              >
                <path d="M6.76448 9.17334C7.69225 10.1145 8.81483 10.8412 10.0534 11.3022L11.7289 9.96889C11.7786 9.93468 11.8375 9.91637 11.8978 9.91637C11.9581 9.91637 12.017 9.93468 12.0667 9.96889L15.1778 11.9733C15.2959 12.0443 15.3959 12.1418 15.4699 12.2581C15.5438 12.3744 15.5897 12.5063 15.6039 12.6434C15.6182 12.7805 15.6003 12.919 15.5518 13.048C15.5033 13.177 15.4255 13.2929 15.3245 13.3867L13.8667 14.8267C13.6579 15.033 13.4013 15.1843 13.1198 15.2673C12.8383 15.3503 12.5406 15.3623 12.2534 15.3022C9.38769 14.7104 6.74632 13.3242 4.63115 11.3022C2.56292 9.26012 1.13172 6.66172 0.511149 3.82223C0.449846 3.5394 0.46264 3.24553 0.548294 2.96911C0.633948 2.69268 0.789556 2.44306 1.00004 2.24445L2.51115 0.786673C2.60466 0.690578 2.7187 0.616884 2.84473 0.571107C2.97075 0.525331 3.1055 0.508659 3.23889 0.522339C3.37227 0.536019 3.50083 0.579698 3.61494 0.650104C3.72905 0.72051 3.82576 0.815819 3.89782 0.928895L5.96893 4.00001C6.00465 4.04823 6.02393 4.10666 6.02393 4.16667C6.02393 4.22669 6.00465 4.28511 5.96893 4.33334L4.60448 5.97334C5.07807 7.18709 5.81592 8.28019 6.76448 9.17334Z" />
              </svg>

              <span> (+994) 50 394 91 94</span>
            </div>
          </a>
          <a href="tel:+994124901164" target="_blank">
            <div className="flex justify-between hover:text-primary transition-all duration-300 items-center gap-[5px]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current"
              >
                <path d="M6.76448 9.17334C7.69225 10.1145 8.81483 10.8412 10.0534 11.3022L11.7289 9.96889C11.7786 9.93468 11.8375 9.91637 11.8978 9.91637C11.9581 9.91637 12.017 9.93468 12.0667 9.96889L15.1778 11.9733C15.2959 12.0443 15.3959 12.1418 15.4699 12.2581C15.5438 12.3744 15.5897 12.5063 15.6039 12.6434C15.6182 12.7805 15.6003 12.919 15.5518 13.048C15.5033 13.177 15.4255 13.2929 15.3245 13.3867L13.8667 14.8267C13.6579 15.033 13.4013 15.1843 13.1198 15.2673C12.8383 15.3503 12.5406 15.3623 12.2534 15.3022C9.38769 14.7104 6.74632 13.3242 4.63115 11.3022C2.56292 9.26012 1.13172 6.66172 0.511149 3.82223C0.449846 3.5394 0.46264 3.24553 0.548294 2.96911C0.633948 2.69268 0.789556 2.44306 1.00004 2.24445L2.51115 0.786673C2.60466 0.690578 2.7187 0.616884 2.84473 0.571107C2.97075 0.525331 3.1055 0.508659 3.23889 0.522339C3.37227 0.536019 3.50083 0.579698 3.61494 0.650104C3.72905 0.72051 3.82576 0.815819 3.89782 0.928895L5.96893 4.00001C6.00465 4.04823 6.02393 4.10666 6.02393 4.16667C6.02393 4.22669 6.00465 4.28511 5.96893 4.33334L4.60448 5.97334C5.07807 7.18709 5.81592 8.28019 6.76448 9.17334Z" />
              </svg>

              <span> (+994) 12 490 11 64</span>
            </div>
          </a>
          <a href="mailto:info@afn.az" target="_blank">
            <div className="flex justify-between items-center hover:text-primary transition-all duration-300 gap-[5px]">
              <svg
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current"
              >
                <path d="M1.25925 1.22881L7.25925 4.45201C7.46085 4.56001 7.72165 4.61121 7.98405 4.61121C8.24645 4.61121 8.50725 4.56001 8.70885 4.45201L14.7088 1.22881C15.1 1.01841 15.4697 0.200012 14.7521 0.200012H1.21685C0.49925 0.200012 0.86885 1.01841 1.25925 1.22881ZM14.8905 2.99121L8.70885 6.21281C8.43685 6.35521 8.24645 6.37201 7.98405 6.37201C7.72165 6.37201 7.53125 6.35521 7.25925 6.21281C6.98725 6.07041 1.55285 3.22161 1.10885 2.99041C0.79685 2.82721 0.80005 3.01841 0.80005 3.16561V9.00001C0.80005 9.33601 1.25285 9.80001 1.60005 9.80001H14.4C14.7472 9.80001 15.2 9.33601 15.2 9.00001V3.16641C15.2 3.01921 15.2032 2.82801 14.8905 2.99121Z" />
              </svg>

              <span>info@afn.az</span>
            </div>
          </a>
        </div>
        <div>
          <button onClick={openBtn} className="cursor-pointer mr-15">
            <svg
              width="28"
              height="18"
              viewBox="0 0 28 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 18H0.5V15H14V18ZM27.5 10.5H0.5V7.5H27.5V10.5ZM27.5 3H14V0H27.5V3Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
      <Menu setIsOpen={setIsOpen} isOpen={isOpen} />
    </div>
  );
}

export default Navbar;
