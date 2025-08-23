import React from "react";
import spiderman from "../../../assets/img/spiderman.jpg";
function Video() {
  return (
    <div className="max-w-[1320px] mx-auto p-[30px]">
      <div className="grid lg:grid-cols-2 md:grid-cols-1 items-center justify-between gap-15 px-5 lg:px-0">
        <div className="rounded-2xl relative">
          <img src={spiderman} alt="" className="rounded-xl"/>
          <div className="absolute inset-0 bg-black/50 opacity-90 rounded-2xl"></div>
          <svg
            width="65"
            height="61"
            viewBox="0 0 65 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-[40%] left-[45%]"
          >
            <path
              d="M32.5 58.6443C48.9213 58.6443 62.2334 46.0884 62.2334 30.5999C62.2334 15.1113 48.9213 2.55542 32.5 2.55542C16.0788 2.55542 2.76669 15.1113 2.76669 30.5999C2.76669 46.0884 16.0788 58.6443 32.5 58.6443Z"
              stroke="white"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M26.5532 19.3821L44.3932 30.5999L26.5532 41.8176V19.3821Z"
              stroke="white"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="space-y-7">
          <div>
            <p className="font-bold text-[32px]">
              Lorem Ipsum is simply dummy text.
            </p>
          </div>
          <div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum is simply dummy .
            </p>
          </div>
          <div>
            <ul className="space-y-3">
              <li className="flex items-center justify-start gap-4">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5986 2C7.08463 2 2.59863 6.486 2.59863 12C2.59863 17.514 7.08463 22 12.5986 22C18.1126 22 22.5986 17.514 22.5986 12C22.5986 6.486 18.1126 2 12.5986 2ZM10.5996 16.413L7.59408 13.4139C7.20333 13.024 7.20254 12.3912 7.59232 12.0003C7.98234 11.6092 8.61564 11.6085 9.00656 11.9987L10.5976 13.587L15.1846 9C15.5751 8.60953 16.2082 8.60953 16.5986 9C16.9891 9.39047 16.9891 10.0235 16.5986 10.414L10.5996 16.413Z"
                    fill="#2FAB73"
                  />
                </svg>
                <p>Lorem Ipsum is simply</p>
              </li>
              <li className="flex items-center justify-start gap-4">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5986 2C7.08463 2 2.59863 6.486 2.59863 12C2.59863 17.514 7.08463 22 12.5986 22C18.1126 22 22.5986 17.514 22.5986 12C22.5986 6.486 18.1126 2 12.5986 2ZM10.5996 16.413L7.59408 13.4139C7.20333 13.024 7.20254 12.3912 7.59232 12.0003C7.98234 11.6092 8.61564 11.6085 9.00656 11.9987L10.5976 13.587L15.1846 9C15.5751 8.60953 16.2082 8.60953 16.5986 9C16.9891 9.39047 16.9891 10.0235 16.5986 10.414L10.5996 16.413Z"
                    fill="#2FAB73"
                  />
                </svg>
                <p>Lorem Ipsum is simply</p>
              </li>
              <li className="flex items-center justify-start gap-4">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5986 2C7.08463 2 2.59863 6.486 2.59863 12C2.59863 17.514 7.08463 22 12.5986 22C18.1126 22 22.5986 17.514 22.5986 12C22.5986 6.486 18.1126 2 12.5986 2ZM10.5996 16.413L7.59408 13.4139C7.20333 13.024 7.20254 12.3912 7.59232 12.0003C7.98234 11.6092 8.61564 11.6085 9.00656 11.9987L10.5976 13.587L15.1846 9C15.5751 8.60953 16.2082 8.60953 16.5986 9C16.9891 9.39047 16.9891 10.0235 16.5986 10.414L10.5996 16.413Z"
                    fill="#2FAB73"
                  />
                </svg>
                <p>Lorem Ipsum is simply</p>
              </li>
              <li className="flex items-center justify-start gap-4">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5986 2C7.08463 2 2.59863 6.486 2.59863 12C2.59863 17.514 7.08463 22 12.5986 22C18.1126 22 22.5986 17.514 22.5986 12C22.5986 6.486 18.1126 2 12.5986 2ZM10.5996 16.413L7.59408 13.4139C7.20333 13.024 7.20254 12.3912 7.59232 12.0003C7.98234 11.6092 8.61564 11.6085 9.00656 11.9987L10.5976 13.587L15.1846 9C15.5751 8.60953 16.2082 8.60953 16.5986 9C16.9891 9.39047 16.9891 10.0235 16.5986 10.414L10.5996 16.413Z"
                    fill="#2FAB73"
                  />
                </svg>
                <p>Lorem Ipsum is simply</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
