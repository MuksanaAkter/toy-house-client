import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from 'sweetalert2'
import { Helmet } from "react-helmet";
const AddToy = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    //console.log(data);
    fetch("https://toy-house-server-one.vercel.app/postToy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Added Toy Successfully',
        
       
      })
    //console.log(data);
  };

  return (
    <div className="  ">
      <Helmet>
        <title>Toy House | Add Toy</title>
      </Helmet>
      <div style={{ fontFamily: "Mogra, cursive" }} className="text-center text-5xl font-bold py-8 ">Add Toys</div>
      <hr className="w-1/4 mx-auto  pb-4" />
      <form
        className="max-w-7xl mx-auto bg-blue-200 py-8 px-8 mb-5 shadow-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        {errors.exampleRequired && <span>This field is required</span>}

        <div className="grid grid-cols-2  gap-5 justify-center items-center">
          <div>
            <label className="label">
              <span className="label-text text-xl font-semibold ">Photo</span>
            </label>
            <input
            required
              className=" shadow-lg text-input p-5 w-full "
              {...register("image")}
              placeholder="image link"
              type="url"
              defaultValue="https://m.media-amazon.com/images/I/31QPmZKotmL._AC._SR360,460.jpg"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-xl font-semibold">Toy Name</span>
            </label>
            <input
            required
              className="w-full text-input p-5 my-3 shadow-lg"
              {...register("toyName")}
              placeholder="name"
              defaultValue="pikachu"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-xl font-semibold">Seller Name</span>
            </label>
            <input
            required
              className=" w-full text-input p-5 my-3 shadow-lg"
              {...register("sellername")}
              placeholder="name"
              defaultValue={user?.displayName}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-xl font-semibold">Seller Email</span>
            </label>
            <input
            required
              className="w-full text-input p-5 my-3 shadow-lg"
              {...register("email")}
              placeholder="email"
              value={user?.email}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-xl font-semibold">Price</span>
            </label>
            <input
            required
              className="w-full text-input p-5 shadow-lg"
              {...register("price")}
              placeholder="Price"
              defaultValue="20"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-xl font-semibold">Quantity</span>
            </label>
            <input
            required
              className=" w-full text-input p-5 my-3 shadow-lg"
              {...register("quantity")}
              placeholder="Quantity"
              defaultValue="4"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-xl font-semibold">Rating</span>
            </label>
            <input
            required
              className=" w-full text-input p-5 my-3 shadow-lg"
              {...register("rating")}
              placeholder="Rating"
              defaultValue="4.0"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-xl font-semibold">Toy Category</span>
            </label>
            <select className="text-input p-5 w-1/2 shadow-lg" {...register("category")}>
              <option value="wooden">Wooden</option>
              <option value="plastic">Plastic</option>
              <option value="plush">Plush</option>
              
            </select>
          </div>
          <div>
            <label className="label">
              <span className="label-text text-xl font-semibold">Detail Description</span>
            </label>
            {/* <input
              className="text-input p-5 my-3 w-full h-20"
              {...register("detail")}
              placeholder="Details"
              defaultValue="A wooden toy is a toy constructed primarily from wood and wood products. Additional components made from other materials are also sometimes used."
            /> */}
            <textarea
              name=""
              id=""
              cols="70"
              rows="6"
              className="text-input p-5 my-3 w-full h-20 shadow-lg"
              {...register("detail")}
              placeholder="Details"
              defaultValue="A wooden toy is a toy constructed primarily from wood and wood products. Additional components made from other materials are also sometimes used."
            ></textarea>
          </div>
        </div>
        <div>
          <input
            className="btn btn-primary bg-pink-400 border-0 rounded-lg my-3"
            type="submit"
            value="Add Toy"
          />
        </div>
      </form>
    </div>
  );
};

export default AddToy;
