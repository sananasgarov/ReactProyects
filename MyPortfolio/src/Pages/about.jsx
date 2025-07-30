import {
  siReact,
  siJavascript,
  siRedux,
  siNodedotjs,
  siMongodb,
  siNextdotjs,
  siHtml5,
} from "simple-icons/icons";
function About() {
  return (
    <div className="mx-auto text-white text-center gap-[20px] p-[100px]">
      <div>
        <p className="text-[24px] w-[60%] mx-auto">
          I'm currently seeking to join a{" "}
          <span className="text-[#0A66C2]">cross-functional</span> team that
          values improving lives through accessible and user-centered design.
          <br />
          <br />I completed a 7-month Full Stack Web Development program at{" "}
          <span className="font-semibold text-[#00ADB5]">Jet Academy</span>,
          where I gained hands-on experience building both frontend and backend
          applications using modern technologies.
          <br />
          <br />
          Additionally, I have earned multiple certificates related to
          full-stack development from{" "}
          <span className="text-[#0056D2]">Coursera</span>, further
          strengthening my skills in areas such as responsive design, REST APIs,
          databases, and deployment.
          <br />
          <br />
          With a strong foundation in tools like{" "}
          <span className="text-[#61DAFB]">React</span>,{" "}
          <span className="text-[#F7DF1E]">JavaScript</span>,{" "}
          <span className="text-[#764ABC]">Redux</span>,{" "}
          <span className="text-[#339933]">Node.js</span>, and{" "}
          <span className="text-[#47A248]">MongoDB</span>, I enjoy building
          responsive, performant, and accessible full-stack applications.
          <br />
          <br />I am passionate about continuous learning, clean code practices,
          and collaborating with diverse teams to deliver intuitive user
          experiences.
        </p>
      </div>
      <div>
        <p className="text-[24px] w-[60%] mx-auto">
          I'm currently seeking to join a{" "}
          <span className="text-[#A362FF]">cross-functional</span> team that
          values improving lives through accessible and user-centered design.
        </p>
      </div>
      <div className="p-[20px]">
        <div className="flex items-center justify-center gap-[20px]">
          <div className="rounded-full bg-gray-800 p-4 hover:scale-110 transition-transform">
            <svg
              role="img"
              viewBox="0 0 24 24"
              width="40"
              height="40"
              fill={`#${siReact.hex}`}
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>{siReact.title}</title>
              <path d={siReact.path} />
            </svg>
          </div>
          <div className="rounded-full bg-gray-800 p-4 hover:scale-110 transition-transform">
            <svg
              role="img"
              viewBox="0 0 24 24"
              width="40"
              height="40"
              fill={`#${siJavascript.hex}`}
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>{siJavascript.title}</title>
              <path d={siJavascript.path} />
            </svg>
          </div>
          <div className="rounded-full bg-gray-800 p-4 hover:scale-110 transition-transform">
            <svg
              role="img"
              viewBox="0 0 24 24"
              width="40"
              height="40"
              fill={`#${siRedux.hex}`}
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>{siRedux.title}</title>
              <path d={siRedux.path} />
            </svg>
          </div>
          <div className="rounded-full bg-gray-800 p-4 hover:scale-110 transition-transform">
            <svg
              role="img"
              viewBox="0 0 24 24"
              width="40"
              height="40"
              fill={`#${siNodedotjs.hex}`}
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>{siNodedotjs.title}</title>
              <path d={siNodedotjs.path} />
            </svg>
          </div>
          <div className="rounded-full bg-gray-800 p-4 hover:scale-110 transition-transform">
            <svg
              role="img"
              viewBox="0 0 24 24"
              width="40"
              height="40"
              fill={`#${siMongodb.hex}`}
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>{siMongodb.title}</title>
              <path d={siMongodb.path} />
            </svg>
          </div>
        </div>
        <div className="flex items-center justify-center gap-[20px] mt-[20px]">
          <div className="rounded-full bg-gray-800 p-4 hover:scale-110 transition-transform">
            <svg
              role="img"
              viewBox="0 0 24 24"
              width="40"
              height="40"
              fill={`#${siNextdotjs.hex}`}
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>{siNextdotjs.title}</title>
              <path d={siNextdotjs.path} />
            </svg>
          </div>
          <div className="rounded-full bg-gray-800 p-4 hover:scale-110 transition-transform">
            <svg
              role="img"
              viewBox="0 0 24 24"
              width="40"
              height="40"
              fill={`#${siHtml5.hex}`}
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>{siHtml5.title}</title>
              <path d={siHtml5.path} />
            </svg>
          </div>
          <div className="rounded-full bg-gray-800 p-4 hover:scale-110 transition-transform">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="#1572B6"
            >
              <title>CSS3</title>
              <path d="M1.5 0h21l-1.91 21.614L12 24l-8.59-2.386L1.5 0zm4.56 7.43l.16 1.845H16.26l-.39 4.43-3.88 1.06-3.88-1.06-.25-2.8H6.96l.47 5.23 5.57 1.54 5.57-1.54.76-8.55H6.06l-.3-3.38h13.14l.24-2.69H6.12L6.06 7.43z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
