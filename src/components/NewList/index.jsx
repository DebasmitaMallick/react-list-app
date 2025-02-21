import { useDispatch, useSelector } from "react-redux";
import { updateLists, cancelListCreation } from "../../redux/listSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ListContainer from "./ListContainer";

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
        <ListContainer
          listType={"1"}
          listNum={selectedLists[0]}
          listItems={firstListItems}
          onMove={moveItem}
          moveRightParams={[selectedLists[0], "newList"]}
        />

        {/* New List (Middle) */}
        <ListContainer
          listType={"new"}
          listNum={newListId}
          listItems={newList}
          onMove={moveItem}
          moveLeftParams={["newList", selectedLists[0]]}
          moveRightParams={["newList", selectedLists[1]]}
        />

        {/* Second Selected List */}
        <ListContainer
          listType={"2"}
          listNum={selectedLists[1]}
          listItems={secondListItems}
          onMove={moveItem}
          moveLeftParams={[selectedLists[1], "newList"]}
        />
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row justify-center space-y-3 md:space-x-4 md:space-y-0 mt-6">
        <button
          onClick={handleCancel}
          className="text-stone-900 font-medium px-4 py-2 border-2 border-stone-700 rounded cursor-pointer"
        >
          Cancel
        </button>
        <button
          onClick={handleUpdateLists}
          className="bg-blue-500 font-medium text-white px-4 py-2 rounded cursor-pointer"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default NewListCreation;
