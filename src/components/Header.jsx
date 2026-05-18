export default function Header({text, type}) {
    //Change the header depending on what type it is
    return (
        <div className={"headerWrap " + type}>
        <h1>
            {text}
        </h1>
        </div>
    )
}