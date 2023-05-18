import img from "../../assets/toy-car-thumbnail_prev_ui.png";
 import backgroundImageUrl from "../../assets/Cloudy.svg";
const Banner = () => {

    // const backgroundImageUrl = 'https://png.pngtree.com/thumb_back/fh260/background/20210424/pngtree-world-children-s-day-image_663804.jpg';
  return (
    <div>
      <div
        className="bg-cover bg-center h-auto pb-10"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
       <div className=" max-w-7xl mx-auto flex md:flex-row flex-col justify-center items-center">
        <div className="text-2xl text-black text-center md:text-left md:w-1/2 animate__animated animate__fadeInLeft">
            <h1 style={{ fontFamily: 'Lilita One, cursive' }} className="text-7xl pb-5">
                One Box Toy
            </h1>
        <h1 className="text-5xl pb-5">Make Kids Happy And Healthy</h1>
        <button className="btn btn-primary bg-cyan-800 border-0 mr-5">Explore More</button>
                <button className="btn btn-outline btn-secondary">
                 Shop Now
                </button>  
        </div>
        
                
              
        <div className="bg-cover bg-center animate__animated   animate__fadeInRight">

<img src={img} alt="" />

        </div>
       </div>
      </div>
    </div>
  );
};

export default Banner;
