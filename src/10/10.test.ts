import {changeAdressUser, icreaseAge, updateLaptop, UsersLaptopType, UsersTypes} from "./10";


test ('test age user', ()=>{
   let user:UsersTypes = {

       name:'Igor',
       age:28,
       address:{
           city:'Tula',
           house:1
       }
   }
   const copyUser = icreaseAge(user)


    expect(user.age).toBe(28)
    expect(copyUser.age).toBe(29)
    expect(user.address).toEqual(copyUser.address)

})
test ('test move user', ()=>{
    let user:UsersLaptopType = {
        name:'Igor',
        age:28,
        address:{
            city:'Tula',
            house:2
        },
        laptop:{name:'Asus'}
    }
    const copyUser = changeAdressUser(user,'Moscow')


    expect(copyUser).not.toBe(user)
    expect(copyUser.address).not.toBe(user.address)
    expect(copyUser.laptop).toBe(user.laptop)
    expect(copyUser.address.title).toBe('Moscow')
    expect(user.address.city).toBe('Tula')

})
test ('test update laptop', ()=>{
    let user:UsersLaptopType = {
        name:'Igor',
        age:28,
        address:{
            city:'Tula',
            house:2
        },
        laptop:{name:'Asus'}
    }
    const copyUser = updateLaptop(user,'Macbook')


    expect(copyUser).not.toBe(user)
    expect(copyUser.address).toBe(user.address)
    expect(copyUser.laptop).not.toBe(user.laptop)
    expect(copyUser.laptop.name).toBe('Macbook')
    expect(user.laptop.name).toBe('Asus')


})
