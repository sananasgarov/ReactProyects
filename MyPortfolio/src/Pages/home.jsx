import React from "react";
import homeImage from "../assets/home.png";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Home() {
  return (
    <div className="mx-auto p-[100px] flex flex-col gap-[50px] max-w-[1320px] w-[60%]">
      <div className="flex items-center justify-center ">
        <div className="relative">
          <div className="absolute w-[160px] h-[160px] bg-purple-700 z-[0]  rounded-full inset-0 blur-2xl opacity-40"></div>
          <img src={homeImage} alt="" className="w-[200px] z-[10] relative" />
        </div>
        <div className="text-white">
          <p className="text-sm">
            Hello! I am <span className="text-purple-400">Sanan Asgarov</span>
          </p>
          <h1 className="text-3xl font-bold mt-2">
            A Full Stack Developer who
            <br />
            builds beyond the
            <span className="text-purple-400 underline decoration-wavy">
              Frontend and Backend
            </span>
          </h1>
          <p className="mt-1 text-[16px] text-gray-400">
            If the experience doesn`t impress you, what will?
          </p>
        </div>
      </div>
      <div className="text-white">
        <p className="text-[40px] font-bold">I'm a Software Engineer</p>
        <p className="text-[20px] font-italic">
          Connect With me at{" "}
          <FontAwesomeIcon icon={faLinkedin} style={{ color: "#0A66C2" }} />
          <a
            href="https://www.linkedin.com/in/sanan-asgarov-b30281328/"
            className="text-[#0A66C2]"
            target="_blank"
          >
            LinkEdin
          </a>
        </p>
      </div>
      <div>
        <p className="text-[18px] text-white font-italic">
          A junior Full Stack Developer with solid training from Jet Academy and
          multiple certifications from Coursera. I'm passionate about building
          clean, responsive, and user-focused web applications. I enjoy turning
          complex problems into simple, functional solutions — from frontend
          interfaces to backend logic. Always eager to learn, grow, and
          contribute to impactful tech projects.
        </p>
      </div>
    </div>
  );
}

export default Home;
