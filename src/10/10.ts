export type UsersTypes = {
    name:string
    age:number
    address:{city:string,house:number}
}

export type UsersLaptopType = UsersTypes & {
    laptop:{name:string}
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