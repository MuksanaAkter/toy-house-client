import { Helmet } from "react-helmet";
import Banner from "./Banner";
import Brands from "./Brands";
import FaqSection from "./FaqSection";
import GallerySection from "./GallerySection";
import TabSection from "./TabSection/TabSection";
import WeeksPick from "./WeeksPick";

const Home = () => {
    return (
        <div>
             <Helmet>
        <title>Toy House | Home</title>
      </Helmet>
            <Banner></Banner>
            <GallerySection></GallerySection>
            <TabSection></TabSection>
            <WeeksPick></WeeksPick>
            <FaqSection></FaqSection>
            <Brands></Brands>
        </div>
    );
};

export default Home;