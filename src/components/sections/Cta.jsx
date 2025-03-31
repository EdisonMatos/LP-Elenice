import Button from "../interactives/Button";
import content from "../../content/content";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";

const whatsappContactLink = `${content.texts.links.ctaWhatsapp}`;

export default function Cta() {
  const navigate = useNavigate();

  return (
    <>
      <SectionArea className="squares">
        <SectionWrapper>
          <SectionHeader
            className="text-center"
            miniTitle={content.texts.cta.miniTag}
            sectionHeaderTitle={content.texts.cta.title}
            sectionHeaderSubtitle={content.texts.cta.subtitle}
            color="dark"
          />
          <Button
            aria-label={content.texts.hero.ctaButtonAriaLabel}
            label={content.texts.cta.ctaButtonText}
            onClick={() => navigate("/whatsapp")}
            // buttonLink={whatsappContactLink}
            animation
            icon={<FaWhatsapp size={24} />}
          />
        </SectionWrapper>
      </SectionArea>

      {/* Inicio de onda shape div

      <div class="custom-shape-divider-bottom-azul mt-[64px] desktop1:mt-[70px]">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>

Fim de onda shape div */}
    </>
  );
}
