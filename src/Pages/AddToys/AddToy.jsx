import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";

const AddToy = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    //console.log(data);
    fetch("http://localhost:4000/postToy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
    //console.log(data);
  };

  return (
    <div className="  ">
      <div className="text-center text-5xl font-bold py-8 ">Add Toys</div>
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
              className=" shadow-lg text-input p-5 w-full "
              {...register("image")}
              placeholder="image link"
              type="url"
              defaultValue="https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Toy Name</span>
            </label>
            <input
              className="w-full text-input p-5 my-3"
              {...register("toyName")}
              placeholder="name"
              defaultValue="pikachu"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Seller Name</span>
            </label>
            <input
              className=" w-full text-input p-5 my-3"
              {...register("sellername")}
              placeholder="name"
              defaultValue="Popy"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Seller Email</span>
            </label>
            <input
              className="w-full text-input p-5 my-3"
              {...register("email")}
              placeholder="email"
              value={user?.email}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              className="w-full text-input p-5"
              {...register("price")}
              placeholder="Price"
              defaultValue="20"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input
              className=" w-full text-input p-5 my-3"
              {...register("quantity")}
              placeholder="Quantity"
              defaultValue="4"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              className=" w-full text-input p-5 my-3"
              {...register("rating")}
              placeholder="Rating"
              defaultValue="4.0"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Toy Category</span>
            </label>
            <select className="text-input p-5 w-1/2" {...register("category")}>
              <option value="wooden">Wooden</option>
              <option value="plastic">Plastic</option>
              <option value="plush">Plush</option>
              <option value="softtoy">Softtoy</option>
            </select>
          </div>
          <div>
            <label className="label">
              <span className="label-text">Detail Description</span>
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
              className="text-input p-5 my-3 w-full h-20"
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
