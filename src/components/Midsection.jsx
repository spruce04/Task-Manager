// A midsection, that contains add logic and displays the list of items
import Add from "./Add"
import Item from "./Item"

export default function Midsection() {
    return (
        <div className="midSection">
            <Add></Add>
            <div className="listItems">

            </div>
            <Item text="test"></Item>
        </div>
    )

}