const TopHeader = () => {
  return (
    <header className="self-stretch h-[98px] bg-gray-white flex flex-row items-center justify-center py-[22px] px-20 box-border top-[0] z-[99] sticky max-w-full text-center text-5xl text-primary-500 font-body-large-400 lg:pl-10 lg:pr-10 lg:box-border">
      <div className="flex-1 flex flex-row items-center justify-between gap-[20px] max-w-full">
        <div className="flex flex-row items-center justify-center gap-[0px_8px]">
          <img
            className="h-11 w-11 relative"
            loading="lazy"
            alt=""
            src="/houseline.svg"
          />
          <div className="flex flex-col items-start justify-start">
            <h2 className="m-0 relative text-inherit leading-[24px] font-semibold font-inherit whitespace-nowrap">
              REIS
            </h2>
            <div className="relative text-sm leading-[16px] font-medium whitespace-nowrap">
              Real State
            </div>
          </div>
        </div>
        <div className="w-[750px] flex flex-row items-center justify-end gap-[0px_36px] max-w-full text-sm text-primary-900 lg:w-0 mq825:gap-[0px_36px]">
          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] lg:hidden">
            <div className="relative leading-[22px]">HOME</div>
            <div className="relative leading-[22px] whitespace-nowrap">
              ABOUT US
            </div>
            <div className="relative leading-[22px] whitespace-nowrap">
              OUR AGENTS
            </div>
            <div className="relative leading-[22px] font-semibold">
              PROPERTIES
            </div>
            <div className="relative leading-[22px]">GALLERY</div>
            <div className="relative leading-[22px]">BLOG</div>
            <div className="relative leading-[22px] whitespace-nowrap">
              CONTACT US
            </div>
            <div className="relative leading-[22px]">SEARCH</div>
          </div>
          <div className="hidden flex-row items-center justify-center">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 object-cover"
              alt=""
              src="/hamburgermenu@2x.png"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
