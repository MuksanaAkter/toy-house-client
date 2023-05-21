import { Fade } from "react-reveal";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const GallerySection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

    const pictures = [
        'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1550779055-41205640i9L.jpg?crop=1.00xw:0.874xh;0,0.0520xh&resize=980:*',
        'https://cf.shopee.ph/file/521503401c89dd9c76c595e91f742c34',
        'https://s.alicdn.com/@sc04/kf/H45fe09eff93841f48ac4d4239535a140M.jpg_300x300.jpg',
        'https://cf.shopee.com.my/file/10e46cb87389fa37acc18334981275fb',
        'https://www.littleriders.com.au/assets/full/TB-2007-M.jpg?20230419134613',
        'https://i5.walmartimages.com/asr/2cfc3edd-2665-4768-8a7c-8ed49b4be14d_1.1992a11204db2de3ac663fa3305d3a01.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
        'https://cdn.shopify.com/s/files/1/0724/0007/7115/products/31kry-3vgdL.jpg?v=1676881979',
        'https://i5.walmartimages.com/asr/ddd19a0b-481c-4d3f-a906-7eb6b752abb4.681c8609446ba91a9534333b571ea2a4.jpeg',
        'https://image.smythstoys.com/original/desktop/171511007.jpg'
        // Add more picture URLs here
      ];
    return (
        <div className="bg-blue-100  pb-5">
            <h1 style={{ fontFamily: "Mogra, cursive" }} className="text-center text-5xl font-semibold mb-8 pt-9">Toys Gallery Section</h1>
            <p className=" mx-auto w-1/2 text-center my-3 pb-5">A toy gallery is a collection or display of various toys, showcasing a wide range of options for children or toy enthusiasts. It is a visual representation of different types of toys, including action figures, dolls, vehicles, puzzles, board games, plush toys, and more. The gallery provides an opportunity for people to explore and appreciate the diversity of toys available.</p>
            <Fade buttom >
            <div className="max-w-7xl bg-blue-300 mx-auto shadow-2xl mb-8 pb-8">
              
      <div className="grid md:grid-cols-3 grid-cols-2 gap-8 rounded-lg p-5">
        {pictures.map((picture, index) => (
          <div key={index} className="rounded overflow-hidden">
            
            <div data-aos="flip-left">
            <img src={picture} alt={`Picture ${index + 1}`} className="w-full" />
            </div>
           
          </div>
        ))}
      </div>
   
    </div>
    </Fade>
        </div>
    );
};

export default GallerySection;