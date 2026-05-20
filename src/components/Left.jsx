// Button to move item left
import left_arrow from "../assets/left_arrow.png"

export default function Left({clicked}) {
    return (
        <img src={left_arrow} alt="left" onClick={clicked}></img>
    )
}