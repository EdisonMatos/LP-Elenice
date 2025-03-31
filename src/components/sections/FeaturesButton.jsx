import { useState } from "react";
import "primeicons/primeicons.css";
import { Dialog } from "primereact/dialog";
import content from "../../content/content";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/saga-blue/theme.css";
import SectionArea from "../sectionElements/SectionArea";
import ServiceDetailCard from "../cards/ServiceDetailCard";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import FeatureImgOnBgCardButton from "../cards/FeatureImgOnBgCardButton";

export default function FeaturesButton() {
  const [visible, setVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalSubtitle, setModalSubtitle] = useState("");
  const [modalContent, setModalContent] = useState("");

  const onClick = (title, subtitle, content) => {
    setModalTitle(title);
    setModalSubtitle(subtitle);
    setModalContent(content);
    setVisible(true);
  };

  return (
    <>
      <SectionArea
        id={"service"}
        className="py-[40px] tablet1:py-[64px] desktop1:py-[96px] desktop1:pb-[0px] bg-quinary squares"
      >
        <SectionHeader
          className="text-center"
          miniTitle={content.texts.features.miniTag}
          sectionHeaderTitle={content.texts.features.title}
          sectionHeaderSubtitle={content.texts.features.subtitle}
          color="dark"
        />
        <SectionWrapper>
          <div className="flex flex-wrap justify-center desktop1:justify-evenly w-full gap-[36px] tablet1:gap-[24px] desktop1:w-[90%]">
            <FeatureImgOnBgCardButton
              bgImg={content.texts.features.card1.img}
              title={content.texts.features.card1.title}
              description={content.texts.features.card1.subtitle}
              buttonLabel={content.texts.features.card1.buttonLabel}
              animation
              onClick={() =>
                onClick(
                  content.texts.features.card1.title,
                  <div>
                    <ServiceDetailCard
                      img={content.texts.features.card1.img}
                      // subtitle={content.texts.features.card1.subtitle}
                      description={content.texts.features.card1.description}
                      buttonIcon={content.texts.features.card1.icon}
                      buttonLabel={
                        content.texts.features.card1.buttonLabelModal
                      }
                      buttonLink={content.texts.links.ctaWhatsapp}
                      bgPosition="bg-top"
                    />
                  </div>
                )
              }
            />
            <FeatureImgOnBgCardButton
              bgImg={content.texts.features.card2.img}
              title={content.texts.features.card2.title}
              description={content.texts.features.card2.subtitle}
              buttonLabel={content.texts.features.card2.buttonLabel}
              animation
              onClick={() =>
                onClick(
                  content.texts.features.card2.title,
                  <div>
                    <ServiceDetailCard
                      img={content.texts.features.card2.img}
                      // subtitle={content.texts.features.card2.subtitle}
                      description={content.texts.features.card2.description}
                      buttonIcon={content.texts.features.card2.icon}
                      buttonLabel={
                        content.texts.features.card2.buttonLabelModal
                      }
                      buttonLink={content.texts.links.ctaWhatsapp}
                    />
                  </div>
                )
              }
            />
            <FeatureImgOnBgCardButton
              bgImg={content.texts.features.card3.img}
              title={content.texts.features.card3.title}
              description={content.texts.features.card3.subtitle}
              buttonLabel={content.texts.features.card3.buttonLabel}
              animation
              onClick={() =>
                onClick(
                  content.texts.features.card3.title,
                  <div>
                    <ServiceDetailCard
                      img={content.texts.features.card3.img}
                      // subtitle={content.texts.features.card3.subtitle}
                      description={content.texts.features.card3.description}
                      buttonIcon={content.texts.features.card3.icon}
                      buttonLabel={
                        content.texts.features.card3.buttonLabelModal
                      }
                      buttonLink={content.texts.links.ctaWhatsapp}
                      bgPosition="bg-top"
                    />
                  </div>
                )
              }
            />
          </div>
        </SectionWrapper>
      </SectionArea>

      <Dialog
        className="font-secondFont"
        header={modalTitle}
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "30vw" }}
        breakpoints={{
          "1440px": "25vw",
          "1024px": "35vw",
          "768px": "50vw",
          "640px": "60vw",
          "639px": "80vw",
          "425px": "90vw",
        }}
        // breakpoints={{ "4000px": "35vw", "1024px": "60vw", "641px": "90vw" }} versão original
      >
        <>{modalSubtitle}</>
        <div className="m-0">{modalContent}</div>
      </Dialog>
    </>
  );
}
