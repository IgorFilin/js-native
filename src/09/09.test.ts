import {changeAgeObj, user} from "./09";

test('Test age users',()=>{


    changeAgeObj(user)

   expect(user.age).toBe(29)
})
