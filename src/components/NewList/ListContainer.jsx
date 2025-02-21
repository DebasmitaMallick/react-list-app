import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const ListContainer = ({ listItems, listType, listNum, moveLeftParams, moveRightParams, onMove }) => {
  return (
    <div className="w-1/3 bg-sky-50 p-4 rounded-lg shadow-md h-[600px] overflow-y-scroll">
      <h3 className="text-lg font-semibold mb-2 text-center">{`List ${listNum} (${listItems.length})`}</h3>
      {listItems.map((item) => (
        <div
          key={item.id}
          className=" bg-white h-[160px] md:h-[130px] p-5 my-3 rounded-xl border-2 border-stone-300 relative"
        >
          <div className="pb-5">
            <h2 className="font-semibold text-stone-800 text-sm md:text-base">{item.name}</h2>
            <p className="text-stone-500 text-sm md:text-base">{item.description}</p>
          </div>
          {(listType === "2" || listType === "new") && (
            <button onClick={() => onMove(item, ...moveLeftParams)} className="text-2xl absolute left-5 bottom-3 text-stone-600 cursor-pointer">
              <GoArrowLeft />
            </button>
          )}
          {(listType === "1" || listType === "new") && (
            <button onClick={() => onMove(item, ...moveRightParams)} className="text-2xl absolute right-5 bottom-3 text-stone-600 cursor-pointer">
              <GoArrowRight />
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default ListContainer;
