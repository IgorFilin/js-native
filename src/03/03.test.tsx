import {addValueStudent, isActiveStudent, stekReactActive, StudentLiveCity} from './03'


export type StudentType = {
    name: string
    age: number
    isActive: boolean
    city: string
    lesson: LessonType
    StekTechnologies: StekTechnologiesType
}

type LessonType = {
    incubator: string
    hometasks: Array<string>
}

type StekTechnologiesType = {
    JS: boolean
    HTML: boolean
    CSS: boolean
    React: boolean
    TypeScript: boolean
}

let student: StudentType

beforeEach(() => {
    student = {
        name: 'Igor',
        age: 28,
        isActive: true,
        city: 'Tula',
        lesson: {
            incubator: 'Monday',
            hometasks: [
                'IgnatTasks', 'ReactKabzda', 'MicroTasks'
            ]

        },
        StekTechnologies: {
            JS: true,
            HTML: true,
            CSS: true,
            React: false,
            TypeScript: false,
        }

    }
})

test('Add value student', () => {


    addValueStudent(student, 'NativeJS')


    expect(student.lesson.hometasks[3]).toBe('NativeJS')

})
test('student stek React active', () => {


    stekReactActive(student)


    expect(student.StekTechnologies.React).toBe(true)

})
test('student city is true or false', () => {

    let result = isActiveStudent(student)

    expect(result).toBe(true)
})
test('Student live city', () => {

    let result1 = StudentLiveCity(student,'Tula')
    let result2 = StudentLiveCity(student,'Moscow')

    expect(result1).toBe(true)
    expect(result2).toBe(false)

})