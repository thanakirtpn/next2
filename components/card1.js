const Card1 = ({ propertyImage }) => {
  return (
    <div className="w-[400px] rounded-3xs bg-gray-white box-border shrink-0 flex flex-col items-start justify-start py-[15px] pr-3.5 pl-3 gap-[23px_0px] min-w-[355px] max-w-[400px] min-h-[467px] text-left text-mini-5 text-gray-700 font-body-large-400 border-[1px] border-solid border-whitesmoke hover:bg-gainsboro-200 hover:cursor-pointer mq450:max-w-full mq450:w-[calc(100%_-_40px)]">
      <img
        className="self-stretch h-[200px] relative rounded-3xs max-w-full overflow-hidden shrink-0 object-cover"
        loading="lazy"
        alt=""
        src={propertyImage}
      />
      <div className="self-stretch flex flex-row items-start justify-start p-2.5 box-border max-w-full">
        <div className="flex-1 relative leading-[20.32px] font-medium inline-block max-w-full">
          92 ALLIUM PLACE, ORLANDO FL 32827
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start p-2.5 text-sm-6 text-primary-500">
        <div className="relative leading-[18.98px] font-semibold whitespace-nowrap">
          $ 590,693
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-2.5 gap-[0px_17px] text-2xs-8 text-gray-500">
        <div className="flex flex-row items-center justify-start gap-[0px_4.35px]">
          <img
            className="h-[17.4px] w-[17.4px] relative min-h-[17px]"
            alt=""
            src="/car.svg"
          />
          <div className="relative leading-[16.27px] font-medium">4</div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[0px_4.35px]">
          <img
            className="h-[17.4px] w-[17.4px] relative min-h-[17px]"
            alt=""
            src="/bathtub.svg"
          />
          <div className="relative leading-[16.27px] font-medium">4</div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[0px_4.35px]">
          <img
            className="h-[17.4px] w-[17.4px] relative min-h-[17px]"
            alt=""
            src="/arrowsout.svg"
          />
          <div className="relative leading-[16.27px] font-medium">
            2,096.00 ft
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-between gap-[20px] text-center text-xs-6">
        <div className="flex flex-row items-center justify-start gap-[0px_5.81px]">
          <img
            className="h-[27.6px] w-[27.6px] relative rounded-[50%] object-cover"
            loading="lazy"
            alt=""
            src="/ellipse-1@2x.png"
          />
          <div className="relative leading-[17.42px] font-medium">
            Jenny Wilson
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 pr-px pl-0 gap-[0px_8.71px]">
          <div className="rounded-[1.45px] bg-primary-50 flex flex-row items-start justify-start py-[2.902620315551758px] pr-[3px] pl-[2.902620315551758px]">
            <img
              className="h-[14.5px] w-[14.5px] relative"
              alt=""
              src="/sharenetwork.svg"
            />
          </div>
          <div className="rounded-[1.45px] bg-primary-50 flex flex-row items-start justify-start py-[2.902620315551758px] pr-[3px] pl-[2.902620315551758px]">
            <img
              className="h-[14.5px] w-[14.5px] relative"
              alt=""
              src="/heart.svg"
            />
          </div>
          <div className="rounded-[1.45px] bg-primary-50 flex flex-row items-start justify-start py-[2.902620315551758px] pr-[3px] pl-[2.902620315551758px]">
            <img
              className="h-[14.5px] w-[14.5px] relative"
              alt=""
              src="/plus.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card1;
