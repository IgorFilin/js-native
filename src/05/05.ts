export type PeopleType = {
    name: string
    age: number
}


let people = [
    {name: 'Andrey Petrov', age: 28},
    {name: 'Ruslan ivanov', age: 24},
    {name: 'Petya Salkin', age: 34},
    {name: 'Alisa Kashina', age: 19}
]

let namePeople = people.map(el => `Добро пожаловать в инкубатор ${el.name.split(' ')[0]}`)
