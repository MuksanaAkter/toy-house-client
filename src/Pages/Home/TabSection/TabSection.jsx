import { useEffect, useState } from "react";
import ToyCard from "./ToyCard";



const TabSection = () => {
    const [toys, settoy] = useState([]);
    const [activeTab, setActiveTab] = useState("a");
  
    useEffect(() => {
      fetch(`http://localhost:4000/tabtoys/${activeTab}`)
        .then((res) => res.json())
        .then((result) => {
          settoy(result);
        });
    }, [activeTab]);
  
    const handleTabClick = (tabName) => {
      setActiveTab(tabName);
    };

    return (
        <div className="bg-pink-50 pb-8">
           <div className="max-w-7xl mx-auto text-center" >
           <h1 className="text-5xl py-9">Our Toys By Category</h1>
          <div className="my-5">
          <div
              onClick={() => handleTabClick("wooden")}
              className={`tab  font-bold text-xl    rounded-lg wooden ${
                activeTab == "wooden" ? " bg-cyan-500 text-white" : ""
              }`}
            >
              Wooden
            </div>
            <div
              onClick={() => handleTabClick("softtoy")}
              className={`tab  font-bold text-xl    rounded-lg Offline ${
                activeTab == "softtoy" ? " bg-cyan-500 text-white" : ""
              }`}
            >
              SoftToys
            </div>
            <div
              onClick={() => handleTabClick("plush")}
              className={`tab  font-bold text-xl    rounded-lg plush ${
                activeTab == "plush" ? " bg-cyan-500 text-white" : ""
              }`}
            >
              Plush Toy
            </div>
          </div>
           </div>
           <div className=" max-w-7xl mx-auto gap-5 my-5 grid grid-cols-2">
        {toys?.map((toy) => (
          <ToyCard 
          key={toy._id}
          toy={toy}
          >
          </ToyCard>
        ))}
      </div>
        </div>
    );
};

export default TabSection;