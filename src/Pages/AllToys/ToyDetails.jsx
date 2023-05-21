import { Helmet } from "react-helmet";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";



const ToyDetails = () => {
    //console.log(toy);
    const toyDetails = useLoaderData()
    //console.log(toyDetails);
    const { toyName ,quantity, sellername , email, detail , price , rating, image , category} = toyDetails;

    return (
        <div className="bg-base-200">
          <Helmet>
        <title>Toy House | Detail</title>
      </Helmet>
      <h1 style={{ fontFamily: "Mogra, cursive" }} className="text-center  text-pink-600 md:text-4xl text-3xl font-semibold mb-8 pt-9">Toys Details</h1>

            <div className="hero  ">
            
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={image} className="max-w-md rounded-lg shadow-2xl w-full" />
    <div>
      <h1 style={{ fontFamily: 'Lilita One, cursive' }}  className="text-5xl font-bold">{toyName}</h1>
      <p className="py-6 ">{detail}</p>
      <h2 className="card-title my-2"><span className="text-pink-600">Seller Name</span> {sellername}</h2>
      <h2 className="card-title my-2"><span className="text-pink-600">Seller Name:</span> {email}</h2>
      <h2 className="card-title my-2"><span className="text-pink-600">Toy Sub-Category:</span> {category}</h2> 
      <h2 className="card-title my-2"><span className="text-pink-600">Toy Quantity:</span> {quantity}</h2>
      <h2 className="card-title my-2"><span className="text-pink-600">Toy Price:</span> {price}</h2>
      <div className='d-flex align-items-enter my-3'>
      <span className="text-pink-600 text-lg font-bold mr-3">Rating:</span>
        <Rating
                         placeholderRating={rating}
                         readonly
                      emptySymbol={<FaRegStar></FaRegStar>}
                         placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                         fullSymbol={<FaStar></FaStar>}
                  ></Rating>
                     <span className='mx-2'> {rating}</span>
         </div>
         <button className="btn btn-primary bg-cyan-800 border-0 mr-5">Explore More</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ToyDetails;