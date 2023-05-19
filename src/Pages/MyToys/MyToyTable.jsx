const MyToyTable = ({ mytoy }) => {
  const { picture, name, price, rating } = mytoy;
  console.log(mytoy);
  return (
    <div>
      
      <div className="max-w-7xl mx-auto">
  <table className="min-w-full mb-10 bg-sky-200 shadow-xl">
    {/* <thead>
      <tr>
        <th className="py-2 px-4 border-b border-gray-300">Column 1</th>
        <th className="py-2 px-4 border-b border-gray-300">Column 2</th>
        <th className="py-2 px-4 border-b border-gray-300">Column 3</th>
       
      </tr>
    </thead> */}
    <tbody className="mb-10">
      <tr className="">
        <td style={{width:"220px"}} className="py-2 px-3 border-b border-gray-300"><img style={{height:"200px", width:"200px"}}
                      src={picture}
                      alt=""
                    /></td>
        <td style={{width:"210px"}}className=" text-center py-2 px-4 border-b border-gray-300 text-2xl font-semibold">{name}</td>
        <td style={{width:"210px"}}className=" text-center text-2xl font-semibold py-2 px-4 border-b border-gray-300">{price}</td>
        <td style={{width:"210px"}}className=" text-center text-2xl font-semibold py-2 px-4 border-b border-gray-300">{rating}</td>
        <th className="py-2 px-4 border-b border-gray-300">
              <button className="btn btn-ghost btn-lgg text-lg bg-green-500">Update</button>
            </th>
            <th className="py-2 px-4 border-b border-gray-300">
              <button className="btn btn-ghost btn-lgg text-lg bg-orange-500">delate</button>
            </th>
       
      </tr>
    </tbody>
  </table>
</div>
    </div>
  );
};

export default MyToyTable;
