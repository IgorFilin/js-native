


export type userObjType = {
    [key:string]:{id:number,name:string}
}
let userObj:userObjType

beforeEach(()=>{
    userObj = {
        '101': {id: 101, name: 'Igor'},
        '10231': {id: 10231, name: 'Sveta'},
        '112': {id: 112, name: 'Alex'},
        '1': {id: 1, name: 'Rita'},
        '12345': {id: 12345, name: 'Max'},
    }
})

test('testing associative array',()=> {

    let user = {id:1231,name:'Ivan'}

    userObj[user.id] = user

    expect(userObj['1231']).toStrictEqual({id:1231,name:'Ivan'})


})