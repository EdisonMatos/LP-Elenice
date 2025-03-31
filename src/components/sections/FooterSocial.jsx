import content, { infos } from "../../content/content";
import XFooter from "../sectionElements/footer/XFooter.jsx";
import SectionArea from "../sectionElements/SectionArea.jsx";
import ObsFooter from "../sectionElements/footer/ObsFooter.jsx";
import LogoFooter from "../sectionElements/footer/LogoFooter.jsx";
import SectionWrapper from "../sectionElements/SectionWrapper.jsx";
import MotionDivDownToUp from "../animation/MotionDivDownToUp.jsx";
import PhoneFooter from "../sectionElements/footer/PhoneFooter.jsx";
import EmailFooter from "../sectionElements/footer/EmailFooter.jsx";
import AdressFooter from "../sectionElements/footer/AdressFooter.jsx";
import MidTextFooter from "../sectionElements/footer/MidTextFooter.jsx";
import FacebookFooter from "../sectionElements/footer/FacebookFooter.jsx";
import LinkedinFooter from "../sectionElements/footer/LinkedinFooter.jsx";
import PhoneSecundario from "../sectionElements/footer/PhoneSecundario.jsx";
import CopyrightFooter from "../sectionElements/footer/CopyrightFooter.jsx";
import InstagramFooter from "../sectionElements/footer/InstagramFooter.jsx";
import ParagrapfFooter from "../sectionElements/footer/ParagrapfFooter.jsx";
import ExpedienteFooter from "../sectionElements/footer/ExpedienteFooter.jsx";
import AdressSecundarioFooter from "../sectionElements/footer/AdressSecundario.jsx";
import NavegationTextFooter from "../sectionElements/footer/NavegationTextFooter.jsx";
import LinksNavegationFooter from "../sectionElements/footer/LinksNavegationFooter.jsx";
import EmailSecundarioFooter from "../sectionElements/footer/EmailSecundarioFooter.jsx";

export default function FooterSocial({
  LightMode,
  addres,
  obs,
  instagram,
  facebook,
  linkedin,
  x,
  addresSecundario,
  emailSecundario,
  phoneSecundario,
}) {
  return (
    <footer
      className={
        LightMode
          ? "black"
          : "bg-gradient-to-b from-bgSectionDark to-black full gap-y-[42px] text-white font-secondFont text-left text-paragraph4 flex flex-col justify-between items-center bg-cover bg-center bg-no-repeat"
      }
    >
      <SectionArea paddingtop={true} paddingbot={false} className="pb-[23px]">
        <SectionWrapper className="gap-[42px]">
          <div className=" w-full max-w-[1215px] flex flex-col gap-y-[80px] desktop1:flex-row desktop1:justify-between">
            <div className="flex flex-col gap-y-[16px] desktop1:w-[290px] text-paragraph3">
              <LogoFooter />
              <PhoneFooter />
              {phoneSecundario && <PhoneSecundario />}
              <EmailFooter />
              {emailSecundario && <EmailSecundarioFooter />}
              {addres && <AdressFooter />}
              {addresSecundario && <AdressSecundarioFooter />}
              <ExpedienteFooter />
              {obs && <ObsFooter />}
            </div>{" "}
            <div className="flex flex-col gap-y-[16px] desktop1:w-[290px]">
              <MidTextFooter />
              <ParagrapfFooter />
              <MotionDivDownToUp>
                <p className="opacity-90">{content.texts.footerSocialText}</p>
                <div className="mt-2 opacity-90">
                  <div className="flex gap-[10px] items-center">
                    {instagram && <InstagramFooter />}
                    {facebook && <FacebookFooter />}
                    {x && <XFooter />}
                    {linkedin && <LinkedinFooter />}
                  </div>
                </div>
              </MotionDivDownToUp>
            </div>
            <div className="flex flex-col gap-y-[16px] desktop1:w-[290px]">
              <NavegationTextFooter />
              <LinksNavegationFooter />
            </div>
          </div>
          <CopyrightFooter />
        </SectionWrapper>
      </SectionArea>
    </footer>
  );
}
