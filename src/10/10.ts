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