
function ListItems({listOfItems}) {
    return listOfItems.map((item) => {
        return <li title={item}>{item}</li>
    })
}

export default ListItems;