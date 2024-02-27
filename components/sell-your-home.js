const SellYourHome = ({ icon, sellYourHome }) => {
  return (
    <div className="w-[312px] rounded bg-gray-white shadow-[0px_24px_68px_rgba(59,_77,_129,_0.08)] flex flex-col items-start justify-start p-[22px] box-border min-w-[300px] max-w-[340px] text-left text-base text-gray-700 font-body-large-400 mq450:w-[calc(100%_-_40px)]">
      <div className="self-stretch flex flex-col items-start justify-start gap-[24px_0px]">
        <img
          className="w-[78px] h-[78px] relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src={icon}
        />
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px_0px]">
          <h3 className="m-0 relative text-5xl leading-[32px] font-semibold font-inherit text-center mq450:text-lgi mq450:leading-[26px]">
            {sellYourHome}
          </h3>
          <div className="self-stretch relative leading-[24px] text-gray-400">
            We do a free evaluation to be sure you want to start selling.
          </div>
          <div className="relative leading-[24px] text-primary-500">
            Read more
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellYourHome;
