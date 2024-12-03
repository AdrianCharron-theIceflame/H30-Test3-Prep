import { useState, useEffect } from "react";
import "../Styles/Open.css"
let undetermined = `We could not determine the state of the store. Sorry!`
export default function Open() {
    const [isOpen, toggleOpen] = useState<boolean>(true)
    const [openMsg, setMsg] = useState<string>(undetermined)
    const [btnOpen, setBtnOpen] = useState(undetermined)
    useEffect(() => {
        if (isOpen) {
            setMsg(`The store is open!`)
            setBtnOpen(`Close the store`)
        } else {
            setMsg(`The store is closed.`)
            setBtnOpen(`Open the store`)
        }
    }, [isOpen])
    return (
        <div className="open">
            <h3>{openMsg}</h3>
            <button onClick={() => { toggleOpen(!isOpen) }}>{btnOpen}</button>
        </div>
    )
}