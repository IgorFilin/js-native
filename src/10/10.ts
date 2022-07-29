import exp from "constants";
import {user} from "../09/09";

export type UsersTypes = {
    name:string
    age:number
    address:{city:string,house:number}
}

export type UsersLaptopType = UsersTypes & {
    laptop:{name:string}
}
export type UsersDeveloperType =  UsersLaptopType & {
    specialization:{work:string}
}

export type UserBooksType = UsersTypes & UsersLaptopType & UsersDeveloperType &  {
    books:string[]
}

type companyType = {
    id:number
    title:string
}

export type UserCompaniesType = UserBooksType & {
    companies:Array<companyType>
}





export const icreaseAge =  (u:UsersTypes) => {
    let copyUser = {...u,age:u.age + 1}
    return copyUser
}
export const changeAdressUser = (user:UsersLaptopType,city:string) => {
    return  {...user,address: {...user.address,title:city}}

}

export const updateLaptop = (user:UsersLaptopType,nameLaptop:string) => {
    return {...user,laptop:{...user.laptop,name:nameLaptop}}
}

export const updateSpecialization = (u:UsersDeveloperType,workName:string) => {
    return {...u,specialization: {...u.specialization,work: workName}}
}
export const updateOtherHouseUser = (u:UserBooksType,nameHouse:number) =>{
    return {...u,address:{...u.address,house:nameHouse}}
}
export const addBooksForUser = (u:UserBooksType,books:Array<string>) => {
    return {...u,books:[...u.books,...books]}
}
export const replacementBook = (u:UserBooksType,oldBook:string,newBook:string) => ({...u,books:u.books.map(b => b === oldBook? newBook:b)
})

export const removeBook = (u:UserBooksType,removeBook:string) => ({...u,books: u.books.filter(book => book !== removeBook)})

export const addCompanies = (u:UserCompaniesType,newCompany:companyType)=> ({...u,companies: [...u.companies,newCompany]})