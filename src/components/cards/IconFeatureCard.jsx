export default function IconFeatureCard(props) {
  const { icon, title, paragraph, className, children } = props;

  return (
    <div
      className={`w-full tablet1:min-h-[300px] p-0 tablet1:w-[290px] mt-[36px] tablet1:mt-0 desktop1:w-[260px] desktop1:h-[300px] flex flex-col items-center desktop1:hover:scale-110 transition desktop1:p-0 ${className}`}
    >
      <div className="h-[64px] w-[64px] mb-[24px] bg-primary rounded-md flex justify-center items-center text-labelsIcons">
        {icon}
      </div>
      <h1 className="h-auto font-bold font-mainFont text-title3 text-center mb-[16px] text-black">
        {title}
      </h1>
      <p className="text-center text-black opacity-70 font-mainFont w-[90%] pb-4">
        {paragraph}
      </p>
      {children}
    </div>
  );
}
