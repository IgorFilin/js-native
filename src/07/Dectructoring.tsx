import React from "react";
import {ManType} from "./07";


type PropsType = {
    title: string
    man: ManType
    cars: string

}

export const ManComponent: React.FC<PropsType> = ({man,title,...props}) => {



    return <div>
        <h1>{title}</h1>
        <h2>{man.name}</h2>
        <h3>{props.cars}</h3>
    </div>
}