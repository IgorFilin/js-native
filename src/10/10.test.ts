import {
    addBooksForUser, addCompanies,
    changeAdressUser, CompaniesType,
    icreaseAge, removeBook, replacementBook, updateCompanies, updateCompanies2,
    updateLaptop, updateOtherHouseUser,
    updateSpecialization, UserBooksType, UserCompaniesType,
    UsersDeveloperType,
    UsersLaptopType,
    UsersTypes
} from "./10";


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
test ('test create specialization', ()=>{
    let user:UsersDeveloperType = {
        name:'Igor',
        age:28,
        address:{
            city:'Tula',
            house:2
        },
        laptop:{name:'Asus'},
        specialization:{work:'Backend developer'}
    }
    const copyUser = updateSpecialization(user,'Frontend developer')


    expect(copyUser).not.toBe(user)
    expect(copyUser.address).toBe(user.address)
    expect(copyUser.laptop).toBe(user.laptop)
    expect(copyUser.specialization.work).toBe('Frontend developer')
    expect(user.specialization.work).toBe('Backend developer')


})
test ('test other houses', ()=>{
    let user:UserBooksType = {
        name:'Igor',
        age:28,
        address:{
            city:'Tula',
            house:2
        },
        laptop:{name:'Asus'},
        specialization:{work:'Backend developer'},
        books:['html','css','react','js']
    }
    const copyUser = updateOtherHouseUser(user,12)


    expect(copyUser).not.toBe(user)
    expect(copyUser.address).not.toBe(user.address)
    expect(copyUser.laptop).toBe(user.laptop)
    expect(copyUser.specialization).toBe(user.specialization)
    expect(copyUser.books).toBe(user.books)
    expect(copyUser.address.house).toBe(12)
    expect(user.address.house).toBe(2)


})
test ('test add books', ()=>{
    let user:UserBooksType = {
        name:'Igor',
        age:28,
        address:{
            city:'Tula',
            house:2
        },
        laptop:{name:'Asus'},
        specialization:{work:'Backend developer'},
        books:['html','css','react','js']
    }
    const copyUser = addBooksForUser(user,['redux','rest Api'])


    expect(copyUser).not.toBe(user)
    expect(copyUser.address).toBe(user.address)
    expect(copyUser.laptop).toBe(user.laptop)
    expect(copyUser.specialization).toBe(user.specialization)
    expect(copyUser.books).not.toBe(user.books)
    expect(copyUser.books[4]).toBe('redux')
    expect(copyUser.books[5]).toBe('rest Api')
    expect(user.books.length).toBe(4)
    expect(copyUser.books.length).toBe(6)


})
test ('test replacement books js on ts', ()=>{
    let user:UserBooksType = {
        name:'Igor',
        age:28,
        address:{
            city:'Tula',
            house:2
        },
        laptop:{name:'Asus'},
        specialization:{work:'Backend developer'},
        books:['html','css','js','react']
    }
    const copyUser = replacementBook(user,'js','ts')


    expect(copyUser).not.toBe(user)
    expect(copyUser.address).toBe(user.address)
    expect(copyUser.laptop).toBe(user.laptop)
    expect(copyUser.specialization).toBe(user.specialization)
    expect(copyUser.books).not.toBe(user.books)
    expect(copyUser.books[2]).toBe('ts')
    expect(user.books[2]).toBe('js')
    expect(user.books.length).toBe(4)
    expect(copyUser.books.length).toBe(4)
    expect(copyUser.books[0]).toBe('html')


})
test ('remove books js', ()=>{
    let user:UserBooksType = {
        name:'Igor',
        age:28,
        address:{
            city:'Tula',
            house:2
        },
        laptop:{name:'Asus'},
        specialization:{work:'Backend developer'},
        books:['html','css','js','react']
    }
    const copyUser = removeBook(user,'js',)


    expect(copyUser).not.toEqual(user)
    expect(copyUser.address).toEqual(user.address)
    expect(copyUser.laptop).toEqual(user.laptop)
    expect(copyUser.specialization).toEqual(user.specialization)
    expect(copyUser.books).not.toEqual(user.books)
    expect(copyUser.books[2]).toEqual('react')
    expect(user.books[2]).toBe('js')
    expect(user.books.length).toBe(4)
    expect(copyUser.books.length).toBe(3)
    expect(copyUser.books[2]).toBe('react')


})
test ('add companies where working user', ()=>{
    let user:UserCompaniesType = {
        name:'Igor',
        age:28,
        address:{
            city:'Tula',
            house:2
        },
        laptop:{name:'Asus'},
        specialization:{work:'Backend developer'},
        books:['html','css','js','react'],
        companies:[{id:1,title:'Epam'},{id:2,title:'Yandex'},{id:3,title:'IT-INCUBATOR'}]
    }
     const copyUser = addCompanies(user,{id:3,title:'Google'})


    expect(copyUser).not.toBe(user)
    expect(copyUser.address).toBe(user.address)
    expect(copyUser.laptop).toBe(user.laptop)
    expect(copyUser.specialization).toBe(user.specialization)
    expect(copyUser.books).toBe(user.books)
    expect(user.companies.length).toBe(3)
    expect(copyUser.companies.length).toBe(4)
    expect(copyUser.companies[3].title).toBe('Google')



})
test ('update company for user', ()=>{
    let user:UserCompaniesType = {
        name:'Igor',
        age:28,
        address:{
            city:'Tula',
            house:2
        },
        laptop:{name:'Asus'},
        specialization:{work:'Backend developer'},
        books:['html','css','js','react'],
        companies:[{id:1,title:'Esam'},{id:2,title:'Yandex'},{id:3,title:'IT-INCUBATOR'}]
    }
     const copyUser = updateCompanies(user,1,'EPAM') as UserCompaniesType


    expect(copyUser).not.toBe(user)
    expect(copyUser.address).toBe(user.address)
    expect(copyUser.laptop).toBe(user.laptop)
    expect(copyUser.specialization).toBe(user.specialization)
    expect(copyUser.books).toBe(user.books)
    expect(copyUser.companies).not.toBe(user.companies)
    expect(user.companies.length).toBe(3)
    expect(copyUser.companies.length).toBe(3)
    expect(copyUser.companies[0].title).toBe('EPAM')



})
test ('update company for user', ()=>{


    const companies:CompaniesType = {
       'Sasha':[{id:1,title:'Esam'},{id:2,title:'Yandex'},{id:3,title:'IT-INCUBATOR'}],
       'Vitya':[{id:1,title:'Esam'},{id:3,title:'IT-INCUBATOR'}]
       }


    const copyCompanies = updateCompanies2(companies,'Sasha',1,'Google')


    expect(companies).not.toBe(copyCompanies)
    expect(companies['Vitya']).toBe(copyCompanies['Vitya'])
    expect(companies['Sasha']).not.toBe(copyCompanies['Sasha'])
    expect(companies['Sasha'][0].title).toBe('Google')




})
