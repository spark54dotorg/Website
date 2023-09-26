import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { _FIGMA, _GOOGLE, _UDACITY, _UNREAL } from "../../assets/png";
import { Link } from "react-router-dom";
import { _OUTLINK } from "../../assets/svgs";

const Brands = () => {
  return (
    <>
      <div className=" w-[90%] md:w-[1280px] mx-auto my-20">
        <div className="my-20 flex md:items-center items-start justify-between md:flex-row flex-col gap-10">
          <h1 className="md:text-[34px] text-[24px] font-semibold">
            Brands we love ❤️
          </h1>

          <Link to="/">
            <span className="flex md:flex-row flex-row-reverse gap-5 text-[#909090] hover:text-[#D76A03]">
              <p className=" md:text-right text-left text-[20px] ">
                See all brands <br></br>we are backed by
              </p>
              <img src={_OUTLINK.img} alt={_OUTLINK.alt} />
            </span>
          </Link>
        </div>
        <Swiper
          spaceBetween={30}
          slidesPerView={2}
          loop={true}
          autoplay={true}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
        >
          <SwiperSlide>
            <img src={_FIGMA.img} alt={_FIGMA.alt} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={_UNREAL.img} alt={_UNREAL.alt} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={_GOOGLE.img} alt={_GOOGLE.alt} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={_UDACITY.img} alt={_UDACITY.alt} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Brands;
