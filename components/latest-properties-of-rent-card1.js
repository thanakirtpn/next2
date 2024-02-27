import BlogItem from "./card";

const Blog = () => {
  return (
    <section className="self-stretch flex flex-col items-center justify-start py-[86px] px-0 box-border gap-[39px_0px] max-w-full text-center text-21xl text-primary-800 font-body-large-400 lg:pt-14 lg:pb-14 lg:box-border mq450:pt-9 mq450:pb-9 mq450:box-border mq825:gap-[39px_0px]">
      <div className="self-stretch flex flex-col items-center justify-start gap-[40px_0px] max-w-full mq825:gap-[40px_0px]">
        <div className="w-[728px] flex flex-col items-center justify-start py-0 px-5 box-border gap-[24px_0px] max-w-full">
          <div className="self-stretch relative leading-[48px] font-semibold mq450:text-5xl mq450:leading-[29px] mq825:text-13xl mq825:leading-[38px]">
            Latest Properties of Rent
          </div>
          <div className="self-stretch relative text-xl leading-[28px] text-gray-400 mq450:text-base mq450:leading-[22px]">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[40px] max-w-full text-left text-base text-gray-white mq825:gap-[40px]">
          <BlogItem />
          <BlogItem propBackgroundImage="url('/card-21@3x.png')" />
          <BlogItem propBackgroundImage="url('/card-31@3x.png')" />
          <BlogItem propBackgroundImage="url('/card-41@3x.png')" />
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-3 pr-5 pl-6 bg-primary-500 rounded flex flex-row items-start justify-start whitespace-nowrap hover:bg-steelblue mq450:w-[calc(100%_-_40px)]">
        <div className="relative text-base leading-[24px] font-medium font-body-large-400 text-gray-white text-center">
          Load more listing
        </div>
      </button>
    </section>
  );
};

export default Blog;
