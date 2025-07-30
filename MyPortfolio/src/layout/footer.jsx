import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <div className="flex flex-col gap-[60px] w-[60%] max-w-[1320px] mx-auto p-[100px]">
      <div className="text-white text-[24px]">Contact</div>
      <div className="text-white text-[16px]">
        <p>
          Have a project in mind, a question, or just want to say hi? Feel free
          to reach out — I'm always open to new opportunities, collaborations,
          or just a friendly chat. Let's build something great together!
        </p>
        <br />
        <br />
        <a href="mailto:senan593az@gmail.com" className="text-[#0A66C2]">senan593az@gmail.com</a>
      </div>
      <div className="flex items-center text-[25px] gap-[20px]">
        
        <a
          href="https://www.linkedin.com/in/sanan-asgarov-b30281328/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} style={{ color: "#0A66C2" }} />
        </a>
        <a href="https://github.com/sananasgarov" target="_blank">
          <FontAwesomeIcon icon={faGithub} style={{ color: "#333" }} />
        </a>
        <a href="https://www.instagram.com/senan_esgarov2/" target="_blank">
          <FontAwesomeIcon icon={faInstagram} style={{ color: "#E1306C" }} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
