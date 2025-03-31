import content from "../../content/content";
import { useNavigate } from "react-router-dom";
import Paragraphs from "../sectionElements/Paragraphs";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import SectionWrapper from "../sectionElements/SectionWrapper";
import AccordionExpandDefault from "../interactives/AcordionTwo";

export default function Faq() {
  const navigate = useNavigate();

  return (
    <>
      <SectionArea id="faq" className="bg-neutral-100">
        <SectionHeader
          className="text-center"
          miniTitle={content.texts.faq.miniTag}
          sectionHeaderTitle={content.texts.faq.title}
          sectionHeaderSubtitle={content.texts.faq.subtitle}
          color="dark"
          titleColorSet="text-secondary"
        />
        <SectionWrapper className="flex justify-center">
          <MotionDivDownToUp className="flex justify-center w-full">
            <div className="w-[90%] tablet1:w-[80%] desktop1:w-[80%] max-w-[860px] mb-[26px] tablet1:mb-[40px] desktop1:mb-[80px]">
              <AccordionExpandDefault />
            </div>
          </MotionDivDownToUp>
          <MotionDivDownToUp>
            <Paragraphs className="text-center underline transition text-secondary hover:scale-110">
              <a href="/whatsapp" target="_blank" rel="noopener noreferrer">
              {/* <a href={content.texts.links.ctaWhatsapp} target="_blank"> */}
                {" "}
                {content.texts.faq.paragraph}
              </a>
            </Paragraphs>
          </MotionDivDownToUp>
        </SectionWrapper>
      </SectionArea>
    </>
  );
}
