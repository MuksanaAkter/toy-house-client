import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../Providers/AuthProvider";
// import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [mytoys, setmytoy] = useState([]);
  //console.log(mytoys);
  useEffect(() => {
    fetch(`https://toy-house-server-one.vercel.app/mytoys/${user?.email}`)
      .then((res) => res.json())
      .then((result) => {
        setmytoy(result);
      });
  }, [user]);

  const handleDelete = (id) => {
    const proceed = confirm("Are You sure you want to delete");
    if (proceed) {
      fetch(`https://toy-house-server-one.vercel.app/mytoys/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Deleted Toy Successfully',
               
          })
            const remaining = mytoys.filter((mytoy) => mytoy._id !== id);
            setmytoy(remaining);
          }
        });
    }
  };

  return (
    <div className=" pb-10">
         <Helmet>
        <title>Toy House | Mytoys</title>
      </Helmet>
      <div style={{ fontFamily: "Mogra, cursive" }} className="text-center text-5xl font-bold py-8 ">My Toys</div>
      <hr className="w-1/4 mx-auto  pb-4" />
      <table className="table-auto max-w-7xl mx-auto w-full">
        <thead className="py-5">
          <tr>
            <th className="mx-3">#</th>
            <th>Image</th>
            <th>Toy Name</th>
            <th className="mx-3 p-3">Seller Name</th>
            <th>Seller Email</th>
            <th>Price $</th>
            <th className="mx-3 p-3">Quantity</th>
            <th>Rating</th>
            <th className="w-60">Description</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className="shadow-lg pt-5">
          {mytoys?.map((mytoy, index) => (
            <tr
              className=" bg-cyan-100  border-pink-400 border-4 gap-y-3 my-5 shadow-md"
              key={mytoy._id}
            >
              <td className=" text-center p-3">{index + 1}</td>
              <td className="text-center p-3">
                <img className="h-20 w-20" src={mytoy.image} alt="" />
              </td>
              <td className="text-center p-3">{mytoy.toyName}</td>
              <td className="text-center p-3">{mytoy.sellername}</td>
              <td className="text-center p-3">{mytoy.email}</td>
              <td className="text-center p-3">{mytoy.price}</td>
              <td className="text-center p-3"> {mytoy.quantity}</td>
              <td>{mytoy.rating}</td>
              <td className="w-60 px-5 text-center">
              {mytoy?.detail?.length < 40 ? <>{mytoy?.detail}</> :
                        <>{mytoy.detail.slice(0, 40)}... </>
                    }</td>
              <td>
                <button
                  
                  className="btn btn-ghost btn-sm text-sm bg-green-500 m-2"
                ><Link to={`/update/${mytoy._id}`}>  Update</Link>
                
                </button>
              </td>
              <td>
                <button
                  onClick={() => handleDelete(mytoy._id)}
                  className="btn btn-ghost btn-sm text-sm bg-orange-500 m-2"
                >
                  delate
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
