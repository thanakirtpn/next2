const Home = () => {
  return (
    <section className="self-stretch flex flex-col items-center justify-start py-[53px] px-[50px] box-border gap-[45px_0px] max-w-full text-center text-21xl text-primary-800 font-body-large-400 lg:pl-[25px] lg:pr-[25px] lg:box-border mq450:pt-[22px] mq450:pb-[22px] mq450:box-border mq825:gap-[45px_0px] mq825:pt-[34px] mq825:pb-[34px] mq825:box-border">
      <div className="self-stretch flex flex-col items-center justify-start py-0 px-[30px] gap-[24px_0px]">
        <h1 className="m-0 self-stretch relative text-inherit leading-[48px] font-semibold font-inherit mq450:text-5xl mq450:leading-[29px] mq825:text-13xl mq825:leading-[38px]">
          Properties by Area
        </h1>
        <div className="self-stretch relative text-xl leading-[28px] text-gray-400 mq450:text-base mq450:leading-[22px]">
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.
        </div>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-center py-0 px-2.5 box-border max-w-full text-left text-5xl text-gray-white">
        <div className="w-[1300px] flex flex-col items-center justify-start gap-[24px_0px] max-w-[1300px] min-h-[536px] mq1400:max-w-full">
          <div className="self-stretch grid flex-row items-start justify-center gap-[0px_26px] max-w-full grid-cols-[repeat(3,_minmax(312px,_1fr))] lg:justify-center lg:grid-cols-[repeat(2,_minmax(312px,_541px))] mq825:grid-cols-[minmax(312px,_1fr)]">
            <div className="h-[241px] rounded-lg flex flex-row items-start justify-start relative bg-[url('/card-1@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full">
              <div className="!m-[0] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px_0px]">
                <h3 className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit mq450:text-lgi mq450:leading-[26px]">
                  Centerville
                </h3>
                <div className="relative text-base leading-[24px] text-center">
                  25 listings
                </div>
              </div>
            </div>
            <div className="h-[241px] rounded-lg flex flex-row items-start justify-start relative bg-[url('/card-2@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full">
              <div className="!m-[0] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px_0px]">
                <h3 className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit mq450:text-lgi mq450:leading-[26px]">
                  Centerville
                </h3>
                <div className="relative text-base leading-[24px] text-center">
                  25 listings
                </div>
              </div>
            </div>
            <div className="h-[241px] rounded-lg flex flex-row items-start justify-start relative bg-[url('/card-3@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full">
              <div className="!m-[0] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px_0px]">
                <h3 className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit mq450:text-lgi mq450:leading-[26px]">
                  Centerville
                </h3>
                <div className="relative text-base leading-[24px] text-center">
                  25 listings
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center gap-[0px_24px] max-w-full lg:flex-wrap">
            <div className="h-[241px] flex-1 rounded-lg flex flex-row items-start justify-start p-2.5 box-border relative bg-[url('/card-4@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[415px] max-w-full mq825:min-w-full">
              <div className="!m-[0] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px_0px]">
                <h3 className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit mq450:text-lgi mq450:leading-[26px]">
                  Arlington
                </h3>
                <div className="relative text-base leading-[24px] text-center">
                  25 listings
                </div>
              </div>
            </div>
            <div className="h-[241px] flex-1 rounded-lg flex flex-row items-start justify-start p-2.5 box-border relative bg-[url('/card-5@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[415px] max-w-full mq825:min-w-full">
              <div className="!m-[0] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px_0px]">
                <h3 className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit mq450:text-lgi mq450:leading-[26px]">
                  Centerville
                </h3>
                <div className="relative text-base leading-[24px] text-center">
                  25 listings
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
