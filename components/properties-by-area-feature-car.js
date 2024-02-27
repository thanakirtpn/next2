import ServiceItem from "./sell-your-home";

const Service = () => {
  return (
    <section className="self-stretch bg-primary-50 flex flex-col items-center justify-start py-[70px] px-0 text-center text-21xl text-primary-800 font-body-large-400 lg:gap-[107px_0px] mq825:gap-[107px_0px] mq825:pt-[45px] mq825:pb-[45px] mq825:box-border">
      <div className="self-stretch flex flex-col items-center justify-start pt-[75px] px-0 pb-0 box-border gap-[54px_0px] max-w-[95%] mq825:gap-[54px_0px] mq825:pt-[49px] mq825:box-border">
        <div className="self-stretch flex flex-col items-center justify-start py-0 px-[30px] box-border gap-[24px_0px] max-w-[95%]">
          <h1 className="m-0 self-stretch relative text-inherit leading-[48px] font-semibold font-inherit mq450:text-5xl mq450:leading-[29px] mq825:text-13xl mq825:leading-[38px]">
            Properties by Area
          </h1>
          <div className="self-stretch relative text-xl leading-[28px] text-gray-400 mq450:text-base mq450:leading-[22px]">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[86px] text-left text-base text-gray-700 mq450:gap-[86px] mq825:gap-[86px]">
          <ServiceItem icon="/icon.svg" sellYourHome="Sell your home" />
          <ServiceItem icon="/icon-1.svg" sellYourHome="Rent your home" />
          <ServiceItem icon="/icon-2.svg" sellYourHome="Buy a home" />
          <ServiceItem icon="/icon-3.svg" sellYourHome="Free marketing" />
        </div>
      </div>
    </section>
  );
};

export default Service;
