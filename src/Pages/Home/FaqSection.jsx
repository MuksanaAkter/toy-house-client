import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const FaqSection = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <div>
            <h1 style={{ fontFamily: "Mogra, cursive" }} className="text-center text-pink-600 md:text-4xl text-3xl font-semibold mb-8 pt-9">Some Questions Answer about Aminal toys</h1>
            <div className="max-w-7xl mx-auto my-4">
      <div className="flex flex-wrap items-center">
    
      <div className="container mx-auto py-8">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    
    <div>
      <img src="https://cdn.simplegreen.com/web22/images/cleaning_tips/tip_hero/kids/toys-fabric.jpg" alt="FAQ Image" className="mx-auto h-auto md:h-full"></img>
    </div>

    
    <div className="grid grid-cols-1 gap-6">
      <div className="bg-white p-6 shadow">
        <h3 className="text-lg font-semibold">Q1: Are animal toys safe for children?</h3>
        <p className="text-gray-700">A1: Yes, animal toys designed for children are made with safety in mind, using non-toxic materials and adhering to safety regulations..</p>
      </div>

      <div className="bg-white p-6 shadow">
        <h3 className="text-lg font-semibold">Q2: What are the educational benefits of animal toys?</h3>
        <p className="text-gray-700">A2: Animal toys can help children learn about different animal species, develop their imagination and creativity, and enhance their cognitive and motor skills..</p>
      </div>
      <div className="bg-white p-6 shadow">
        <h3 className="text-lg font-semibold">Q3: How can animal toys promote social interaction?</h3>
        <p className="text-gray-700">A3: Animal toys can encourage children to engage in pretend play, allowing them to create stories and scenarios, play together with friends or siblings, and practice social skills..</p>
      </div>

     
    </div>
  </div>
</div>

    
  </div>
</div>
      </div>
  
    );
};

export default FaqSection;