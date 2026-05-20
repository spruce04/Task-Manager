//Hold the tasks in an array
import Item from "./Item";
import { useState } from "react";


export default function Holder({arr}) {
    //Move an item left or right in the list
    function move(index, direction) {
        const cpy = [...all_items]
        if(direction == "left") {
            if (index == 0) {
                return
            }
            let temp = cpy[index-1]
            cpy[index-1] = cpy[index]
            cpy[index] = temp
        }
        else { //If not a move to the left, we must move right
            if(index >= all_items.length-1) {
                return
            }
            let temp = cpy[index+1]
            cpy[index+1] = cpy[index]
            cpy[index] = temp
        }
        set_items(cpy)
    }

    //Add an item to the to do list
    function add(item) {
        const cpy = [...all_items]
        cpy.append(item)
        set_items(cpy)
    }

    const [all_items, set_items] = useState(arr)
    
    return (
        all_items
    )
}