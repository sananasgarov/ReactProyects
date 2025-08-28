function Contact() {
  return (
    <div className="bg-gradient-to-t to-[#120A01] from-[#090501] relative py-[60px]">
      <svg
        width="568"
        height="258"
        viewBox="0 0 568 258"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0"
      >
        <path
          d="M0 90.5832C28.934 66.4404 78.6557 31.1588 137.925 15.1579C205.5 -3.08543 322.663 -16.1217 371.172 58.1153C395.132 94.784 369.128 136.415 398 168.415C426.691 200.213 474.941 179.777 511.5 196.915C543.5 211.915 552 238.415 567 256.915"
          stroke="#E4E4E4"
        />
      </svg>
      <svg
        width="1048"
        height="267"
        viewBox="0 0 1048 267"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-0 top-0"
      >
        <path
          d="M1 1C29.4186 32.5504 103.606 94.1487 173.008 88.1391C259.759 80.6271 319 56 393.377 79.1247C439.677 93.5199 435.257 138.219 477.137 170.771C519.017 203.323 701.495 124.197 701.495 124.197C701.495 124.197 830.127 66.6047 842.591 124.197C855.055 181.789 803.702 250.398 827.135 264.421C845.881 275.638 982.856 224.357 1049 197.313"
          stroke="#E17A0E"
          stroke-opacity="0.24"
        />
      </svg>
      <div className="max-w-[1320px] mx-auto relative z-1 ">
        <div className="max-w-[500px] mx-auto px-4">
          <div className="flex flex-col items-center justify-center gap-[50px] text-center">
            <div className="space-y-4">
              <h2 className="text-[32px] font-bold">Say Hello</h2>
              <p>Lorem Ipsum is simply dummy text of the printing .</p>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <input
                  type="text"
                  className="border border-[#CECECE] rounded-md py-[7px] px-[20px] placeholder:text-[#fff] transition-all duration-300"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  className="border border-[#CECECE] rounded-md py-[7px] px-[20px] placeholder:text-[#fff] transition-all duration-300"
                  placeholder="Last Name"
                />
              </div>
              <input
                type="email"
                className="border border-[#CECECE] rounded-md w-full py-[7px] px-[20px] placeholder:text-[#fff] transition-all duration-300"
                placeholder="Email"
              />
              <textarea
                name="message"
                id=""
                className="border border-[#CECECE] h-full rounded-md w-full py-[7px] px-[20px] placeholder:text-[#fff] transition-all duration-300"
                placeholder="Message"
              ></textarea>
            </div>
          </div>
          <div className="flex justify-end mt-10">
            <button className="bg-[#E17A0E] cursor-pointer transition-all duration-300 text-white hover:bg-inherit hover:outline hover:outline-[#E17A0E] py-3 px-8 rounded-md">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
