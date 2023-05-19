import { useEffect, useState } from "react";
import AllToyCard from "./AllToyCard";


const AllToys = () => {
    const [alltoys, setalltoy] = useState([]);
  //console.log(alltoys);
  useEffect(() => {
    fetch("https://toy-house-server-one.vercel.app/alltoys")
      .then((res) => res.json())
      .then((result) => {
        setalltoy(result);
      });
  }, []);
    return (
        <div>
             <div className="text-center text-5xl font-bold py-8 ">ALL Toys</div>

             <div className=" grid  grid-cols-2 gap-5 max-w-7xl mx-auto  ">
        {alltoys?.map((alltoy) => (
          <AllToyCard key={alltoy._id} alltoy={alltoy}></AllToyCard>
        ))}
      </div>
        </div>
    );
};

export default AllToys;