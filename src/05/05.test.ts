import {PeopleType} from "./05";


let people:Array<PeopleType>

beforeEach(()=>{
    people = [
        {name: 'Andrey Petrov', age: 28},
        {name: 'Ruslan ivanov', age: 24},
        {name: 'Petya Salkin', age: 34},
        {name: 'Alisa Kashina', age: 19}
    ]
})

test('bla bla bla',()=>{


    let namePeople = people.map(el => `Добро пожаловать в инкубатор ${el.name.split(' ')[0]}`)



    expect(namePeople.length).toBe(4)
    expect(namePeople[0]).toBe("Добро пожаловать в инкубатор Andrey")
})