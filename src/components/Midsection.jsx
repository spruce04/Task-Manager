// A midsection, that contains add logic and displays the list of items
import Add from "./Add"
import Item from "./Item"
import { useState } from "react"

export default function Midsection() {
    //Add a new item whenever the add button is pressed
    const [tasks, set_tasks] = useState([{id:0, text:"Create To Do List"}])

    //Add task t, with unique ID
    function add_task(t) {
        const cpy = [...tasks]
        cpy.push({id:Date.now(), text:t})
        set_tasks(cpy)
    }

    //"Complete" task with the id remove_id
    function complete(remove_id) {
        const cpy = tasks.filter(task => task.id != remove_id)
        set_tasks(cpy)
    }

    //Move the task to the left  or right (when an arrow is clicked)
    function move(move_id, direction) {
        const cpy = [...tasks]
        //find the index of the id we want to move
        let i = cpy.findIndex(task => task.id === move_id)

        if(direction == "left") { //Move to the left
            if(i == 0) {
                return //if its the first element
            }
            let prev = cpy[i-1]
            cpy[i-1] = cpy[i]
            cpy[i] = prev
            set_tasks(cpy)
        }
        else { //Move to the right
            if(i >= cpy.length-1) {
                return //if its the last element
            }
            let next = cpy[i+1]
            cpy[i+1] = cpy[i]
            cpy[i] = next
            set_tasks(cpy)
        }

    }

    //Part that renders
    return (
        <div className="midSection">
            <Add add_new_task={add_task} count={tasks.length}></Add>
            <div className="listItems">
                {tasks.map((task =>
                    <Item key={task.id} text={task.text} id={task.id} on_complete={complete} 
                    on_move={move}></Item>
                ))}
            </div>
        </div>
    )

}