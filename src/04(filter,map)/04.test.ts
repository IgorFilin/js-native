import {courses, CourseType} from './04'

test.skip('age person', () => {
    const ages = [10, 21, 60, 50, 45, 67, 89, 32, 28, 41, 100, 1]


    let agesFilter = ages.filter(age => age > 40)

    expect(agesFilter).toBe(agesFilter)


})

test.skip('cash courses', () => {



    let coursesFilter = courses.filter(el => el.price > 300)

    expect(coursesFilter.length).toBe(1)
    expect(coursesFilter[0].title).toBe('React')


})