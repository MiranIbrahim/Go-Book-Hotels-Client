import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Carousels = () => {
  const url1 =
    "https://blog.brevistay.com/wp-content/uploads/2022/07/5236903.jpg";

  const url2 =
    "https://familyvacationist.com/wp-content/uploads/2020/12/Hard-Rock-Hotel-Riviera-Maya.jpg";

  const url3 =
    "https://gozayaan.sgp1.digitaloceanspaces.com/media/discount_images/campaign_DOMSTAY1023.jpg";

  const url4 =
    "https://cf.bstatic.com/xdata/images/hotel/max500/345053324.jpg?k=806254305dd716844c8b78594c4da057aa837de8c42bd7adf5d5397ba75bba5e&o=";

  const url5 =
    "https://www.travelmate.com.bd/wp-content/uploads/2021/02/Hotel-Motel-Resorts-Coxs-Bazar.jpg";

  return (
    <Carousel
      className="h-[60vh] pb-5 relative group "
      showArrows={1}
      showStatus={0}
      showIndicators={1}
      infiniteLoop={1}
      showThumbs={0}
      useKeyboardArrows={1}
      autoPlay={1}
      stopOnHover={1}
      swipeable={1}
      dynamicHeight={1}
      emulateTouch={1}
      autoFocus={0}
      thumbWidth={100}
      selectedItem={100}
      interval={3000}
      transitionTime={1000}
      swipeScrollTolerance={0}
    >
      <div className="rounded-xl">
        <img
          className="h-[60vh] bg-center bg-cover duration-500 rounded-xl"
          src={url1}
        />
      </div>
      <div className="rounded-xl">
        <img
          className="h-[60vh] bg-center bg-cover duration-500 rounded-xl"
          src={url2}
        />
      </div>
      <div className="rounded-xl">
        <img
          className="h-[60vh] bg-center bg-cover duration-500 rounded-xl"
          src={url3}
        />
      </div>
      <div className="rounded-xl">
        <img
          className="h-[60vh] bg-center bg-cover duration-500 rounded-xl"
          src={url4}
        />
      </div>
      <div className="rounded-xl">
        <img
          className="h-[60vh] bg-center bg-cover duration-500 rounded-xl"
          src={url5}
        />
      </div>
    </Carousel>
  );
};

export default Carousels;
