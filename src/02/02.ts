
import {CityType} from "./02.test";
import exp from "constants";


export const addMoneyToBudget = (governmentBuilding:any,budget:number) => {
  return  governmentBuilding.budget += budget
}

export const repairHouse = (housesType: any) => {
    return housesType.repaired = false
}

export const toFireStaff = (GovernmentBuil:any,budget:number) => {
    GovernmentBuil.staffCount -=  budget
}

export const toHireStaff = (GovernmentBuil:any,budget:number) => {
    GovernmentBuil.staffCount +=  budget
}