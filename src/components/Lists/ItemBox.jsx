const ItemBox = ({ data }) => {
  return (
    <li className="bg-white p-5 my-3 rounded-xl border-2 border-stone-300">
      <h2 className="font-semibold text-stone-800">{data.name}</h2>
      <p className="text-stone-500">{data.description}</p>
    </li>
  );
};

export default ItemBox;
