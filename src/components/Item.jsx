import Complete from "./Complete"
import Left from "./Left"
import Right from "./Right"

//An item on the to-do list

export default function Item({text}) {
    return (
        <div className="item">
            <Complete></Complete>
            <div className="itemBody">
                {text}
            </div>
            <div className="itemFooter">
                <Left></Left>
                <Right></Right>
            </div>
        </div>
    )
}