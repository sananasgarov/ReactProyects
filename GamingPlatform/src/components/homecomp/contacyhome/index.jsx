import React from "react";

function ContactHome() {
  return (
    <div className="px-[10px] py-[50px] max-w-[1320px] mx-auto">
      <div>
        <h2 className="text-[32px] font-bold">Lorem Ipsum</h2>
        <br />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.{" "}
        </p>
      </div>
      <br />
      <br />
      <div className="bg-[#1C140F] rounded-xl py-[35px] px-[50px] flex justify-between items-center">
        <div>
          <h2 className="text-[32px] font-bold">Stay in the loop</h2>
          <br />
          <p>
            Subscribe to receive the latest news and updates about TDA. We
            promise not to spam you!{" "}
          </p>
        </div>
        <div className="bg-white px-[30px] py-[10px] flex justify-center items-center rounded-xl">
          <input
            type="email"
            placeholder="Enter email address"
            className="text-[#898989] placeholder:text-[#898989] focus:outline-none"
          />
          <button className="bg-[#E87D0E] text-white px-[15px] py-[5px]  rounded-[5px] cursor-pointer hover:bg-[#D76B0E] transition-all duration-300">
            Continue
          </button>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default ContactHome;
