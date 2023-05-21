import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";



const ToyDetails = () => {
    //console.log(toy);
    const toyDetails = useLoaderData()
    //console.log(toyDetails);
    const { toyName ,quantity, sellername , email, detail , price , rating, image , category} = toyDetails;

    return (
        <div>

            <div className="hero min-h-screen bg-base-200">
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
      <button className="btn btn-outline btn-secondary  my-3">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ToyDetails;