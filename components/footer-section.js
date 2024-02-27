const FooterSection = () => {
  return (
    <footer className="self-stretch flex flex-row items-start justify-start p-[50px] box-border max-w-full text-left text-5xl text-gray-black font-body-regular-400 lg:pl-[25px] lg:pr-[25px] lg:box-border mq450:pt-8 mq450:pb-8 mq450:box-border">
      <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] lg:flex-wrap lg:justify-center">
        <div className="w-[312px] flex flex-col items-start justify-start gap-[20px_0px] text-center text-primary-500 font-body-large-400">
          <div className="flex flex-row items-center justify-center gap-[0px_8px]">
            <img className="h-11 w-11 relative" alt="" src="/houseline.svg" />
            <div className="flex flex-col items-start justify-start">
              <h3 className="m-0 relative text-inherit leading-[24px] font-semibold font-inherit mq450:text-lgi mq450:leading-[19px]">
                REIS
              </h3>
              <div className="relative text-sm leading-[16px] font-medium">
                Real State
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[13px_0px] text-left text-base text-gray-500 font-body-regular-400">
            <h3 className="m-0 relative text-5xl leading-[32px] font-semibold font-inherit text-gray-black mq450:text-lgi mq450:leading-[26px]">
              Contact Us
            </h3>
            <div className="relative leading-[24px]">Call : +123 400 123</div>
            <div className="self-stretch relative leading-[24px]">
              Praesent nulla massa, hendrerit vestibulum gravida in, feugiat
              auctor felis.
            </div>
            <div className="relative leading-[24px] text-gray-700">
              Email: example@mail.com
            </div>
          </div>
          <div className="w-[304px] flex flex-row items-center justify-between gap-[16px]">
            <button className="cursor-pointer [border:none] p-3.5 bg-primary-50 rounded flex flex-col items-center justify-center">
              <img
                className="w-5 h-5 relative"
                alt=""
                src="/social-media-logo.svg"
              />
            </button>
            <button className="cursor-pointer [border:none] p-3.5 bg-primary-50 rounded flex flex-col items-center justify-center">
              <img
                className="w-5 h-5 relative overflow-hidden shrink-0"
                alt=""
                src="/social-media-logo-1.svg"
              />
            </button>
            <button className="cursor-pointer [border:none] p-3.5 bg-primary-50 rounded flex flex-col items-center justify-center">
              <img
                className="w-5 h-5 relative overflow-hidden shrink-0"
                alt=""
                src="/social-media-logo-2.svg"
              />
            </button>
            <div className="rounded bg-primary-50 flex flex-col items-center justify-center p-3.5">
              <img
                className="w-5 h-5 relative overflow-hidden shrink-0"
                alt=""
                src="/social-media-logo-3.svg"
              />
            </div>
            <button className="cursor-pointer [border:none] p-3.5 bg-primary-50 rounded flex flex-col items-center justify-center">
              <img
                className="w-5 h-5 relative overflow-hidden shrink-0"
                alt=""
                src="/social-media-logo-4.svg"
              />
            </button>
          </div>
        </div>
        <div className="w-[173px] flex flex-col items-start justify-start gap-[32px_0px]">
          <h3 className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit mq450:text-lgi mq450:leading-[26px]">
            Features
          </h3>
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px_0px] text-base text-gray-500">
            <div className="relative leading-[24px]">Home</div>
            <div className="relative leading-[24px]">Become a Host</div>
            <div className="relative leading-[24px]">Pricing</div>
            <div className="relative leading-[24px]">Blog</div>
            <div className="relative leading-[24px]">Contact</div>
          </div>
        </div>
        <div className="w-[173px] flex flex-col items-start justify-start gap-[32px_0px]">
          <h3 className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit mq450:text-lgi mq450:leading-[26px]">
            Company
          </h3>
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px_0px] text-base text-gray-500">
            <div className="relative leading-[24px]">About Us</div>
            <div className="relative leading-[24px]">Press</div>
            <div className="relative leading-[24px]">Contact</div>
            <div className="relative leading-[24px]">Careers</div>
            <div className="relative leading-[24px]">Blog</div>
          </div>
        </div>
        <div className="w-[203px] flex flex-col items-start justify-start gap-[32px_0px]">
          <h3 className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit mq450:text-lgi mq450:leading-[26px]">
            Team and policies
          </h3>
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px_0px] text-base text-gray-500">
            <div className="relative leading-[24px]">Terms of servies</div>
            <div className="relative leading-[24px]">Privacy Policy</div>
            <div className="relative leading-[24px]">Security</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
