import "../../index.css";
import "primeicons/primeicons.css";
import content from "../../content/content";
import "primereact/resources/primereact.min.css";
import IconFeatureCard from "../cards/IconFeatureCard";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";

export default function Features6cards({ modal }) {
  return (
    <>
      <SectionArea id="service" className="squares">
        <SectionHeader
          className="text-center"
          miniTitle={content.texts.features.miniTag}
          sectionHeaderTitle={content.texts.features.title}
          sectionHeaderSubtitle={content.texts.features.subtitle}
          color="dark"
        />

        <SectionWrapper>
          <div className="flex flex-col items-center w-full justify-evenly tablet1:flex-row">
            <div className="col1 desktop1:w-[28%] flex flex-col items-center">
              <MotionDivDownToUp>
                <IconFeatureCard
                  icon={content.texts.features.card1.icon}
                  title={content.texts.features.card1.title}
                  paragraph={content.texts.features.card1.subtitle}
                  className="tablet1:mb-[26px] desktop1:mb-0"
                />
              </MotionDivDownToUp>
              <MotionDivDownToUp>
                <IconFeatureCard
                  icon={content.texts.features.card2.icon}
                  title={content.texts.features.card2.title}
                  paragraph={content.texts.features.card2.subtitle}
                />
              </MotionDivDownToUp>
              <MotionDivDownToUp>
                <IconFeatureCard
                  icon={content.texts.features.card3.icon}
                  title={content.texts.features.card3.title}
                  paragraph={content.texts.features.card3.subtitle}
                />
              </MotionDivDownToUp>
            </div>

            <MotionDivDownToUp className="hidden desktop1:flex justify-center w-[32%]">
              <div
                className="hidden h-[900px] w-full desktop1:flex col2 rounded-2xl bg-top bg-cover shadow-custom-opacity shadow-primary/50"
                style={{
                  backgroundImage: `url(${content.texts.features.imgFeatures})`,
                }}
              ></div>
            </MotionDivDownToUp>

            <div className="col3 desktop1:w-[28%] flex flex-col items-center">
              <MotionDivDownToUp className=" flex items-center w-full tablet1:w-[290px] desktop1:w-[250px]">
                <IconFeatureCard
                  icon={content.texts.features.card4.icon}
                  title={content.texts.features.card4.title}
                  paragraph={content.texts.features.card4.subtitle}
                  className="tablet1:mb-[26px] desktop1:mb-0"
                />
              </MotionDivDownToUp>
              {/* <MotionDivDownToUp>
                <IconFeatureCard
                  icon={content.texts.features.card5.icon}
                  title={content.texts.features.card5.title}
                  paragraph={content.texts.features.card5.subtitle}
                />
              </MotionDivDownToUp> */}
              {/* <MotionDivDownToUp className=" flex items-center w-full tablet1:w-[290px] desktop1:w-[250px]">
                <IconFeatureCard
                  icon={content.texts.features.card6.icon}
                  title={content.texts.features.card6.title}
                  paragraph={content.texts.features.card6.subtitle}
                >
                  {modal && (
                    <div>
                      <ServicesModal />
                      <MoreFeaturesModal />
                    </div>
                  )}
                </IconFeatureCard>
              </MotionDivDownToUp> */}
            </div>
          </div>
        </SectionWrapper>
      </SectionArea>
    </>
  );
}
