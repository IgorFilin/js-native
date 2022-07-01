const ages = [10,21,60,50,45,67,89,32,28,41,100,1]

const ChahgeAges = (age:number) => {
    return age > 40
}

export type CourseType = {
    title:string
    price:number
}

export const courses = [
    {title:'HTML',
    price:100},
    {
        title:'JS',
        price:270
    },
    {
        title:'React',
        price:560
    },
    {
        title:'CSS',
        price:180
    }
]

const changePrice = (price:number)=> {
    return price > 300
}