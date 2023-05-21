import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const Toy = useLoaderData();
  console.log(Toy._id);

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const toyName = form.toyName.value;
    const quantity= form.quantity.value;
    const price = form.price.value;
    const detail = form.detail.value;
    
    console.log(toyName, price, quantity, detail);
    const updatedToy = {toyName, price, quantity, detail}

    fetch(`https://toy-house-server-one.vercel.app/mytoy/${Toy._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedToy),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if(result.modifiedCount>0){
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Uptaded Toy Successfully',
                   
              })
        }
      });
  };
const bg="https://i.pinimg.com/originals/10/99/b8/1099b8a12b4e835b564a9ec4fe090480.jpg"
  return (
    <div>
         <Helmet>
        <title>Toy House | Update</title>
      </Helmet>
      <div style={{ backgroundImage: `url(${bg})` ,backgroundSize:"cover", height:"" }} className="text-center text-5xl font-bold py-8 h-40">Update Form</div>
      <div className="bg-green-100 pt-10 p-10">
        <form onSubmit={handleUpdate} className=" text-center max-w-7xl mx-auto w-1/3 border bg-green-200 mb-10 shadow-lg" action="">
          <div className="flex justify-center my-5">
            <label className="label mx-1">
              <span className="label-text text-xl font-semibold ">Toy Name</span>
            </label>
            <input
              className=" shadow-lg border-1 text-input p-3 w-1/2"
              type="text"
              name="toyName"
              defaultValue={Toy?.toyName}
              id=""
            ></input>
          </div>
          <div className="flex justify-center ">
            <label className="label mx-5">
              <span className="label-text text-xl font-semibold ">Price</span>
            </label>
            <input
              className="w-1/2  shadow-lg border-1 text-input p-3 "
              type="text"
              name="price"
              defaultValue={Toy?.price}
              id=""
            ></input>
          </div>
          <div className="flex justify-center my-5 ">
            <label className="label mx-2">
              <span className="label-text text-xl font-semibold ">
                Quantity
              </span>
            </label>
            <input
              className="w-1/2 shadow-lg border-1 text-input p-3 "
              type="text"
              name="quantity"
              defaultValue={Toy?.quantity}
              id=""
            ></input>
          </div>
          <div className="flex justify-center mb-5">
            <label className="label mx-4">
              <span className="label-text text-xl font-semibold ">Detail</span>
            </label>
            {/* <input
              className=" w-1/2 shadow-lg border-1 text-input p-3 "
              type="text"
              name="detail"
              defaultValue={Toy?.detail}
              id=""
            ></input> */}
            <textarea  className=" w-1/2 shadow-lg border-1 text-input p-3 " name="detail" id="" cols="30" rows="10" defaultValue={Toy?.detail} ></textarea>
          </div>
          <div>
          {/* <input
            className="btn btn-primary bg-pink-400 border-0 rounded-lg my-3"
            type="submit"
            value="Update Toy"
          /> */}
          <button className="btn btn-primary bg-pink-400 border-0 rounded-lg my-3"> Update Toy</button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
