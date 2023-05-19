import { useEffect, useState } from "react";
import ToyCard from "./ToyCard";



const TabSection = () => {
    const [toys, settoy] = useState([]);
    const [activeTab, setActiveTab] = useState("wooden");
  
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
        <div>
           <div className="max-w-7xl mx-auto text-center" >
           <h1 className="text-5xl py-9">Our Toys By Category</h1>
           <div
              onClick={() => handleTabClick("wooden")}
              className={`tab  tab2 wooden ${
                activeTab == "wooden" ? " bg-red-500 text-white" : ""
              }`}
            >
              Wooden
            </div>
            <div
              onClick={() => handleTabClick("softtoy")}
              className={`tab  tab2 softtoy ${
                activeTab == "softtoy" ? " bg-red-500 text-white" : ""
              }`}
            >
              SoftToys
            </div>
            <div
              onClick={() => handleTabClick("plush")}
              className={`tab  tab2 plush ${
                activeTab == "plush" ? " bg-red-500 text-white" : ""
              }`}
            >
              Plush Toy
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