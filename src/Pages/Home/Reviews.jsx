const Reviews = () => {
  const url1 = "https://i.ibb.co/sC68VsM/pexels-italo-melo-2379004.jpg";
  return (
    <section className="my-20 md:my-32">
      <h2 className="text-center text-lime-500 font-extrabold text-3xl md:text-4xl">
        Our Clients Around The World
      </h2>
      <h5 className="text-center font-bold text-blue-400 text-lg md:text-2xl mt-3">
        Our Client’s Speak
      </h5>

      <div className="grid grid-cols-1 my-10 md:grid-cols-3 px-2 gap-6 font-bold">
        <div className="card bg-blue-400 text-white hover:bg-success transition ease-in-out duration-1000">
          <div className="card-body text-center">
            <div className="avatar justify-center">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={url1} alt="Avatar" />
              </div>
            </div>
            <h2 className="font-bold">Miran Ibrahim</h2>
            <small className=" text-left items-start m-0">Student</small>
            <small className="text-left ">Ratings: 5</small>
            <p className="text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              provident cum exercitationem eos rerum recusandae temporibus
              delectus vitae veritatis illo? Ex voluptatum nulla odio corrupti
              molestias itaque sequi voluptatibus dolores saepe.
            </p>
          </div>
        </div>

        <div className="card bg-secondary text-white hover:bg-success transition ease-in-out duration-1000">
          <div className="card-body text-center">
            <div className="avatar justify-center">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={url1} alt="Avatar" />
              </div>
            </div>
            <h2 className="font-bold">Miran Ibrahim</h2>
            <small className=" text-left items-start m-0">Student</small>
            <small className="text-left ">Ratings: 5</small>
            <p className="text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              provident cum exercitationem eos rerum recusandae temporibus
              delectus vitae veritatis illo? Ex voluptatum nulla odio corrupti
              molestias itaque sequi voluptatibus dolores saepe.
            </p>
          </div>
        </div>

        <div className="card bg-secondary text-white hover:bg-success transition ease-in-out duration-1000">
          <div className="card-body text-center">
            <div className="avatar justify-center">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={url1} alt="Avatar" />
              </div>
            </div>
            <h2 className="font-bold">Miran Ibrahim</h2>
            <small className=" text-left items-start m-0">Student</small>
            <small className="text-left ">Ratings: 5</small>
            <p className="text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              provident cum exercitationem eos rerum recusandae temporibus
              delectus vitae veritatis illo? Ex voluptatum nulla odio corrupti
              molestias itaque sequi voluptatibus dolores saepe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
