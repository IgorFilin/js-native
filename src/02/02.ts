
import {CityType} from "./02.test";
import exp from "constants";


export const addMoneyToBudget = (governmentBuilding:GovernmentBuildingsType,budget:number) => {
  return  governmentBuilding.budget += budget
}

export const repairHouse = (housesType: HousesType) => {
    return housesType.repaired = true
}

export const toFireStaff = (GovernmentBuil:GovernmentBuildingsType,budget:number) => {
    GovernmentBuil.staffCount -=  budget
}

export const toHireStaff = (GovernmentBuil:GovernmentBuildingsType,budget:number) => {
    GovernmentBuil.staffCount +=  budget
}