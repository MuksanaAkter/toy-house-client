import { useEffect, useState } from "react";
import MyToyTable from "./MyToyTable";

const MyToys = () => {
  const [mytoys, setmytoy] = useState([]);
  console.log(mytoys);
  useEffect(() => {
    fetch("http://localhost:4000/mytoys")
      .then((res) => res.json())
      .then((result) => {
        setmytoy(result);
      });
  }, []);

  return (
    <div className=" pb-10">
      <div className="text-center text-5xl font-bold py-8 ">My Toys</div>
      <div className="max-w-7xl mx-auto">
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
</div>
      <div className=" max-w-7xl mx-auto  ">
        {mytoys?.map((mytoy) => (
          <MyToyTable key={mytoy._id} mytoy={mytoy}></MyToyTable>
        ))}
      </div>
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
