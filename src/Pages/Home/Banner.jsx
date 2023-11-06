import { Link } from "react-router-dom";
import Carousel from "./Carousel";



const Banner = () => {
    
    return (
        <section className=''>
            <div className="hero max-h-screen mt-5 bg-base-100">
                <div className="hero-content grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className=''>
                        <h1 data-aos="fade-right"
                        data-aos-duration="1500" className=" text-2xl md:text-5xl text-lime-500 font-bold">We Provide the Best Hotels Worldwide!</h1>
                        <p data-aos="fade-right"
                        data-aos-duration="2000" data-aos-delay="500" className="py-3 md:my-6 font-semibold">Embark on an unforgettable journey to luxurious hotels, where every detail is meticulously crafted to elevate your stay.</p>
                        <Link data-aos="fade-right"
                        data-aos-duration="1000" data-aos-delay="1000" to='/rooms' className='btn btn-primary bg-blue-400 text-white'>Explore more</Link>
                    </div>
                    <div className='' data-aos="fade-up"
                        data-aos-duration="2000">
                        <Carousel></Carousel>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Banner;