import { useDispatch, useSelector } from "react-redux";
import { updateLists, cancelListCreation } from "../../redux/listSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewListCreation = () => {
  const { selectedLists, listData } = useSelector((state) => state.list);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [newList, setNewList] = useState([]);

  const [firstListItems, setFirstListItems] = useState(() => {
    if (selectedLists.length === 2) {
      return listData[selectedLists[0]] || [];
    }
  });
  const [secondListItems, setSecondListItems] = useState(() => {
    if (selectedLists.length === 2) {
      return listData[selectedLists[1]] || [];
    }
  });

  if (selectedLists.length !== 2) {
    return (
      <p className="text-red-500 text-center mt-4">
        You should select exactly 2 lists to create a new list.
      </p>
    );
  }

  const newListId = Object.keys(listData).length + 1;

  const moveItem = (item, fromList, toList) => {
    if (fromList === selectedLists[0]) {
      setFirstListItems((prev) => prev.filter((i) => i.id !== item.id));
    } else if (fromList === selectedLists[1]) {
      setSecondListItems((prev) => prev.filter((i) => i.id !== item.id));
    } else if (fromList === "newList") {
      setNewList((prev) => prev.filter((i) => i.id !== item.id));
    }

    if (toList === selectedLists[0]) {
      setFirstListItems((prev) => [item, ...prev]);
    } else if (toList === selectedLists[1]) {
      setSecondListItems((prev) => [item, ...prev]);
    } else if (toList === "newList") {
      setNewList((prev) => [...prev, item]);
    }
  };

  const handleUpdateLists = () => {
    dispatch(
      updateLists({
        [selectedLists[0]]: firstListItems,
        [selectedLists[1]]: secondListItems,
        newList,
        newListId,
      })
    );
    navigate("/");
  };

  const handleCancel = () => {
    dispatch(cancelListCreation());
    navigate("/");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-6">

      <div className="flex flex-wrap md:flex-nowrap justify-center space-x-0 md:space-x-6 space-y-6 md:space-y-0">
        {/* First Selected List */}
        <div className="w-1/3 bg-sky-50 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">
            {`List ${selectedLists[0]} (${firstListItems.length})`}
          </h3>
          {firstListItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-white p-5 my-3 rounded-xl border-2 border-stone-300"
            >
              <div>
                <h2 className="font-semibold text-stone-800">{item.name}</h2>
                <p className="text-stone-500">{item.description}</p>
              </div>
              <button
                onClick={() => moveItem(item, selectedLists[0], "newList")}
              >
                ➡
              </button>
            </div>
          ))}
        </div>

        {/* New List (Middle) */}
        <div className="w-1/3 bg-sky-50 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2 text-center">{`List ${newListId} (${newList.length})`}</h3>
          {newList.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-white p-5 my-3 rounded-xl border-2 border-stone-300"
            >
              <button
                onClick={() => moveItem(item, "newList", selectedLists[0])}
              >
                ⬅
              </button>
              <div>
                <h2 className="font-semibold text-stone-800">{item.name}</h2>
                <p className="text-stone-500">{item.description}</p>
              </div>
              <button
                onClick={() => moveItem(item, "newList", selectedLists[1])}
              >
                ➡
              </button>
            </div>
          ))}
        </div>

        {/* Second Selected List */}
        <div className="w-1/3 bg-sky-50 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">
            {`List ${selectedLists[1]} (${secondListItems.length})`}
          </h3>
          {secondListItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-white p-5 my-3 rounded-xl border-2 border-stone-300"
            >
              <button
                onClick={() => moveItem(item, selectedLists[1], "newList")}
              >
                ⬅
              </button>
              <div>
                <h2 className="font-semibold text-stone-800">{item.name}</h2>
                <p className="text-stone-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row justify-center space-y-3 md:space-x-4 md:space-y-0 mt-6">
        <button
          onClick={handleCancel}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Cancel
        </button>
        <button
          onClick={handleUpdateLists}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default NewListCreation;
