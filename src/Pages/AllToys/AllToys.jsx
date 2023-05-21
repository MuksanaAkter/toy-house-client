import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";


const AllToys = () => {
  const [alltoys, setalltoy] = useState([]);
  // const [toys, settoy] = useState([])
  const [searchText, setSearchText] = useState("");
  //console.log(searchText);
  useEffect(() => {
    fetch("https://toy-house-server-one.vercel.app/alltoys")
      .then((res) => res.json())
      .then((result) => {
        setalltoy(result);
      });
  }, []);
  

  const handleSearch = () => {
    fetch(`https://toy-house-server-one.vercel.app/getToys/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        setalltoy(data);

       
      });
  };


  return (
    <div>
      <Helmet>
        <title>Toy House | All Toys</title>
      </Helmet>
      <div style={{ fontFamily: "Mogra, cursive" }}  className="text-center text-5xl font-bold py-8 ">ALL Toys</div>
      <hr className="w-1/4 mx-auto  pb-4" />

      <div className="search-box p-2 text-center">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            className="p-1 border-2"
          />{" "}
          <button className="bg-cyan-700 py-2 px-4 text-white rounded-md"
          onClick={handleSearch}
          >Search</button>
        </div>


      <table className="table-auto max-w-7xl mx-auto mt-5 mb-10 w-full">
        <thead className="py-5">
          <tr>
            <th className="mx-3">#</th>
            <th>Image</th>
            <th>Toy Name</th>
            <th className="mx-3 p-3">Seller Name</th>
            <th>Category</th>
            <th>Price $</th>
            <th className="mx-3 p-3">Quantity</th>
            <th>view</th>
          </tr>
        </thead>
        <tbody className="shadow-lg pt-5">
          {alltoys?.map((alltoy, index) => (
            <tr className=" bg-cyan-100  border-pink-400 border-4 gap-y-3 all-5 shadow-md" key={alltoy._id}>
              <td className=" text-center p-3">{index + 1}</td>
              <td className="text-center p-3">
                <img className="h-20 w-20" src={alltoy.image} alt="" />
              </td>
              <td className="text-center p-3">{alltoy.toyName}</td>
              <td className="text-center p-3">{alltoy.sellername}</td>
              <td className="text-center p-3">{alltoy.category}</td>
              <td className="text-center p-3">{alltoy.price}</td>
              <td className="text-center p-3"> {alltoy.quantity}</td>
              <td>
              <button className="btn btn-ghost btn-sm text-sm bg-green-500 m-2">
              <Link to={`/detail/${alltoy._id}`}>View Detail</Link>
              </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default AllToys;
