//To add stuff to the to do list
import { useState } from "react"

export default function Add({add_new_task, count}) {
    //Check when the state of the text box changes
    const [content, set_content] = useState("")

    //When the value of the text box changes
    function handle_change(event) {
        set_content(event.target.value) //get text content from the input
    }

    function handle_submit() {
        if (content == "") {
            return
        }
        add_new_task(content)
        set_content("")
    }

    return (
        <div className="add">
            <input type="text" value={content} onChange={handle_change}></input>
            <button onClick={handle_submit}>Add</button>
            <text>| You have {count} items to do.</text>
        </div>
    )
}