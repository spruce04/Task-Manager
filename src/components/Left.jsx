// Button to move item left


export default function Left({clicked}) {
    return (
        <img src={left_arrow} alt="left" onClick={clicked}></img>
    )
}