

const AllToyCard = ({alltoy}) => {
    const { toyName , price , rating } = alltoy;
    //console.log(alltoy);
    return (
        <div>
            
            <div className="">
           <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src="/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">Toy Name: {toyName}</h2>
    <p>price: {price}</p>
    <p>rating: {rating}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default AllToyCard;