import { Link } from "react-router-dom";

const RoomCard = ({ room }) => {
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
  return (
    <>
      {1 && (
        <div className="card max-w-full bg-base-100 border sm:max-w-xs md:max-w-sm lg:max-w-lg">
          <figure className="p-5">
            <img src={image} alt="" className="w-full max-h-48 rounded-md " />
          </figure>
          <div className="card-body">
            
            <p className="text-lg font-medium flex items-center gap-1">
              Total Reviews: {reviews.length}
            </p>
            <p className="text-lg font-medium flex items-center gap-1">
              Price_per night: $ {price_per_night}
            </p>
            <p className="text-lg font-medium flex items-center gap-1">
              {
                special_offer && <span className="animate-bounce text-red-500">Offer availabale!! see details</span>
              }
            </p>

            <div className="card-actions justify-end flex">
              <Link to={`/roomDetails/${_id}`}>
                <button className="btn btn-primary bg-lime-500 text-white">Details</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RoomCard;
