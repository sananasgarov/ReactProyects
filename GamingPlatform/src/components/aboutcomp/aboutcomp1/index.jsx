import { Link } from "react-router";
import Slider from "../slider";
function AboutComp1() {
  return (
    <div className="grid lg:grid-cols-2 px-[15px] py-[50px] md:grid-cols-1 max-w-[1320px] mx-auto gap-[60px] justify-between items-center">
      <div>
        <div className="flex gap-[10px]">
          <p className="hover:text-[#E87D0E] transition-all duration-300">
            <Link to="/">Home</Link>
          </p>
          <span>&gt;</span>
          <p className="text-[#E87D0E]">About us</p>
        </div>
        <br />
        <br />
        <h2 className="text-[32px]">
          Lorem Ipsum is simply dummy text of the printing and.
        </h2>
        <br />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <br />
        <br />
        <br />
        <button className="rounded-4xl font-semibold bg-[#E87D0E] py-[10px] cursor-pointer  hover:bg-inherit hover:outline hover:outline-[#E87D0E] trasntion-all duration-300 px-[20px] flex items-center gap-[20px]">
          <p>Get in Touch </p>
          <svg
            width="12"
            height="10"
            viewBox="0 0 12 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.721267 5.98509C0.770368 5.99306 0.820059 5.99673 0.869777 5.99609L9.33554 5.99609L9.15094 6.08195C8.9705 6.16735 8.80635 6.28359 8.66583 6.42539L6.29182 8.7994C5.97916 9.09787 5.92662 9.57801 6.16733 9.93704C6.44747 10.3196 6.98471 10.4027 7.36732 10.1225C7.39823 10.0999 7.42761 10.0752 7.45522 10.0487L11.7482 5.75568C12.0837 5.42056 12.084 4.87694 11.7489 4.54145C11.7486 4.54123 11.7484 4.54099 11.7482 4.54077L7.45522 0.247807C7.11945 -0.087018 6.57583 -0.0862675 6.24098 0.249496C6.21463 0.275925 6.19002 0.304044 6.16733 0.333666C5.92662 0.692692 5.97916 1.17283 6.29182 1.4713L8.66154 3.84961C8.78751 3.97571 8.93235 4.08145 9.09084 4.16299L9.34841 4.2789L0.917026 4.2789C0.478418 4.26262 0.0936079 4.569 0.0112095 5.00012C-0.0646954 5.46819 0.2532 5.90916 0.721267 5.98509Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <div>
        <Slider />
      </div>
      <br />
      <br />
    </div>
  );
}

export default AboutComp1;
