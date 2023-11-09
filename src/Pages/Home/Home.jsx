import { Helmet } from "react-helmet";
import Banner from "./Banner";
import NewsLetter from "./NewsLetter";
import Reviews from "./Reviews";


const Home = () => {
    return (
        <main className='container mx-auto'>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <Reviews></Reviews>
            <NewsLetter></NewsLetter>
        </main>
    );
};

export default Home;