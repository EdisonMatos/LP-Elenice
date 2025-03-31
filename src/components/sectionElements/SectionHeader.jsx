import MotionDivDownToUp from "../animation/MotionDivDownToUp";

export default function SectionHeader({
  sectionHeaderTitle,
  sectionHeaderSubtitle,
  className,
  titleColor,
  subtitleColor,
  miniTitle,
  miniTitleSpace,
  color,
  miniTitleBgColor = true, // Valor padrão
  miniTitleTextColor,
  usage,
  type,
  titleOrientation,
  subtitleOrientation,
  miniTitleOrientation,
  marginBottomOption,
  animation = true,
  titleColorSet,
  subtitleColorSet,
}) {
  // Configurações baseadas na cor
  if (color === "dark") {
    miniTitleTextColor = "text-black";
    titleColor = titleColorSet ?? "text-primary";
    subtitleColor = subtitleColorSet ?? "text-darker opacity-70";
    if (miniTitleBgColor) miniTitleBgColor = "bg-[#E0E0E0] ";
  } else {
    miniTitleTextColor = "text-white";
    titleColor =  titleColorSet ?? "text-secondary";
    subtitleColor = subtitleColorSet ?? "text-darker text-opacity-80";
    if (miniTitleBgColor) miniTitleBgColor = "bg-primary bg-opacity-100";
  }

  // Configurações baseadas no tipo
  if (type === "article") {
    usage = "w-full flex flex-col";
    miniTitleSpace = "w-full flex-start text-left";
    titleOrientation = "text-left";
    subtitleOrientation = "text-left";
    marginBottomOption = "mb-[26px] tablet1:mb-[40px] desktop1:mb-[32px]";
  } else {
    usage = "w-[90%] tablet1:w-[80%] desktop1:w-[60%] max-w-[920px]";
    marginBottomOption = "mb-[26px] tablet1:mb-[40px] desktop1:mb-[72px]";
  }

  // Remover o background se miniTitleBgColor for false
  if (!miniTitleBgColor) {
    miniTitleBgColor = ""; // Sem classe de background
  }

  const Content = (
    <div className={`${usage} ${className}`}>
      <div>
        <div className={`${miniTitleSpace}`}>
          <div
            className={`py-[4px] font-semibold px-[12px] font-mainFont text-paragraph2 rounded-md inline-block mb-[16px] ${miniTitleOrientation} ${miniTitleBgColor}`}
          >
            <p className={`${miniTitleTextColor} uppercase`}>{miniTitle}</p>
          </div>
        </div>
        <h1
          className={`${titleColor} ${titleOrientation} text-title4 leading-[34px] tablet1:leading-[42px] tablet1:text-title5 font-mainFont font-bold mb-[16px]`}
        >
          {sectionHeaderTitle}
        </h1>
        <p
          className={`text-title1 font-secondFont leading-[26px] ${marginBottomOption} ${subtitleOrientation} ${subtitleColor}`}
        >
          {sectionHeaderSubtitle}
        </p>
      </div>
    </div>
  );

  return animation ? (
    <MotionDivDownToUp className="flex justify-center w-full">
      {Content}
    </MotionDivDownToUp>
  ) : (
    Content
  );
}
