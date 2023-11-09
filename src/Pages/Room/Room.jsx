import axios from "axios";
import { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import { Helmet } from "react-helmet";

const Room = () => {
  const [rooms, setRooms] = useState([]);
  const [sortBy, setSortBy] = useState("asc");

  useEffect(() => {
    let url = "http://localhost:5000/rooms";      

  if (sortBy) {
    url += `?sort=${sortBy}`;
  }
    axios.get(url).then((data) => {
      console.log(data.data);
      setRooms(data.data);
    });
  }, [sortBy]);
  return (
    <div>
      <Helmet>
        <title>Rooms</title>
      </Helmet>
      <section className="flex flex-col items-center gap-5">
      <select
        onChange={(e) => {
          setSortBy(e.target.value);
        }}
        className="select select-info  m-5"
      >
        <option disabled selected>
          Sort Price
        </option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </select>

      <div className="container mx-auto grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {rooms?.map((room) => (
          <RoomCard key={room.id} room={room}></RoomCard>
        ))}
      </div>
    </section>
    </div>
  );
};

export default Room;
