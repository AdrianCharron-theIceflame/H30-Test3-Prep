import React, { useEffect, useState } from "react";
import "../Styles/Open.css"
const defaultMsg = `We're sorry: there was an error determining if the store is open.`
export default function Open() {
    // let isOpen = true
    // function toggleOpen(bool) {
    //     isOpen = bool
    // }
    const [isOpen, setIsOpen] = useState(true)
    const [openMsg, setMsg] = useState(defaultMsg)
    const [btnOpen, setButtonText] = useState(defaultMsg)
    useEffect(() => {
        if (isOpen) {
            setMsg(`The store is open!`)
            setButtonText(`Close the store`)
        } else {
            setMsg(`The store is closed`)
            setButtonText(`Open the store`)
        }
    }, [isOpen])
    function toggleOpen() {
        setIsOpen(!isOpen)
    }
    return (
        <div className="open">
            <h3>{openMsg}</h3>
            <button onClick={toggleOpen}>{btnOpen}</button>
        </div>
    )
}