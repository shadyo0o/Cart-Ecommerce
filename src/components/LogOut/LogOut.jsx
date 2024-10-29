import React from "react";
import style from './LogOut.module.css'
import { useEffect } from "react";
import { useState } from "react";

export default function LogOut() {

    const [counter, setCounter] = useState(0)
    useEffect(() => {
    

    }, [])
    

    return <div>
    <h1>LogOut</h1>
    <p>This is a template name.</p>
    </div>;
}
