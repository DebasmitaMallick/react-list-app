import { useCallback, useEffect } from "react";
import ListItem from "./ListItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchListData } from "../../redux/listSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ErrorPage from "../ErrorPage";
import CustomBtn from "../CustomBtn";
import CustomSpinner from "../CustomSpinner";

const Lists = () => {
  const dispatch = useDispatch();
  const { listData, loading, error, selectedLists } = useSelector(
    (state) => state.list
  );

  const navigate = useNavigate();

  const handleNewList = () => {
    if (selectedLists.length !== 2) {
      toast.error("You should select exactly 2 lists to create a new list");
    } else {
      navigate("newlist");
    }
  };

  const handleFetchData = useCallback(() => {
    if (!listData) {
      dispatch(fetchListData());
    }
  }, [dispatch, listData]);

  useEffect(() => {
    handleFetchData();
  }, [handleFetchData]);

  return (
    <div>
      <CustomSpinner open={loading} />
      {error && <ErrorPage onTry={handleFetchData} />}
      {!loading && !error && listData && (
        <div className="p-6">
          <div className="text-center pb-16">
            <h1 className="text-4xl font-bold text-stone-700 pb-7">
              List Creation
            </h1>
            <CustomBtn onClick={handleNewList}>Create a new list</CustomBtn>
          </div>
          <div className="flex flex-wrap md:flex-nowrap gap-3.5">
            {Object.entries(listData).map(([key, value]) => (
              <ListItem key={key} data={value} listNum={key} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Lists;
