import axios from "axios";
import { useEffect, useState } from "react";
import ListItem from "./ListItem";

// {
//   "list_number": 1,
//   "id": "02b72a7c-a683-11ec-b909-0242ac120002",
//   "name": "Cat, european wild",
//   "description": "Felis silvestris lybica"
// }
const Lists = () => {
  const [listData, setListData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ message: null });

  const fetchList = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://apis.ccbp.in/list-creation/lists"
      );
      if (response && response.data && response.data.lists) {
        const listData = response.data.lists;
        // console.log(listData);
        let listObj = {};
        listData.forEach((el) => {
          let lstNum = el.list_number;
          let objData = {
            ...el,
          };
          delete objData.list_number;
          // listObj[lstNum] = [
          //   ...listObj[lstNum],
          //   objData
          // ]
          listObj[lstNum] = [
            ...(listObj[lstNum] || []), // Safely initialize the array if undefined
            objData,
          ];
        });
        console.log(listObj);
        setListData(listObj);
      } else {
        throw new Error("Failed to fetch data");
      }
    } catch (err) {
      setError({ message: err });
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchList();
  }, []);
  return (
    <div>
      <button>Create new list</button>
      {loading && <h1>Loading data...</h1>}
      {error.message && <h1>{error.message}</h1>}
      {listData &&
        Object.entries(listData).map(([key, value]) => (
          <ListItem key={key} data={value} />
        ))}
    </div>
  );
};

export default Lists;
