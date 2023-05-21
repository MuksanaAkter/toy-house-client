import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";

const ToyCard = ({toy}) => {
    //console.log(toy);
    const { name , price , rating , image } = toy;
    return (
        <div className=" ">
          <Fade buttom>
           <div className="card card-side bg-sky-100 shadow-xl">
  <figure><img className="h-40 w-30 m-3" src={image} alt=""/></figure>
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
      <button className="btn btn-primary bg-pink-500 border-0"><Link to={`/detail/${toy._id}`}>View Detail</Link></button>
    </div>
  </div>
</div>
</Fade>
        </div>
    );
};

export default ToyCard;