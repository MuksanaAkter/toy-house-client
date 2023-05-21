import { Helmet } from "react-helmet";

const bg="https://f2.toyhou.se/file/f2-toyhou-se/images/15548415_NPQGgIUidDh2OQK.png"

const Blog = () => {
  return (
    <div>
      <Helmet>
        <title>ToyHouse | Blog</title>
      </Helmet>
      <div>
        <div className="">
        <div  style={{ backgroundImage: `url(${bg})` ,backgroundSize:"cover", height:"" }} className="text-center text-5xl font-bold py-8 h-40">Blog Page</div>
          <h1 className="text-center text-danger my-5"></h1>
        </div>
        <div>
          <div className="container d-flex justify-content-end my-4"></div>
        </div>
        <div className="container mx-auto  ">
          <div className="p-7 bg-yellow-100 ">
            <h3 className=" text-2xl font-bold text-purple-600 pb-5">
              1. What is an access token and refresh token? How do they work and
              where should we store them on the client-side?
            </h3>
            <p className="">
              <span className="text-xl text-cyan-600 font-bold">
                Access Token:
              </span>{" "}
              A short-lived credential used for authentication and
              authorization, typically sent with each request to access
              protected resources.<br></br><br></br>
              <span className="text-xl text-cyan-600 font-bold">
                Refresh Token:{" "}
              </span>{" "}
              A long-lived credential used to obtain a new Access Token without
              re-authenticating, sent to the server to request a new Access
              Token when the previous one expires or becomes invalid. Storage on
              the client-side: Access Tokens can be stored in memory, HTTP-only
              cookies, or local storage, with each option having different
              security implications.
            </p>
          </div>
          <div className="p-7 my-4 bg-green-100">
            <div>
              <h3 className=" text-2xl font-bold text-purple-600 pb-5">
                2. Compare SQL and NoSQL databases?
              </h3>
              <p className="">
               <div className="flex gap-5">
                <div>
                <span className="text-xl text-cyan-600 font-bold">
                  {" "}
                  SQL Databases:
                </span>
                <ol>
                  <li>Structured with fixed schemas</li>
                  <li>Enforce data integrity through constraints</li>
                  <li>Use SQL for querying and manipulation</li>
                  <li>Support ACID transactions</li>
                  <li>Examples: MySQL, PostgreSQL, Oracle Database</li>
                </ol>
                </div>
                <div>
                <span className="text-xl text-cyan-600 font-bold">
                  NoSQL Databases:
                </span>
                <ol>
                  <li>Schema-less or flexible schemas</li>
                  <li>Schema-less or flexible schemas</li>
                  <li>Use various query languages</li>
                  <li>Handle unstructured or rapidly changing data</li>
                  <li>Examples: MongoDB, Cassandra, Redis</li>
                </ol>
                </div>
               </div>
                
              </p>
            </div>
          </div>
          <div  className="p-7 bg-blue-100">
            <h3 className="text-2xl font-bold text-purple-500 ">
              3.What is express js? What is Nest JS?
            </h3>
            <p className="py-4 text-lg">
            Express.js is a minimal and flexible web application framework for Node.js. It provides a set of robust features for building web applications and APIs, including routing, middleware support, template engines, and handling HTTP requests and responses. Express.js is widely used and has a large ecosystem of plugins and extensions, making it a popular choice for developing web applications in JavaScript.
            <br /><br />
            NestJS, on the other hand, is a progressive Node.js framework for building efficient, scalable, and maintainable server-side applications. It is built on top of Express.js and utilizes TypeScript for development. NestJS follows the architectural principles of Angular and provides a modular and structured approach to building server-side applications. It includes features such as dependency injection, decorators, middleware, and a powerful CLI for scaffolding and generating code. NestJS is often used in enterprise-level applications where code organization, scalability, and maintainability are crucial.
            </p>
          </div>

          <div  className="p-7 my-4 bg-red-100">
            <h3 className="text-2xl font-bold text-purple-500 ">
              4. What is MongoDB aggregate and how does it work?
            </h3>
            <p className="py-4 text-lg">
            MongoDB aggregate function is used for advanced data analysis and aggregation operations. It works by processing a sequence of stages, where each stage performs a specific operation on the data. The stages can include filtering, sorting, grouping, joining, and calculating aggregated values. The aggregate function takes a collection of documents as input and returns the transformed and aggregated result based on the defined stages.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
