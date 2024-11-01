import React from "react";
import style from './NotFound.module.css'

import pic from '../../assets/image/notfound.png'

export default function NotFound() {

    

    return <div className="mx-auto w-1/2 mt-20">
    <img className="w-full" src={pic} alt="404 not found" />
    </div>;
}
