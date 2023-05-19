
const Blog = () => {
    return (
        <div>
             <div>
        <div className="">
          <h1 className="text-center text-danger my-5">Blog Page</h1>
        </div>
        <div>
        <div className="container d-flex justify-content-end my-4">
</div>
        </div>
        <div className="container mx-auto " >
          <div style={{ backgroundColor: "#f7dddd" }} className="p-3 " >
          <h3 className="my-3">
            1. What is the differences between uncontrolled and controlled
            components?
          </h3>
          <p className="">
            In React, controlled components refer to components that have their
            state and behavior controlled by the parent component. These
            components rely on props passed down from the parent component to
            update their state and behavior. Uncontrolled components refer to
            components that manage their own state internally.
          </p>
          </div>
          <div style={{ backgroundColor: "#e7f7dd" }} className="p-3 my-4">
          <div>
          <h3 className="">2. How to validate React props using PropTypes?</h3>
          <p className="">
            PropTypes are simply a mechanism that ensures that the passed value
            is of the correct datatype. This makes sure that we dont receive an
            error at the very end of our app by the console which might not be
            easy to deal with.
          </p>
          </div>
          </div>
          <div style={{ backgroundColor: "#d1e1f6" }} className="p-3 ">
          <h3 className="text-2xl font-bold text-purple-500 ">
            3.What is the difference between nodejs and express js?
          </h3>
          <p className="py-4 text-lg">
            Node.js is a platform for building the i/o applications which are
            server-side event-driven and made using JavaScript. Express.js is a
            framework based on Node.js which is used for building
            web-application using approaches and principles of Node.js
            event-driven architecture.
          </p>
          </div>
          

          <div style={{ backgroundColor: "#fbd8f9" }} className="p-3 my-4">
          <h3 className="text-2xl font-bold text-purple-500 ">
            4. What is a custom hook, and why will you create a custom hook?
          </h3>
          <p className="py-4 text-lg">
          Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.
          </p>
          </div>
          
        </div>
      </div>
        </div>
    );
};

export default Blog;