import Banner from "./Banner";
import Brands from "./Brands";
import GallerySection from "./GallerySection";
import TabSection from "./TabSection/TabSection";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <GallerySection></GallerySection>
            <TabSection></TabSection>
            <Brands></Brands>
        </div>
    );
};

export default Home;