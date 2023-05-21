import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../Firebase/firebase.config";
import backgroundImageUrl from "../../assets/bg-11_prev_ui.png";
import { Helmet } from "react-helmet";
// import Swal from 'sweetalert2'

const Login = () => {
  const [user, setUser] = useState(null);
  console.log(user);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const { signIn } = useContext(AuthContext);
  const auth = getAuth(app);
  const GoogleProvider = new GoogleAuthProvider();
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    //console.log(form, email, password)
    // Swal.fire({
    //     icon: 'success',
    //     title: 'Success!',
    //     text: 'LogIn Successfully Done',
        
       
    //   })
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };
  const handleGoogle = (event) => {
    event.preventDefault();
    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        const logUser = result.user;
        //console.log(logUser);
        setUser(logUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };
  const backgroundImage =
    "https://images.pond5.com/modern-light-blue-background-smooth-088763980_prevstill.jpeg";
  return (
    
    <div>
         <Helmet>
        <title>Toy House | Login</title>
      </Helmet>
      <div
        // style={{ backgroundImage: `url(${backgroundImage})` }}
        className="hero py-10 bg-cyan-200"
      >
        <div
          style={{ backgroundImage: `url(${backgroundImage})` }}
          className=" hero-content flex-col-reverse gap-0 rounded-lg  shadow-2xl w-full bg-cyan-100 lg:flex-row-reverse"
        >
          <div className=" animate__animated animate__fadeInRight  py-20">
            <img src={backgroundImageUrl} />
          </div>
          <div className=" animate__animated animate__fadeInLeft bg-pink-200 card  flex-shrink-0 w-full max-w-sm shadow-2xl ">
            <div className="card-body">
              <h1 className="text-3xl text-center font-bold">Login</h1>
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    required
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    className="input input-bordered"
                  />
                  <h5 className="text-red-600 font-bold my-2">{error}</h5>
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6 rounded-lg">
                
                  <input
                    className="btn btn-primary bg-pink-400 border-0 rounded-lg"
                    type="submit"
                    value="Login"
                  />
                </div>
                <p className="text-center mt-2">-----------or---------</p>
                <button onClick={handleGoogle} className="btn btn-primary bg-cyan-800 border-0 w-full my-3"><FaGoogle className="mx-2"></FaGoogle> Login with Google</button>
              </form>
              <p className="my-4 text-center">
                New to Toy House{" "}
                <Link className="text-pink-600 font-bold" to="/signup">
                  Sign Up
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Login;
