import React, { useEffect, useState } from "react";
import "../Styles/Open.css"
export default function Open() {
    const [isOpen, toggleOpen] = useState(true)
    const [openMsg, setMsg] = useState(`We're sorry: there was an error determining if the store is open.`)
    const [btnOpen, setButtonText] = useState(`We're sorry: we could not determine if the store is open yet.`)
    useEffect(() => {
        if (isOpen) {
            setMsg(`The store is open!`)
            setButtonText(`Close the store`)
        } else {
            setMsg(`The store is closed`)
            setButtonText(`Open the store`)
        }
    }, [isOpen])
    return (
        <div className="open">
            <h3>{openMsg}</h3>
            <button onClick={() => toggleOpen(!isOpen)}>{btnOpen}</button>
        </div>
    )
}