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
        // <div className="card w-96 bg-base-100 border">
        //   <figure className="p-5">
        //     <Link to={`/room/${_id}`}>
        //       <img src={image} alt="Shoes" className="rounded-xl h-[40vh] bg-center bg-cover" />
        //     </Link>
        //   </figure>
        //   <div className="card-body">
        //     <h2 className="card-title">Shoes!</h2>
        //     <p>Total Reviews: {reviews.length}</p>
        //     <div className="card-actions">
        //       <button className="btn btn-primary">Buy Now</button>
        //     </div>
        //   </div>
        // </div>
        <div className="card max-w-full bg-base-100 border sm:max-w-xs md:max-w-sm lg:max-w-lg">
          <figure className="p-5">
            <img src={image} alt="" className="w-full max-h-48 rounded-md " />
          </figure>
          <div className="card-body">
            <p className="text-lg font-medium flex items-center gap-1">
              Total Reviews: {reviews.length}
            </p>
            <div className="card-actions justify-end flex">
              <Link to={`/productDetails/${_id}`}>
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
