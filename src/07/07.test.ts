import {ManType} from "./07";


let props:ManType;

beforeEach(()=>{
     props = {
        name: 'Igor',
        age: 28,
        lessons: [{title: "1"}, {title: '2'}],
        address:{
            street:{
                title:'Max Gorkogo'
            }
        }
    }
})
test('1', () => {



    // const age = props.age
    // const lessons = props.lessons

    let {age,lessons} = props //деструктуризация
    let {title}=props.address.street

    expect(age).toBe(28)
    expect(lessons.length).toBe(2)
    expect(title).toBe('Max Gorkogo')

})

test('2', () => {



    // const age = props.age
    // const lessons = props.lessons

    let {age,lessons} = props //деструктуризация
    let {title}=props.address.street

    expect(age).toBe(28)
    expect(lessons.length).toBe(2)
    expect(title).toBe('Max Gorkogo')

})

test('3', () => {
const [ls1,ls2] = props.lessons

    expect(ls1.title).toBe('1')
    expect(ls2.title).toBe('2')


})