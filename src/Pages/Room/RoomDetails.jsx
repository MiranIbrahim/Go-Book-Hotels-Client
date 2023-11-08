import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { Carousel } from "react-responsive-carousel";
import { BsStarHalf } from "react-icons/bs";
import axios from "axios";
import { Swal } from "sweetalert2/dist/sweetalert2.all";

const RoomDetails = () => {
  const room = useLoaderData();
  const {
    _id,
    image,
    reviews,
    description,
    price_per_night,
    room_size,
    availability,
    room_images,
    special_offer,
  } = room;

  const [date, setDate] = useState();
  const user = useContext(AuthContext);
  const userEmail = user.user.email;
  console.log(userEmail);
  console.log(date);
  const handleBooking = (_id, image, price_per_night, room_size, date) => {
    const bookingItem = {
      _id,
      email: userEmail,
      image,
      price_per_night,
      room_size,
      date,
    };
    console.log(bookingItem);

    axios
      .post("http://localhost:5000/create-booking", bookingItem, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const data = response.data;
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Item added to cart",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="card bg-base-100 shadow-xl w-3/4 mx-auto">
      <figure>
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
              src={image}
            />
          </div>
          <div className="rounded-xl">
            <img
              className="h-[60vh] bg-center bg-cover duration-500 rounded-xl"
              src={room_images[0]}
            />
          </div>
          <div className="rounded-xl">
            <img
              className="h-[60vh] bg-center bg-cover duration-500 rounded-xl"
              src={room_images[1]}
            />
          </div>
        </Carousel>
      </figure>
      <div className=" md:flex">
        <div className="card-body">
          <h2 className="card-title">
            {special_offer && (
              <span className="animate-bounce text-red-700">
                ***{special_offer}***
              </span>
            )}
            {availability ? (
              <>
                <div className="badge badge-secondary text-white">
                  <span>Available</span>
                </div>
              </>
            ) : (
              <>
                <div className="badge badge-secondary text-white bg-red-400">
                  <span>Not Available right now</span>
                </div>
              </>
            )}
          </h2>
          <p>
            <span className="font-bold">Room Size:</span> {room_size}
          </p>
          <p>
            <span className="font-bold">Price per night: </span>$
            {price_per_night}
          </p>
          <p>
            <span className="font-bold">Room Size:</span> {room_size}
          </p>

          <p>{description}</p>
        </div>
        <div className="flex flex-col items-center justify-center card-body">
          {availability && (
            <>
              <h2 className="text-xl">Choose date for booking</h2>
              <div className="flex flex-col justify-center items-center gap-5">
                <input
                  type="date"
                  name="date"
                  onBlur={(e) => setDate(e.target.value)}
                  className="border p-3 rounded-md bg-blue-400"
                />
                <button
                  onClick={() => {
                    document.getElementById("my_modal_5").showModal();
                  }}
                  className="btn btn-primary bg-lime-500 text-white md:h-32 w-32"
                  disabled= {!date && true}
                >
                  Book Now
                </button>
                <dialog
                  id="my_modal_5"
                  className="modal modal-bottom sm:modal-middle"
                >
                  <div className="modal-box">
                    <h3 className="font-bold text-lg text-center">
                      Booking Summery
                    </h3>
                    <p>
                      <span className="font-bold">Room Size:</span> {room_size}
                    </p>
                    <p>
                      <span className="font-bold">Price per night: </span>$
                      {price_per_night}
                    </p>
                    <p>
                      <span className="font-bold">Room Size:</span> {room_size}
                    </p>
                    <p>
                      <span className="font-bold">Check in date:</span> {date}
                    </p>
                    <p className="py-4">
                      Press OK key or click the button below to close
                    </p>
                    <div className="modal-action">
                      <form method="dialog">
                        <button className="btn mr-5">Cancel</button>
                        {/* if there is a button in form, it will close the modal */}
                        <button
                          onClick={() => {
                            handleBooking(
                              _id,
                              image,
                              price_per_night,
                              room_size,
                              date
                            );
                          }}
                          className="btn"
                        >
                          OK
                        </button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </div>
            </>
          )}
        </div>
      </div>
      <h2 className="text-2xl mx-auto bg-blue-400 w-full text-center">
        Reviews
      </h2>
      <div className="card-actions card-body">
        {reviews.map((review) => (
          <div key={_id} className="card border">
            <div className="card-body text-center">
              <div className="avatar justify-center">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={review.author_image} alt="Avatar" />
                </div>
              </div>
              <h2 className="font-bold">{review.author}</h2>
              <div className="flex gap-2 items-center justify-center">
                <BsStarHalf className="text-orange-400"></BsStarHalf>
                <small className="text-left ">{review.rating}</small>
              </div>
              <p className="text-left">{review.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomDetails;
