import { useEffect, useState } from "react";
import ToyCard from "./ToyCard";



const TabSection = () => {
    const [toys, settoy] = useState([]);
    const [activeTab, setActiveTab] = useState("a");
  
    useEffect(() => {
      fetch(`https://toy-house-server-one.vercel.app/tabtoys/${activeTab}`)
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
           <h1 style={{ fontFamily: "Mogra, cursive" }} className="text-5xl py-9 font-bold">Our Toys By Category</h1>
           <h1 style={{ fontFamily: "Mogra, cursive" }} className="text-3xl py-3 font-bold">Sub Categorys</h1>
          <div className="my-5 py-3 bg-pink-300">
          <div
              onClick={() => handleTabClick("wooden")}
              className={`tab  font-bold text-xl border-cyan-800    rounded-lg wooden ${
                activeTab == "wooden" ? " bg-cyan-500 text-white" : ""
              }`}
            >
              Wooden
            </div>
            <div
              onClick={() => handleTabClick("plastic")}
              className={`tab  font-bold text-xl    rounded-lg plastic ${
                activeTab == "plastic" ? " bg-cyan-500 text-white" : ""
              }`}
            >
              Plastic
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
           <div className=" max-w-7xl mx-auto gap-5 my-5 grid md:grid-cols-2">
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