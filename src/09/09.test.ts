import {changeAgeObj, user} from "./09";

test('Test age users',()=>{


    changeAgeObj(user)

   expect(user.age).toBe(29)
})
test('Test mutantObj',()=>{

      let user2 = user
       user2.age = 30


    expect(user.age).toBe(30)
    expect(user).toEqual(user2)
})
test('Test mutantArray',()=>{

      let arrayUsers = [
          {
              name:'Igor',
              age:28
          },
          {
              name:'Vadim',
              age:32
          }
      ]
       let array2 = arrayUsers
       array2[0].name = 'Igoryan'


    expect(arrayUsers[0].name).toBe('Igoryan')
    expect(arrayUsers).toEqual(array2)
})