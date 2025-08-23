import React from "react";
import { Link } from "react-router-dom";
function ServicesComp1() {
  return (
    <div className="p-[30px] max-w-[1320px] mx-auto space-y-10">
      <div className="flex items-center justify-center gap-4">
        <Link to="/">
          <button className="hover:text-[#E87D0E] cursor-pointer trasntion-all duration-300">
            Home
          </button>
        </Link>
        <span>&gt;</span>
        <p className="text-[#E87D0E]">Services</p>
      </div>
      <div className="text-center space-y-3">
        <h2 className="font-semibold text-[32px]">
          Lorem Ipsum is simply dummy text of the printing and.
        </h2>
        <p className="font-medium">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.{" "}
        </p>
      </div>
      <div className="bg-[#1C140F] py-[60px] grid grid-cols-3 justify-center rounded-2xl items-center gap-[20px]">
        <div className="flex items-center justify-center gap-[20px] relative">
          <div className="bg-[#FFECEC] rounded-[50%] p-[30px] flex justify-center items-center">
            <svg
              width="17"
              height="19"
              viewBox="0 0 17 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.50001 7.8001C9.45479 7.8001 10.3705 7.42081 11.0456 6.74568C11.7207 6.07055 12.1 5.15488 12.1 4.2001C12.1 3.24532 11.7207 2.32964 11.0456 1.65451C10.3705 0.979382 9.45479 0.600098 8.50001 0.600098C7.54523 0.600098 6.62955 0.979382 5.95442 1.65451C5.27929 2.32964 4.90001 3.24532 4.90001 4.2001C4.90001 5.15488 5.27929 6.07055 5.95442 6.74568C6.62955 7.42081 7.54523 7.8001 8.50001 7.8001ZM3.39866 18.6001C1.57686 18.6001 0.0422473 17.0687 0.739418 15.3856C1.16156 14.3664 1.7803 13.4404 2.56031 12.6604C3.34032 11.8804 4.26633 11.2616 5.28547 10.8395C6.3046 10.4174 7.3969 10.2001 8.50001 10.2001C9.60311 10.2001 10.6954 10.4174 11.7145 10.8395C12.7337 11.2616 13.6597 11.8804 14.4397 12.6604C15.2197 13.4404 15.8385 14.3664 16.2606 15.3856C16.9578 17.0687 15.4232 18.6001 13.6014 18.6001H3.39866Z"
                fill="#DC7000"
              />
            </svg>
          </div>
          <div className="space-y-1">
            <p className="font-black text-[32px]">90+</p>
            <p>Clients</p>
          </div>
          <svg
            width="3"
            height="128"
            viewBox="0 0 3 128"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-0"
          >
            <path
              d="M1.5 1.21338V126.787"
              stroke="#EEEFF2"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div className="flex items-center justify-center gap-[20px] relative">
          <div className="bg-[#FFECEC] rounded-[50%] p-[30px] flex justify-center items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 9C19 8.08075 18.8189 7.1705 18.4672 6.32122C18.1154 5.47194 17.5998 4.70026 16.9497 4.05025C16.2997 3.40024 15.5281 2.88463 14.6788 2.53284C13.8295 2.18106 12.9193 2 12 2C11.0807 2 10.1705 2.18106 9.32122 2.53284C8.47194 2.88463 7.70026 3.40024 7.05025 4.05025C6.40024 4.70026 5.88463 5.47194 5.53284 6.32122C5.18106 7.1705 5 8.08075 5 9C5 10.387 5.41 11.677 6.105 12.765H6.097C8.457 16.46 12 22 12 22L17.903 12.765H17.896C18.6164 11.6414 18.9995 10.3347 19 9ZM12 12C11.2044 12 10.4413 11.6839 9.87868 11.1213C9.31607 10.5587 9 9.79565 9 9C9 8.20435 9.31607 7.44129 9.87868 6.87868C10.4413 6.31607 11.2044 6 12 6C12.7956 6 13.5587 6.31607 14.1213 6.87868C14.6839 7.44129 15 8.20435 15 9C15 9.79565 14.6839 10.5587 14.1213 11.1213C13.5587 11.6839 12.7956 12 12 12Z"
                fill="#DC7000"
              />
            </svg>
          </div>
          <div className="space-y-1">
            <p className="font-black text-[32px]">30+</p>
            <p>Countries</p>
          </div>
          <svg
            width="3"
            height="128"
            viewBox="0 0 3 128"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-0"
          >
            <path
              d="M1.5 1.21338V126.787"
              stroke="#EEEFF2"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div className="flex items-center justify-center gap-[20px] relative">
          <div className="bg-[#FFECEC] rounded-[50%] p-[30px] flex justify-center items-center">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.5 3H4.5C3.96957 3 3.46086 3.21071 3.08579 3.58579C2.71071 3.96086 2.5 4.46957 2.5 5V9C2.5 9.53043 2.71071 10.0391 3.08579 10.4142C3.46086 10.7893 3.96957 11 4.5 11H20.5C21.0304 11 21.5391 10.7893 21.9142 10.4142C22.2893 10.0391 22.5 9.53043 22.5 9V5C22.5 4.46957 22.2893 3.96086 21.9142 3.58579C21.5391 3.21071 21.0304 3 20.5 3ZM15.5 7C15.5 7.55228 15.0523 8 14.5 8C13.9477 8 13.5 7.55228 13.5 7C13.5 6.44772 13.9477 6 14.5 6C15.0523 6 15.5 6.44772 15.5 7ZM19.5 7C19.5 7.55228 19.0523 8 18.5 8C17.9477 8 17.5 7.55228 17.5 7C17.5 6.44772 17.9477 6 18.5 6C19.0523 6 19.5 6.44772 19.5 7ZM20.5 13H4.5C3.96957 13 3.46086 13.2107 3.08579 13.5858C2.71071 13.9609 2.5 14.4696 2.5 15V19C2.5 19.5304 2.71071 20.0391 3.08579 20.4142C3.46086 20.7893 3.96957 21 4.5 21H20.5C21.0304 21 21.5391 20.7893 21.9142 20.4142C22.2893 20.0391 22.5 19.5304 22.5 19V15C22.5 14.4696 22.2893 13.9609 21.9142 13.5858C21.5391 13.2107 21.0304 13 20.5 13ZM15.5 17C15.5 17.5523 15.0523 18 14.5 18C13.9477 18 13.5 17.5523 13.5 17C13.5 16.4477 13.9477 16 14.5 16C15.0523 16 15.5 16.4477 15.5 17ZM19.5 17C19.5 17.5523 19.0523 18 18.5 18C17.9477 18 17.5 17.5523 17.5 17C17.5 16.4477 17.9477 16 18.5 16C19.0523 16 19.5 16.4477 19.5 17Z"
                fill="#DC7000"
              />
            </svg>
          </div>
          <div className="space-y-1">
            <p className="font-black text-[32px]">50+</p>
            <p>Projects</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesComp1;
