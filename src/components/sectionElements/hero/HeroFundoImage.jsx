import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import content from "../../../content/content";
import Button from "../../interactives/Button";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../../../styles/shapeDivs.css";

export default function HeroFundoImage({ appDownloadButtons }) {
  const navigate = useNavigate();
  const [bgImage, setBgImage] = useState(content.texts.hero.heroImgPhone);

  useEffect(() => {
    const handleResize = () => {
      setBgImage(
        window.innerWidth < 1024
          ? content.texts.hero.heroImgPhone
          : content.texts.hero.heroImg
      );
    };

    handleResize(); // Definir a imagem correta ao carregar a página
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [content]);

  return (
    <>
      <div
        className="w-full bg-top bg-repeat bg-cover font-mainFont desktop1:pt-[45px] hidden desktop1:flex"
        id="home"
        style={{
          backgroundImage: `url(${
            window.innerWidth < 1024
              ? content.texts.hero.heroImgPhone
              : content.texts.hero.heroImg
          })`,
        }}
      >
        <div className="bg-black/70 desktop1:bg-black/0 ">
          <div className="relative z-10 flex w-full items-left pt-[36px] desktop1:pb-[90px] desktop2:pb-[90px] ">
            <div className="w-full text-secondary justify-evenly">
              <div className="h-[70px] desktop1:h-[140px]" />
              <div className="flex flex-col-reverse gap-[40px] desktop1:flex-row desktop1:justify-between mx-auto w-[90%] max-w-[1215px] items-center pb-[64px] pt-[40px] desktop1:pt-[0px] desktop1:pb-[0px]">
                <div className="flex  flex-col w-full desktop1:w-[50%] desktop1:mr-[20px]  ">
                <MotionDivDownToUp>
                <div className="flex justify-center w-auto text-center desktop1:justify-start desktop1:text-left font-secondFont text-paragraph4">
                  <p className="mb-[16px] bg-primary text-black bg-opacity-100 rounded-md px-[16px] py-[6px] inline-block text-paragraph2">
                    {content.texts.hero.miniTag}
                  </p>
                </div>
              </MotionDivDownToUp>
              <MotionDivDownToUp>
                <div className="text-white flex justify-center desktop1:justify-start font-bold leading-[40px] phone3:leading-[42px] tablet1:leading-[70px] desktop1:leading-[60px] desktop2:leading-[65px] text-center desktop1:text-left text-title4 phone2:text-title5 phone3:text-title5 tablet1:text-title6">
                  <h1 className="">{content.texts.hero.title}</h1>
                </div>
              </MotionDivDownToUp>
              <MotionDivDownToUp>
                <div className="flex justify-center w-full text-center desktop1:text-left desktop1:justify-start font-secondFont text-paragraph4 phone3:text-paragraph5">
                  <p className="text-white mb-[32px] ">
                    {content.texts.hero.subtitle}
                  </p>
                </div>
              </MotionDivDownToUp>
              <div className="w-full phone2:w-full tablet2:w-auto">
                <div className="flex justify-center w-full desktop1:justify-start mb-[32px]">
                  <Button
                    aria-label={content.texts.hero.ctaButtonAriaLabel}
                    label={content.texts.hero.ctaButtonText}
                    onClick={() => navigate("/whatsapp")}
                    // buttonLink={content.texts.links.ctaWhatsapp}
                    animation
                    className="w-[100%]"
                    icon={<FaWhatsapp size={24} />}
                  />
                </div>
                <MotionDivDownToUp>
                  <div className="flex justify-center desktop1:justify-start">
                    <div className="flex flex-col items-center desktop1:flex-row text-primary">
                      {content.texts.hero.obsHero.icon}
                      <p className="text-white  ml-[10px] text-center mt-[12px] desktop1:mt-0">
                        {content.texts.hero.obsHero.text}
                      </p>
                    </div>
                  </div>
                </MotionDivDownToUp>
                {appDownloadButtons && (
                  <MotionDivDownToUp>
                    <div className="flex flex-col items-center desktop1:items-start">
                      <p className="mb-[20px] mt-[60px] text-white  text-center">
                        {content.texts.hero.app.description}
                      </p>
                      <div className="">
                        {" "}
                        <div className="flex items-start gap-[20px]">
                          <a
                            href={content.texts.hero.app.imgs.appStore.link}
                            target="_blank"
                            className="transition hover:scale-110 invert"
                          >
                            <img
                              src={content.texts.hero.app.imgs.appStore.img}
                              alt={content.texts.hero.app.imgs.appStore.alt}
                              className=""
                            />
                          </a>
                          <a
                            href={content.texts.hero.app.imgs.playStore.link}
                            target="_blank"
                            className="transition hover:scale-110 invert"
                          >
                            <img
                              src={content.texts.hero.app.imgs.playStore.img}
                              alt={content.texts.hero.app.imgs.playStore.alt}
                              className=""
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </MotionDivDownToUp>
                )}
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
