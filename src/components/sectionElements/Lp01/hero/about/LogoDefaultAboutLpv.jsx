import React from "react";
import content from "../../../../../content/content";
import MotionDivDownToUp from "../../../../animation/MotionDivDownToUp";
import contentLp01 from "../../../../../content/contentLp01";

function LogoDefaultAboutLpv() {
  return (
    <MotionDivDownToUp className=" w-[100%] desktop1:w-[415px] desktop2:w-[485px] flex justify-center">
      <img
        src={contentLp01.about.imgAbout}
        alt={contentLp01.about.ariaLabel}
        className="shadow-custom-opacity shadow-primary relative bg-center bg-no-repeat bg-cover h-auto w-[90%] tablet1:w-full rounded-xl"
      />
    </MotionDivDownToUp>
  );
}

export default LogoDefaultAboutLpv;
