import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { Button } from "react-daisyui";
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../Firebase/firebase.config";


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
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        //console.log(form, email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.log(error);
                setError(error.message);
              });
    }
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

    return (
        <div>
           <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img src="https://img.freepik.com/free-vector/auto-service-illustration_1284-20618.jpg?w=826&t=st=1683956327~exp=1683956927~hmac=f281a6952c5c23c934ef0d8b1653c0aef3ec39d7979bf409b3d7550e05765302"alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Login</h1>
                        <form 
                         onSubmit={handleLogin}
                        >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email"
                                required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                   
                                </label>
                                <input type="text" name='password' placeholder="password" required className="input input-bordered" />
                                <h5 className="text-red-600 font-bold my-2">{error}</h5>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='my-4 text-center'>New to Car Doctors <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link> </p>
                    </div>
                    <Button onClick={handleGoogle} className="me-3" variant="primary">
                {" "}
                <FaGoogle /> Login with Google
              </Button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Login;