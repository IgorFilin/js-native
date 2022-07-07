type TitleType = {
    title:string
}
type StreetType = {
    street:TitleType
}

export type ManType = {
    name: string
    age: number
    lessons: Array<{title: string,name?:string,age?:number}>
    address:StreetType
}


let lessons = [{title: "1", age:28}, {title: '2'},{title: '2' ,name:'react'}]

let [,...rest] = lessons
console.log(rest)
