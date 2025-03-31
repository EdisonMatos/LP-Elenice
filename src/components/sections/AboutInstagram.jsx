import React, { useState } from "react";
import content from "../../content/content";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import XAbout from "../sectionElements/aboutInstagram/XAbout";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import SocialPrint from "../sectionElements/aboutInstagram/SocialPrint";
import FacebookAbout from "../sectionElements/aboutInstagram/FacebookAbout";
import LinkedInAbout from "../sectionElements/aboutInstagram/LinkedInAbout";
import InstagramAbout from "../sectionElements/aboutInstagram/InstagramAbout";
import DefaultInstagram from "../sectionElements/aboutInstagram/DefaultInstagram";
import ParagraphsAboutSocial from "../sectionElements/aboutInstagram/ParagraphsAboutSocial";

export default function AboutInstagram({
  instagram,
  facebook,
  x,
  linkedin,
  socialPrint,
}) {
  return (
    <SectionArea id="about" className="bg-bgSectionDark" paddingtop={false}>
      <SectionWrapper className="flex flex-col desktop1:flex-row gap-[40px]  desktop1:gap-x-[40px]  desktop1:justify-between">
        {socialPrint ? <SocialPrint /> : <DefaultInstagram />}
        <div className="desktop1:w-[550px] desktop2:w-[570px]">
          <MotionDivDownToUp>
            <SectionHeader
              className="text-center"
              miniTitle={content.texts.about.aboutSocial.miniTag}
              sectionHeaderTitle={content.texts.about.aboutSocial.title}
              sectionHeaderSubtitle={content.texts.about.aboutSocial.subtitle}
              color="dark"
              type="article"
              titleColorSet="text-white"
              subtitleColorSet="text-white"
            />
          </MotionDivDownToUp>
          <ParagraphsAboutSocial />
          <div className="flex flex-col gap-4">
            {instagram && <InstagramAbout />}
            {facebook && <FacebookAbout />}
            {x && <XAbout />}
            {linkedin && <LinkedInAbout />}
          </div>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
