import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const ReviewForm = ({booking}) => {
  const { user } = useContext(AuthContext);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const name = user.displayName;
  const author_image = user.photoURL;

  const {_id} = booking;
  const handleReview = () => {
    
    const review = {
        _id,
        name,
        author_image,
        rating,
        feedback,
    };
    console.log(review);

    fetch(
        "http://localhost:5000/reviews",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(review),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    
  }


  return (
    <th>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Click to give review
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Enter rating out of 5</span>
              </label>
              <input
                type="number"
                placeholder=""
                className="input input-bordered"
                required
                onBlur={(e)=> setRating(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Give feedback</span>
              </label>
              <input
                type="text"
                placeholder=""
                className="input input-bordered"
                required
                onBlur={(e)=> setFeedback(e.target.value)}
              />
            </div>
          </form>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button onClick={()=>handleReview(name,rating,feedback,author_image)} className="btn">OK</button>
            </form>
          </div>
        </div>
      </dialog>
    </th>
  );
};

export default ReviewForm;
