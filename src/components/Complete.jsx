// A button to mark that its respected task has been completed
//Import the image from the project itself
import check from "../assets/check.png"

export default function Complete() {
    return (
        <div className="complete">
            <img src={check} alt="Done" />
        </div>
    )
}