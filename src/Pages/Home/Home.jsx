import Banner from "./Banner";
import Brands from "./Brands";
import GallerySection from "./GallerySection";
import TabSection from "./TabSection/TabSection";
import WeeksPick from "./WeeksPick";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <GallerySection></GallerySection>
            <TabSection></TabSection>
            <WeeksPick></WeeksPick>
            <Brands></Brands>
        </div>
    );
};

export default Home;