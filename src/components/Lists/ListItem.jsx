import { useDispatch, useSelector } from "react-redux";
import ItemBox from "./ItemBox";
import { selectList, unselectList } from "../../redux/listSlice";

const ListItem = ({ listNum, data }) => {
  const { selectedLists } = useSelector((state) => state.list);
  const dispatch = useDispatch();

  const isSelected = selectedLists.includes(listNum);

  const handleCheckbox = () => {
    if (isSelected) {
      dispatch(unselectList(listNum));
    } else {
      dispatch(selectList(listNum));
    }
  };
  return (
    <div className="bg-sky-50 px-5 py-8 h-[600px] w-[300px] rounded-2xl overflow-y-scroll">
      <div>
        <input
          type="checkbox"
          name="list-check"
          id="list-check"
          className="mr-3"
          checked={isSelected}
          onChange={handleCheckbox}
        />
        <label
          htmlFor="list-check"
          className="font-semibold text-stone-800 text-lg"
        >
          List {listNum}
        </label>
      </div>
      <ul>
        {data.map((item) => (
          <ItemBox key={item.id} data={item} />
        ))}
      </ul>
    </div>
  );
};

export default ListItem;
