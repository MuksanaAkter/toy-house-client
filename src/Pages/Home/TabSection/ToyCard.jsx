import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const ToyCard = ({toy}) => {
    //console.log(toy);
    const { name , price , rating , picture } = toy;
    return (
        <div className=" ">
           <div className="card card-side bg-sky-100 shadow-xl">
  <figure><img className="h-40 w-30 m-3" src={picture} alt=""/></figure>
  <div className="card-body">
    <h2 className="card-title mt-2"><span className="text-pink-600">Toy Name:</span> {name}</h2>
    <h2 className="card-title my-2"><span className="text-pink-600">Toy Price:</span> {price}</h2>
    
    <div className='d-flex align-items-enter'>
        <Rating
                        placeholderRating={rating}
                        readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    ></Rating>
                    <span className='mx-2'> {rating}</span>
        </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary bg-pink-500 border-0">View Detail</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ToyCard;