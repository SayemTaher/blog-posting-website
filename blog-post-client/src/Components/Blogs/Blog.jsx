import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import Swiper styles
import "swiper/swiper-bundle.css";

const Blog = ({ blog }) => {
    const {_id,title,photoUrl,category,description,details,postedTime} = blog
  return (
    <div className="-z-10">
      <style
        dangerouslySetInnerHTML={{
          __html: `
                .swiper-button-next, .swiper-button-prev {
                    color: #F4F8EC;
                     
                }
                .swiper-button-next:after, .swiper-button-prev:after {
                    font-size: 40px;
                    color: #ffffff;
                }
                .swiper-pagination-bullet {
                  background: #ffffff;
                  opacity: 0.6;
                  width: 8px;
                  height: 8px;
                  border-radius: 50%;
              }
              
              .swiper-pagination-bullet-active {
                  background: #292900;
                  opacity: 1;
              }
            `,
        }}
      />

      <Swiper
        data-aos="fade-up"
        spaceBetween={50}
        slidesPerView={1}
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
              <SwiperSlide>
                  <div className="flex gap-2 justify-center rounded-xl items-center p-4 h-[400px] w-[600px]">
                      <div>
                          <img src={photoUrl} className="rounded-xl shadow-xl" alt={`img of ${_id}`} />
                      </div>
                      <div className="flex flex-col justify-between">
                          <div className="flex justify-between items-center mb-2">
                              <p>{category}</p>
                              <button>Wishlist</button>
                          </div>
                          <div className="flex gap-2 flex-col">
                              <h1 className="text-2xl font-bold text-colorNavy">{title}</h1>
                              <p className="text-colorGray">{ description.slice(0,100)}</p>
                          </div>
                          <div>
                              <span>
                                  {details.slice(0, 150)}
                              </span>
                          </div>
                      </div>
                  </div>
         
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};
export default Blog;
