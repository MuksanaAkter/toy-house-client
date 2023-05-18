import { useContext, useState } from "react";
import { Link, } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";

const SignUp = () => {

//     const [user, setUser] = useState(null);
 const [error, setPassError] = useState("");
//   const navigate = useNavigate();
//   const location = useLocation();

//   const from = location.state?.from?.pathname || "/home";

  const { createUser } = useContext(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    console.log(name, email, password, photo);

    if (!/(?=.*[A-Z])/.test(password)) {
        setPassError("Please add atleast one Upperase");
        return;
      } else if (password.length < 6) {
        setPassError("Please add atleast 6 charecters in your password");
        return;
      }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        updateUserData(result.user , name , photo);
        
      })
      .catch((error) => {
        console.log(error);
        setPassError(error.message);
      });
  };
  const updateUserData = (user, displayName, photo) => {
    updateProfile(user, {
      displayName: displayName,
      photoURL: photo,
    })
      .then(() => {
        console.log("user updated");
      })
      .catch((error) => {
        setPassError(error.message);
      });
  };

  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12">
          <img
            src="https://img.freepik.com/free-vector/auto-service-illustration_1284-20618.jpg?w=826&t=st=1683956327~exp=1683956927~hmac=f281a6952c5c23c934ef0d8b1653c0aef3ec39d7979bf409b3d7550e05765302"
            alt=""
          />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Sign Up</h1>
            <form onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                 
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                   <h5 className="text-red-600 font-bold my-2">{error}</h5>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="my-4 text-center">
              Already Have an Account?{" "}
              <Link className="text-orange-600 font-bold" to="/login">
                Login
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
