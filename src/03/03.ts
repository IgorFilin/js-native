import {StudentType} from "./03.test";

export let addValueStudent = (obj:StudentType,value:string) => {
             obj.lesson.hometasks.push(value)
}

export let stekReactActive = (objStudent:StudentType) => {
    objStudent.StekTechnologies.React = true
}

export  let isActiveStudent = (objStudent:StudentType) => {
          return   objStudent.isActive = true
}

export  let StudentLiveCity = (obj:StudentType,addCity:string) => {
    return obj.city == addCity
}