import { useMemo } from "react";

const Card = ({ propBackgroundImage }) => {
  const card1Style = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div
      className="h-[426px] w-[370px] rounded-md flex flex-col items-center justify-end p-6 box-border bg-[url('/card-11@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[355px] max-w-[370px] text-left text-base text-gray-white font-body-large-400 mq450:w-[calc(100%_-_40px)]"
      style={card1Style}
    >
      <div className="self-stretch flex flex-row items-end justify-center gap-[0px_32px]">
        <div className="flex flex-row items-start justify-end gap-[0px_8px]">
          <img
            className="h-6 w-6 relative min-h-[24px]"
            loading="lazy"
            alt=""
            src="/mappin.svg"
          />
          <div className="relative leading-[24px] font-medium">Washington</div>
        </div>
        <div className="flex flex-row items-start justify-end gap-[0px_8px]">
          <img
            className="h-6 w-6 relative min-h-[24px]"
            alt=""
            src="/arrowsout-4.svg"
          />
          <div className="relative leading-[24px] font-medium">12000</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
