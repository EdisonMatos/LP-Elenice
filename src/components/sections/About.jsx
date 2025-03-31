import React, { useState } from "react";
import SectionArea from "../sectionElements/SectionArea";
import "react-image-gallery/styles/css/image-gallery.css";
import SectionHeader from "../sectionElements/SectionHeader";
import AboutModal from "../sectionElements/about/AboutModal";
import content, { abstractions } from "../../content/content";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import GalleryAbout from "../sectionElements/about/GalleryAbout";
import ParagraphSemFading from "../sectionElements/about/ParagraphSemFading";
import ParagraphWithFading from "../sectionElements/about/ParagraphWithFading";

export default function About({ modal, showGallery }) {
  return (
    <SectionArea id="about" className="bg-bgSectionDark">
      <SectionWrapper className="flex flex-col desktop1:flex-row-reverse gap-[40px] desktop1:gap-x-[40px] desktop2:gap-0 desktop1:justify-between">
        <MotionDivDownToUp className=" w-[100%] desktop1:w-[415px] desktop2:w-[485px] flex justify-center">
          <div
            style={{
              backgroundImage: !showGallery
                ? `url(${content.texts.about.imagem.img})`
                : "none",
            }}
            className="shadow-custom-opacity shadow-black/40 relative bg-center bg-no-repeat bg-cover h-[300px] w-[90%] tablet1:w-full tablet1:h-[690px] desktop1:h-[467px] rounded-xl"
          >
            {showGallery && <GalleryAbout />}
          </div>
        </MotionDivDownToUp>

        <div className="desktop1:w-[550px] desktop2:w-[570px] ">
          <SectionHeader
            className="text-center"
            miniTitle={content.texts.about.miniTag}
            sectionHeaderTitle={content.texts.about.title}
            sectionHeaderSubtitle={content.texts.about.subtitle}
            color="dark"
            type="article"
            titleColorSet="text-white"
            subtitleColorSet="text-white"
          />
          <MotionDivDownToUp>
            {modal ? <ParagraphWithFading /> : <ParagraphSemFading />}
            {modal && <AboutModal />}
          </MotionDivDownToUp>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
