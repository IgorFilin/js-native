export type UserType ={
    name:string
    age:number
}

export let user = {
    name:'Igor',
    age:28
}

export function changeAgeObj (obj:UserType) {
   obj.age ++
}