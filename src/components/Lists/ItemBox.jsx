// eslint-disable-next-line react/prop-types
const ItemBox = ({ data }) => {
  console.log("itemBox", data);
  return (
    // eslint-disable-next-line react/prop-types
    <div>hello{data["name"]}</div>
  );
};

export default ItemBox;
