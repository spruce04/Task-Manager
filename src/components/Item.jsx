//Import images for buttons
import left_arrow from "../assets/left_arrow.png"
import right_arrow from "../assets/right_arrow.png"
import check from "../assets/check.png"

//An item on the to-do list

export default function Item({text, on_complete, id, on_move}) {
    //If we want to complete/remove the item
    function handle_complete() {
        on_complete(id)
    }

    function handle_move(direction) {
        if(direction == "left") {
            on_move(id, "left")
        }
        else {
            on_move(id, "right")
        }
        
    }

    return (
        <div className="item">
            <div className="complete">
                <img src={check} alt="Done" onClick={handle_complete}/>
            </div>
            <div className="itemBody">
                {text}
            </div>
            <div className="itemFooter">
                <img src={left_arrow} alt="left" onClick={() => handle_move("left")}></img>
                <img src={right_arrow} alt="right" onClick={() => handle_move("right")}></img>
            </div>
        </div>
    )
}