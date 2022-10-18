import React from "react";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { GoMailRead } from "@react-icons/all-files/go/GoMailRead";
import { VscFilePdf } from "@react-icons/all-files/vsc/VscFilePdf";
import { BsFillImageFill } from "@react-icons/all-files/bs/BsFillImageFill";
import { CgBrowser } from "@react-icons/all-files/cg/CgBrowser";
import { AiFillApple } from "@react-icons/all-files/ai/AiFillApple";
import { AiFillAndroid } from "@react-icons/all-files/ai/AiFillAndroid";

const ReactIcon = ({ icon }) => {
  return (
    <>
      {icon === "mail" && <GoMailRead />}
      {icon === "github" && <FaGithub />}
      {icon === "linkedin" && <FaLinkedin />}
      {icon === "resume" && <VscFilePdf />}
      {icon === "wallpaper" && <BsFillImageFill />}
      {icon === "browser" && <CgBrowser />}
      {icon === "iphone" && <AiFillApple />}
      {icon === "android" && <AiFillAndroid />}
    </>
  );
};

export default ReactIcon;
