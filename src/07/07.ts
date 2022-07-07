type TitleType = {
    title:string
}
type StreetType = {
    street:TitleType
}

export type ManType = {
    name: string
    age: number
    lessons: Array<{title: string}>
    address:StreetType
}
