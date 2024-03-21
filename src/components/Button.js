import React, { useEffect, useState } from "react"

const Button = (props) => {
    let [click, setClick] = useState(0);

    useEffect(() => {
        document.title = `Ви натиснули ${click} разів`
    })
    return (
        <button onClick={() => setClick(click++)}>{props.text} {click}</button>
    )
}
Button.defaultProps = {
    text: "click me"
}
export default Button