import { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Carousel = () => {
  const slides = [
    {
      url: "https://blog.brevistay.com/wp-content/uploads/2022/07/5236903.jpg",
    },
    {
      url: "https://familyvacationist.com/wp-content/uploads/2020/12/Hard-Rock-Hotel-Riviera-Maya.jpg",
    },
    {
      url: "https://gozayaan.sgp1.digitaloceanspaces.com/media/discount_images/campaign_DOMSTAY1023.jpg",
    },

    {
      url: "https://cf.bstatic.com/xdata/images/hotel/max500/345053324.jpg?k=806254305dd716844c8b78594c4da057aa837de8c42bd7adf5d5397ba75bba5e&o=",
    },
    {
      url: "https://www.travelmate.com.bd/wp-content/uploads/2021/02/Hotel-Motel-Resorts-Coxs-Bazar.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="h-[60vh] pb-5 relative group ">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className=" h-full bg-center bg-cover duration-500 rounded-xl"
      ></div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2 ">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
