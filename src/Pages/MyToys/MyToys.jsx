import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../Providers/AuthProvider";

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

  return (
    <div className=" pb-10">
      <div className="text-center text-5xl font-bold py-8 ">My Toys</div>
      {/* <div className="max-w-7xl mx-auto">
  <table className="min-w-full">
    <thead>
      <tr className="py-5 text-start">
        <th className=" text-start py-5 px-4  border-gray-300 text-2xl font-semibold">Toy Picture</th>
        <th className="text-start text-2xl font-semibold py-5 px-4  border-gray-300">Toy Name</th>
        <th className=" text-start text-2xl font-semibold py-5 px-4  border-gray-300">Price</th>
        <th className=" text-start text-2xl font-semibold py-2 px-4  border-gray-300">Quantity</th>
        <th className="text-start text-2xl font-semibold py-2 px-4  border-gray-300">Update</th>
        <th className=" text-start text-2xl font-semibold py-5 px-4  border-gray-300">Delete</th>
       
      </tr>
    </thead>
  </table>
</div> */}
      <table className="table-auto max-w-7xl mx-auto">
        <thead>
          <tr>
            <th className="mx-3">#</th>
            <th>Image</th>
            <th>Toy Name</th>
            <th className="mx-3 p-3">Seller Name</th>
            <th>Seller Email</th>
            <th>Price</th>
            <th className="mx-3 p-3">Quantity</th>
            <th>Rating</th>
            <th className="w-60">Description</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className="">
          {mytoys?.map((mytoy, index) => (
            <tr className=" bg-cyan-100  border-b" key={mytoy._id}>
              <td className=" text-center p-3">{index + 1}</td>
              <td className="text-center p-3">
                <img className="h-14 w-16" src={mytoy.image} alt="" />
              </td>
              <td className="text-center p-3">{mytoy.toyName}</td>
              <td className="text-center p-3">{mytoy.sellername}</td>
              <td className="text-center p-3">{mytoy.email}</td>
              <td className="text-center p-3">{mytoy.price}</td>
              <td className="text-center p-3"> {mytoy.quantity}</td>
              <td>{mytoy.rating}</td>
              <td className="w-60 px-5 text-center">
              {mytoy.detail.length < 40 ? <>{mytoy.detail}</> :
                        <>{mytoy.detail.slice(0, 40)}... </>
                    }</td>
              <td>
              <button className="btn btn-ghost btn-sm text-sm bg-green-500 m-2">
                Update
              </button>
              </td>
              <td>
              <button className="btn btn-ghost btn-sm text-sm bg-orange-500 m-2">
                delate
              </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <div className=" max-w-7xl mx-auto  ">
        {mytoys?.map((mytoy) => (
          <MyToyTable key={mytoy._id} mytoy={mytoy}></MyToyTable>
        ))}
      </div> */}
    </div>
    //     <div className="overflow-x-auto w-full">
    //     <table className="table w-full">
    //       {/* head */}
    //       <thead>
    //         <tr>
    //           <th>
    //             <label>
    //               <input type="checkbox" className="checkbox" />
    //             </label>
    //           </th>
    //           <th>Name</th>
    //           <th>Job</th>
    //           <th>Favorite Color</th>
    //           <th></th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {/* row 1 */}
    //         <tr>
    //           <th>
    //             <label>
    //               <input type="checkbox" className="checkbox" />
    //             </label>
    //           </th>
    //           <td>
    //             <div className="flex items-center space-x-3">
    //               <div className="avatar">
    //                 <div className="mask mask-squircle w-12 h-12">
    //                   <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
    //                 </div>
    //               </div>
    //               <div>
    //                 <div className="font-bold">Hart Hagerty</div>
    //                 <div className="text-sm opacity-50">United States</div>
    //               </div>
    //             </div>
    //           </td>
    //           <td>
    //             Zemlak, Daniel and Leannon
    //             <br/>
    //             <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
    //           </td>
    //           <td>Purple</td>
    //           <th>
    //             <button className="btn btn-ghost btn-xs">details</button>
    //           </th>
    //         </tr>
    //         {/* row 2 */}
    //         <tr>
    //           <th>
    //             <label>
    //               <input type="checkbox" className="checkbox" />
    //             </label>
    //           </th>
    //           <td>
    //             <div className="flex items-center space-x-3">
    //               <div className="avatar">
    //                 <div className="mask mask-squircle w-12 h-12">
    //                   <img src="/tailwind-css-component-profile-3@56w.png" alt="Avatar Tailwind CSS Component" />
    //                 </div>
    //               </div>
    //               <div>
    //                 <div className="font-bold">Brice Swyre</div>
    //                 <div className="text-sm opacity-50">China</div>
    //               </div>
    //             </div>
    //           </td>
    //           <td>
    //             Carroll Group
    //             <br/>
    //             <span className="badge badge-ghost badge-sm">Tax Accountant</span>
    //           </td>
    //           <td>Red</td>
    //           <th>
    //             <button className="btn btn-ghost btn-xs">details</button>
    //           </th>
    //         </tr>
    //         {/* row 3 */}
    //         <tr>
    //           <th>
    //             <label>
    //               <input type="checkbox" className="checkbox" />
    //             </label>
    //           </th>
    //           <td>
    //             <div className="flex items-center space-x-3">
    //               <div className="avatar">
    //                 <div className="mask mask-squircle w-12 h-12">
    //                   <img src="/tailwind-css-component-profile-4@56w.png" alt="Avatar Tailwind CSS Component" />
    //                 </div>
    //               </div>
    //               <div>
    //                 <div className="font-bold">Marjy Ferencz</div>
    //                 <div className="text-sm opacity-50">Russia</div>
    //               </div>
    //             </div>
    //           </td>
    //           <td>
    //             Rowe-Schoen
    //             <br/>
    //             <span className="badge badge-ghost badge-sm">Office Assistant I</span>
    //           </td>
    //           <td>Crimson</td>
    //           <th>
    //             <button className="btn btn-ghost btn-xs">details</button>
    //           </th>
    //         </tr>
    //         {/* row 4 */}
    //         <tr>
    //           <th>
    //             <label>
    //               <input type="checkbox" className="checkbox" />
    //             </label>
    //           </th>
    //           <td>
    //             <div className="flex items-center space-x-3">
    //               <div className="avatar">
    //                 <div className="mask mask-squircle w-12 h-12">
    //                   <img src="/tailwind-css-component-profile-5@56w.png" alt="Avatar Tailwind CSS Component" />
    //                 </div>
    //               </div>
    //               <div>
    //                 <div className="font-bold">Yancy Tear</div>
    //                 <div className="text-sm opacity-50">Brazil</div>
    //               </div>
    //             </div>
    //           </td>
    //           <td>
    //             Wyman-Ledner
    //             <br/>
    //             <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
    //           </td>
    //           <td>Indigo</td>
    //           <th>
    //             <button className="btn btn-ghost btn-xs">details</button>
    //           </th>
    //         </tr>
    //       </tbody>
    //       {/* foot */}
    //       <tfoot>
    //         <tr>
    //           <th></th>
    //           <th>Name</th>
    //           <th>Job</th>
    //           <th>Favorite Color</th>
    //           <th></th>
    //         </tr>
    //       </tfoot>

    //     </table>
    //   </div>
  );
};

export default MyToys;
