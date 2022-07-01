import {sum, multiplication, segmentation} from './01'

let a: number
let b: number
let c: number


beforeEach(() => {
    a = 5
    b = 6
    c = 10
})


test.skip('first test', () => {
    //Action
    const result = sum(a, b)
    const result2 = multiplication(a, b, c)
    const result3 = segmentation(a, c)
    //Result
    expect(result).toBe(11)
    expect(result2).toBe(300)
    expect(result3).toBe(2)


})
