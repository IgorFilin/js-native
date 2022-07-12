// const user = {
//     name: 'Igor',
//     age: 28,
//     address: {
//         city: {
//             title: 'Tula'
//         }
//     }
// }

// console.log(user.address.city.title)
// console.log(user["address"]["city"]["title"])
let user = {id:'1231',name:'Ivan'}

export let userObj = {
    '101': {id: 101, name: 'Igor'},
    '10231': {id: 10231, name: 'Sveta'},
    '112': {id: 112, name: 'Alex'},
    '1': {id: 1, name: 'Rita'},
    '12345': {id: 12345, name: 'Max'},
}
userObj[user.id] = user
delete userObj[user.id]
console.log(userObj)

let userArr = [
    {id: 101, name: 'Igor'},
    {id: 10231, name: 'Sveta'},
    {id: 112, name: 'Alex'},
    {id: 1, name: 'Rita'},
    {id: 12345, name: 'Max'},
]

let userArr2 = [...userArr,user]
// console.log(userArr2)
// console.log(userArr2 === userArr)





userObj["0"] = 'Igoryan'

// console.log(Object.keys(userObj))
// console.log(Object.values(userObj))
let userSveta = Object.keys(userObj).find(el => el === '2')
console.log(userSveta)