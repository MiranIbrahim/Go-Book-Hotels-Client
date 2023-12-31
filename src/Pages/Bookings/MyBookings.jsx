import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingTable from "./BookingTable";

import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const email = user.email;
  console.log(user, email);
  const url = `http://localhost:5000/bookings?email=${email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [url]);

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bookings/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
              const remaining = bookings.filter(
                (booking) => booking._id !== _id);
              setBookings(remaining);
            }
          });
      }
    });
  };

  const handleUpdateBooking = (id, newDate) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = bookings.filter((booking) => booking._id !== id);
          const updated = bookings.find((booking) => booking._id === id);
          updated.date = newDate;
          const newBookings = [updated, ...remaining];
          setBookings(newBookings);
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>Bookings</title>
      </Helmet>
      <div>
      <h2 className="text-5xl">Your bookings: {bookings.length}</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full text-center">
          {/* head */}
          <thead>
            <tr>
              <th>
                Cancel
              </th>
              <th>Image</th>
              <th>Room size</th>
              <th>Date</th>
              <th>Price</th>
              <th>Update date</th>
              <th>Give review</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingTable
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleUpdateBooking={handleUpdateBooking}
              ></BookingTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default MyBookings;
