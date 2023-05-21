import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const FaqSection = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <div>
            <h1 style={{ fontFamily: "Mogra, cursive" }} className="text-center text-pink-600 text-4xl font-semibold mb-8 pt-9">Some Questions Answer about Aminal toy</h1>
            <div className="max-w-7xl mx-auto my-4">
      <div className="flex flex-wrap items-center">
      <div ></div>
        <div data-aos="fade-right" className="w-full md:w-1/2">
          <img src="https://cdn.simplegreen.com/web22/images/cleaning_tips/tip_hero/kids/toys-fabric.jpg" alt="Animal Toys" className="w-full" />
        </div>

       
        <div data-aos="fade-left" className="w-full md:w-1/2 px-9 ">
          <h3 className="text-2xl font-bold mb-4 text-cyan-600">Frequently Asked Questions</h3>
          <div className="mb-8">
            <h4 className="text-lg font-medium mb-2">Q1: Are animal toys safe for children?</h4>
            <p className="text-gray-700 mb-4">A1: Yes, animal toys designed for children are made with safety in mind, using non-toxic materials and adhering to safety regulations.</p>
          </div>
          <div className="mb-8">
            <h4 className="text-lg font-medium mb-2">Q2: What are the educational benefits of animal toys?</h4>
            <p className="text-gray-700 mb-4">A2: Animal toys can help children learn about different animal species, develop their imagination and creativity, and enhance their cognitive and motor skills.</p>
          </div>
          <div className="mb-8">
            <h4 className="text-lg font-medium mb-2">Q3: How can animal toys promote social interaction?</h4>
            <p className="text-gray-700 mb-4">A3: Animal toys can encourage children to engage in pretend play, allowing them to create stories and scenarios, play together with friends or siblings, and practice social skills.</p>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default FaqSection;