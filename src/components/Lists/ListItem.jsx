import ItemBox from "./ItemBox"

// eslint-disable-next-line react/prop-types
const ListItem = ({ data }) => {
  return (
    <div className="bg-blue-300 ">
        {
            Object.entries(data).map(([key, value]) => {
                <ItemBox key={key} data={value} />
            })
        }
    </div>
  )
}

export default ListItem