import { useForm } from "react-hook-form";

const AddToy = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    //console.log(data);
    fetch("http://localhost:5000/posttoy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
    console.log(data);
  };

  return (
    <div className="  bg-gray-300 ">
      <form className="max-w-7xl mx-auto" onSubmit={handleSubmit(onSubmit)}>
        {errors.exampleRequired && <span>This field is required</span>}

        <div className="flex flex-col justify-center items-center">
          <div>
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              className="text-input p-5 "
              {...register("image")}
              placeholder="image link"
              type="url"
              defaultValue="https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              className="text-input p-5 my-3"
              {...register("name")}
              placeholder="name"
              defaultValue="Popy"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              className="text-input p-5"
              {...register("price")}
              placeholder="Price"
              defaultValue="20"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              className="text-input p-5 my-3"
              {...register("rating")}
              placeholder="Rating"
              defaultValue="4.0"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select className="text-input p-5 " {...register("category")}>
              <option value="Engineering">panda</option>
              <option value="Editor">elephant</option>
              <option value="writer">taddy</option>
              <option value="Developer">monkey</option>
            </select>
          </div>
          <div>
            <input
              className="btn btn-primary bg-pink-400 border-0 rounded-lg my-3"
              type="submit"
              value="Login"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddToy;
