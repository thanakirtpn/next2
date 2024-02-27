const LatestPropertiesOfRentCard = () => {
  return (
    <section className="self-stretch bg-primary-50 flex flex-row flex-wrap items-start justify-center py-[86px] px-[5px] box-border max-w-full text-center text-21xl text-primary-800 font-body-large-400 mq450:gap-[39px] mq450:pt-9 mq450:pb-9 mq450:box-border mq825:pt-14 mq825:pb-14 mq825:box-border">
      <div className="w-[900px] flex flex-col items-center justify-start py-0 px-2.5 box-border gap-[40px_0px] max-w-[900px] lg:max-w-full mq450:gap-[40px_0px]">
        <div className="w-[728px] flex flex-col items-center justify-start py-0 px-5 box-border gap-[24px_0px] max-w-full">
          <h1 className="m-0 self-stretch relative text-inherit leading-[48px] font-semibold font-inherit mq450:text-5xl mq450:leading-[29px] mq825:text-13xl mq825:leading-[38px]">
            Contact us
          </h1>
          <div className="self-stretch relative text-xl leading-[28px] text-gray-400 mq450:text-base mq450:leading-[22px]">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch rounded-xl bg-gray-white shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] flex flex-col items-center justify-start py-7 px-[30px] box-border gap-[17px_0px] max-w-full text-left text-5xl text-darkslategray font-poppins mq450:pt-5 mq450:pb-5 mq450:box-border">
          <div className="self-stretch flex flex-col items-center justify-start gap-[6px_0px]">
            <h3 className="m-0 self-stretch relative text-inherit leading-[36px] font-bold font-inherit mq450:text-lgi mq450:leading-[29px]">
              Enquiry Form
            </h3>
            <div className="self-stretch relative text-lg leading-[30px] font-components-input-text text-slategray">
              Are you looking for details about a certain property? Ask us a
              question using the form below.
            </div>
          </div>
          <form className="m-0 self-stretch flex flex-col items-center justify-start gap-[10px_0px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-center gap-[0px_10px] max-w-full mq825:flex-wrap">
              <div className="flex-1 rounded box-border flex flex-col items-start justify-start py-4 px-3 min-w-[263px] max-w-full border-[1px] border-solid border-gray1">
                <input
                  className="w-[78px] [border:none] [outline:none] font-components-input-text text-base bg-[transparent] h-6 relative tracking-[0.15px] leading-[24px] text-darkgray text-left flex items-center"
                  placeholder="First name"
                  type="text"
                />
              </div>
              <div className="flex-1 rounded box-border flex flex-col items-start justify-center py-4 px-3 min-w-[263px] max-w-full border-[1px] border-solid border-gray1">
                <input
                  className="w-[77px] [border:none] [outline:none] font-components-input-text text-base bg-[transparent] h-6 relative tracking-[0.15px] leading-[24px] text-darkgray text-left flex items-center"
                  placeholder="Last name"
                  type="text"
                />
              </div>
            </div>
            <div className="self-stretch rounded flex flex-col items-start justify-start py-4 px-3 border-[1px] border-solid border-gray1">
              <input
                className="w-[58px] [border:none] [outline:none] font-components-input-text text-base bg-[transparent] h-6 relative tracking-[0.15px] leading-[24px] text-darkgray text-left flex items-center"
                placeholder="Email id"
                type="text"
              />
            </div>
            <div className="self-stretch h-[105px] rounded box-border flex flex-col items-start justify-start p-3 border-[1px] border-solid border-gray1">
              <input
                className="w-[174px] [border:none] [outline:none] font-components-input-text text-base bg-[transparent] h-6 relative tracking-[0.15px] leading-[24px] text-darkgray text-left flex items-center"
                placeholder="Comments or questions"
                type="text"
              />
            </div>
            <button className="cursor-pointer [border:none] p-0 bg-primary-500 w-[222px] h-[46px] rounded flex flex-col items-center justify-center hover:bg-steelblue">
              <div className="w-[203.1px] relative text-base font-components-input-text text-gray-white text-center inline-block">
                Submit
              </div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LatestPropertiesOfRentCard;
