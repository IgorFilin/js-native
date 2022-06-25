
type StudentType = {
    name: string
    age: number
    city: string
    lesson: LessonType
    StekTechnologies:StekTechnologiesType
}

type LessonType = {
    incubator: string
    hometasks: Array<string>
}

type StekTechnologiesType = {
    JS:boolean
    HTML:boolean
    CSS:boolean
    React:boolean
    TypeScript:boolean
}

export const student = {
    name: 'Igor',
    age: 28,
    city: 'Tula',
    lesson: {
        incubator:'Monday',
        hometasks:[
            'IgnatTasks','ReactKabzda','MicroTasks'
        ]

    },
    StekTechnologies:{
        JS:true,
        HTML:true,
        CSS:true,
        React: false,
        TypeScript:false,
    }

}

console.log(student.lesson.hometasks[1])
console.log(student.StekTechnologies.JS)
console.log(student.name)