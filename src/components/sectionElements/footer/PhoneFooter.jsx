import React from "react";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import content from "../../../content/content";
import { FaWhatsapp } from "react-icons/fa";

const whatsappContactLink = `${content.texts.links.ctaWhatsapp}`;

function PhoneFooter({LightMode}) {
  return (
    <MotionDivDownToUp>
      <div className="flex full gap-x-[12px] items-center opacity-90">
        <FaWhatsapp size={24} color={LightMode ? "black" : "white"} />

        <a
          href={whatsappContactLink}
          target="_blank"
          className="hover:underline"
        >
          {content.texts.infos.phone}
        </a>
      </div>
    </MotionDivDownToUp>
  );
}

export default PhoneFooter;
