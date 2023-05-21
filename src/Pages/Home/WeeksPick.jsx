


const WeeksPick = () => {
 

  return (
    <div className="slider-container  bg-purple-100">
          <h1 style={{ fontFamily: "Mogra, cursive" }} className="text-center text-cyan-600 text-5xl font-semibold mb-8 pt-9">Our Weekly Top Pick Toys</h1>
          <p className=" mx-auto w-1/2 text-center my-3 pb-5">Featuring the weekly best toys, parents can stay updated on the latest toy releases and make informed decisions when purchasing toys for their children. The selection offers a mix of entertainment, learning, and developmental value, ensuring that children have access to the best toys available in the market.</p>
        
      <div className="max-w-7xl gap-4 mx-auto grid md:grid-cols-3  p-10 bg-pink-300">
        <div>
            <img className="h-full w-full hover:animate-bounce" src="https://www.thespruce.com/thmb/8hVGXHaTMpFVPX14-XiXxJNy3xo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/girls-hugging-teddy-bears-172601175-ad7bb41c81334f5da3bc024206b8a562.jpg" alt="" />
        </div>
        <div>
            <img className="hover:animate-bounce h-full w-full" src="https://m.media-amazon.com/images/I/91kuEIoIW8L._AC_UF894,1000_QL80_.jpg" alt="" />
        </div>
        <div>
            <img className=" hover:animate-bounce h-full w-full" src="https://momlovesbest.com/wp-content/uploads/2019/02/Best-Stuffed-Animals-For-Kids-1-1.jpg" alt="" />
        </div>
        <div>
            <img className="hover:animate-bounce h-full w-full" src="https://cdn.shopify.com/s/files/1/0570/7009/products/farm-animals-set-of-8-149544_2048x.jpg?v=1634832819" alt="" />
        </div>
        <div><img className="hover:animate-bounce h-full w-full" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/14b5feda-96f3-4423-b4eb-c6cb35d6d526.__CR0,0,300,300_PT0_SX300_V1___.jpg" alt="" /></div>
        <div>
        <img className="hover:animate-bounce h-full w-full" src="https://m.media-amazon.com/images/I/414y3JxFIWL._AC_SS500_.jpg" alt="" />
      </div>
      </div>
      
    </div>
  );
};

export default WeeksPick;