import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import signup from "../../assets/is_prev_ui.png";
import Swal from 'sweetalert2'
import { Helmet } from "react-helmet";
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
    Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Registration Successfully Done',
        
       
      })

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        updateUserData(result.user, name, photo);
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
    const backgroundImage =
    "https://png.pngtree.com/background/20210715/original/pngtree-white-abstract-background-3d-paper-style-picture-image_1300962.jpg";
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` ,backgroundSize:"cover" }}
      className="hero bg-base-200 w-full"
    >
         <Helmet>
        <title>Toy House | SignUp</title>
      </Helmet>
      <div style={{ backgroundImage: `url(${backgroundImage})`,backgroundSize:"cover" }}
       className="hero-content shadow-2xl rounded-xl my-10 flex-col-reverse lg:flex-row bg-cyan-100 px-10">
        <div className=" mr-12 animate__animated animate__fadeInLeft ">
          <img className="h-96 " src={signup} alt="" />
        </div>
        <div className="card animate__animated animate__fadeInRight  flex-shrink-0 w-full max-w-sm shadow-2xl">
          <div className="card-body bg-pink-100 rounded-lg shadow-2xl">
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
                  type="password"
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
                  className="btn btn-primary bg-cyan-800 border-0 rounded-lg"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="my-4 text-center">
              Already Have an Account?{" "}
              <Link className="text-pink-600 font-bold" to="/login">
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
