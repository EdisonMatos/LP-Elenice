export default function IconButtonFeatureCard(props) {
  const { icon, title, paragraph, className, children } = props;

  return (
    <div
      className={`w-[200px] p-0 flex flex-col items-center desktop1:hover:scale-110 transition desktop1:p-0 ${className}`}
    >
      <div className="h-[64px] w-[64px] mb-[24px] rounded-md flex justify-center items-center text-primary">
        {icon}
      </div>
      <h1 className="h-auto font-bold font-mainFont text-title1 text-center mb-[16px] text-primary">
        {title}
      </h1>
      <p className="text-center text-black opacity-70 font-mainFont w-[90%] pb-4">
        {paragraph}
      </p>
      {children}
    </div>
  );
}