import React, { useState } from "react";
import content from "../../content/content";
import HowItWorksCard from "../cards/HowItWorksCard";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";

export default function Steps() {
  return (
    <SectionArea className="bg-bgSectionDark" paddingtop={true}>
      <SectionWrapper className="flex flex-col desktop1:flex-row-reverse gap-[40px] desktop2:gap-0 desktop1:justify-between">
        <MotionDivDownToUp className="w-[100%] desktop1:w-[415px] desktop2:w-[485px] flex justify-center">
          <div
            style={{
              backgroundImage: `url(${content.texts.steps.img})`,
            }}
            className="shadow-custom-opacity shadow-black/40 relative desktop1:bg-center bg-no-repeat bg-cover h-[350px] w-[90%] tablet1:w-full tablet1:h-[800px] desktop1:h-[467px] rounded-xl"
          ></div>
        </MotionDivDownToUp>
        <div className="desktop1:w-[550px] desktop2:w-[570px]">
          <SectionHeader
            className="hidden text-center desktop1:flex"
            miniTitle={content.texts.steps.miniTag}
            sectionHeaderTitle={content.texts.steps.title}
            sectionHeaderSubtitle={content.texts.steps.subtitle}
            color="dark"
            type="article"
            titleColorSet="text-white"
          />
          <SectionHeader
            className="text-center desktop1:hidden"
            miniTitle={content.texts.steps.miniTag}
            sectionHeaderTitle={content.texts.steps.title}
            sectionHeaderSubtitle={content.texts.steps.subtitle}
            color=""
            type=""
            titleColorSet="text-white"
          />

          <div className="flex flex-wrap w-full justify-between gap-[32px] mt-[28px] desktop1:mt-0">
            <HowItWorksCard
              number={content.texts.steps.cards.card1.stepNumber}
              title={content.texts.steps.cards.card1.cardTitle}
              description={content.texts.steps.cards.card1.cardDescription}
              animation
            />
            <HowItWorksCard
              number={content.texts.steps.cards.card2.stepNumber}
              title={content.texts.steps.cards.card2.cardTitle}
              description={content.texts.steps.cards.card2.cardDescription}
              animation
            />
            <HowItWorksCard
              number={content.texts.steps.cards.card3.stepNumber}
              title={content.texts.steps.cards.card3.cardTitle}
              description={content.texts.steps.cards.card3.cardDescription}
              animation
            />
            <HowItWorksCard
              number={content.texts.steps.cards.card4.stepNumber}
              title={content.texts.steps.cards.card4.cardTitle}
              description={content.texts.steps.cards.card4.cardDescription}
              animation
            />
          </div>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
