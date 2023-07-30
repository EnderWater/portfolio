
function ListItems({listOfItems, classname, href=false}) {

    if (href)
        return listOfItems.map((item) => {
            return <li className={classname}><a href={"#" + item + "-section"} style={{color:"#c4c4c4"}}>{item}</a></li>
        })
    else
        return listOfItems.map((item) => {
            return <li className={classname}>{item}</li>
        })

}

export default ListItems;
