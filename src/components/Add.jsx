import Item from "./Item"
import { useState } from "react"

//Add a new task to the to do list
 export default function Add({add_task}) {


    const [input_text, set_input_text] = useState("")

    function on_type(event) {
        set_input_text(event.target.value)
    }

    function on_click() {
        if(input_text.trim() == "") {
            return
        }
        add_task(input_text)
        set_input_text("")
    }

    return (
        <div className="add">
            <input type="text" value={input_text} onChange={on_type}></input>
            <button onClick={on_click}>Add</button>
        </div>

    )
 }