import React from "react";
import style from './TemplateName.module.css'
import { useEffect } from "react";
import { useState } from "react";

export default function TemplateName() {

    const [counter, setCounter] = useState(0)
    useEffect(() => {
    

    }, [])
    

    return <div>
    <h1>TemplateName</h1>
    <p>This is a template name.</p>
    </div>;
}
