import {addMoneyToBudget, repairHouse, toFireStaff, toHireStaff} from "./02";

export type CityType = {
    title: string
    houses: Array<HousesType>
    governmentBuildings: Array<GovernmentBuildingsType>
    citizensNumber: number
}

type GovernmentBuildingsType = {
    type: string
    budget: number
    staffCount: number
    address: GovernmentBuildingsTypeAdreesType
}


type HousesType = {
    id: number
    buildedAt: number
    repaired: boolean
    address: AdressType
}

type TitleType = {
    title: string
}

type GovernmentBuildingsTypeAdreesType = {
    street: TitleType
}

type AdressType = {
    number: number
    street: TitleType
}


let newCity: CityType

beforeEach(() => {
    newCity = {
        title: "New York",
        houses: [{
            id: 1,
            buildedAt: 2012,
            repaired: false,
            address: {number: 100, street: {title: "White street"}}
        }, {
            id: 2,
            buildedAt: 2008,
            repaired: false,
            address: {number: 100, street: {title: "Happy street"}}
        }, {
            id: 3,
            buildedAt: 2020,
            repaired: false,
            address: {number: 101, street: {title: "Happy street"}}
        }],
        governmentBuildings: [{
            type: "HOSPITAL",
            budget: 200000,
            staffCount: 200,
            address: {street: {title: "Central Str"}}
        }, {
            type: "FIRE-STATION",
            budget: 500000,
            staffCount: 1000,
            address: {street: {title: "South Str"}}
        }],
        citizensNumber: 1000000
    }
})

let demolishHousesOnTheStreet = (newCity: CityType, str: string) => newCity.houses = newCity.houses.filter(el => el.address.street.title !== "Happy street")


let getBuildingsWithStaffCountGreaterThen = (a:GovernmentBuildingsType[],b:number) => {
return a = a.filter(el => el.staffCount > b)
}

let getStreetsTitlesOfGovernmentBuildings = (a:GovernmentBuildingsType[])=>{
    return a.map(el=>el.address.street.title)
}

let getStreetsTitlesOfHouses = (a:HousesType[]) => {
    return a.map(el => el.address.street.title)
}



test.skip("test city should contains 3 houses", () => {
    expect(newCity.houses.length).toBe(3);

    expect(newCity.houses[0].buildedAt).toBe(2012);
    expect(newCity.houses[0].repaired).toBe(false);
    expect(newCity.houses[0].address.number).toBe(100);
    expect(newCity.houses[0].address.street.title).toBe("White street");

    expect(newCity.houses[1].buildedAt).toBe(2008);
    expect(newCity.houses[1].repaired).toBe(false);
    expect(newCity.houses[1].address.number).toBe(100);
    expect(newCity.houses[1].address.street.title).toBe("Happy street");

    expect(newCity.houses[2].buildedAt).toBe(2020);
    expect(newCity.houses[2].repaired).toBe(false);
    expect(newCity.houses[2].address.number).toBe(101);
    expect(newCity.houses[2].address.street.title).toBe("Happy street");
})

test.skip("test city should contains hospital and fire station", () => {
    expect(newCity.governmentBuildings.length).toBe(2);

    expect(newCity.governmentBuildings[0].type).toBe("HOSPITAL");
    expect(newCity.governmentBuildings[0].budget).toBe(200000);
    expect(newCity.governmentBuildings[0].staffCount).toBe(200);
    expect(newCity.governmentBuildings[0].address.street.title).toBe("Central Str");

    expect(newCity.governmentBuildings[1].type).toBe("FIRE-STATION");
    expect(newCity.governmentBuildings[1].budget).toBe(500000);
    expect(newCity.governmentBuildings[1].staffCount).toBe(1000);
    expect(newCity.governmentBuildings[1].address.street.title).toBe("South Str");
})

test.skip("Budget should be for changed fot HOSPITAL", () => {
    addMoneyToBudget(newCity.governmentBuildings[0], 100000);
    expect(newCity.governmentBuildings[0].budget).toBe(300000);
});

test.skip("Budget should be changed for FIRE-STATION", () => {
    addMoneyToBudget(newCity.governmentBuildings[1], -100000);

    expect(newCity.governmentBuildings[1].budget).toBe(400000);
});

test.skip("House shoulhd be repared", () => {
    repairHouse(newCity.houses[1]);
    expect(newCity.houses[1].repaired).toBeTruthy();
});

test.skip("staff should be increased", () => {
    toFireStaff(newCity.governmentBuildings[0], 20);

    expect(newCity.governmentBuildings[0].staffCount).toBe(180);
});

test.skip("House sholhd be repared", () => {
    toHireStaff(newCity.governmentBuildings[0], 20);

    expect(newCity.governmentBuildings[0].staffCount).toBe(220);
});

// 01. Дополните тип HouseType (добавьте порядковый id от 1 и по возрастанию)
// 02. Создайте в том же файле ещё одну функцию, чтобы тесты прошли
test.skip('House should be destroyed', () => {
    demolishHousesOnTheStreet(newCity, 'Happy street');

    expect(newCity.houses.length).toBe(1);
    expect(newCity.houses[0].id).toBe(1);

})

// 03. Массив строений, где работают больше 500 людей
test.skip('buildings with correct staff count', () => {
    let buildings = getBuildingsWithStaffCountGreaterThen(newCity.governmentBuildings, 500)

    expect(buildings.length).toBe(1);
    expect(buildings[0].type).toBe('FIRE-STATION')
})

// 01. создайте в том же файле ещё одну функцию, чтобы тесты прошли
test('list of streets titles of government buildings', ()=> {
    let streetsNames = getStreetsTitlesOfGovernmentBuildings(newCity.governmentBuildings);

    expect(streetsNames.length).toBe(2);
    expect(streetsNames[0]).toBe("Central Str");
    expect(streetsNames[1]).toBe("South Str");
})

//02. создайте в том же файле ещё одну функцию, чтобы тесты прошли
test('list of streets titles', ()=> {
    let streetsNames = getStreetsTitlesOfHouses(newCity.houses);

    expect(streetsNames.length).toBe(3);
    expect(streetsNames[0]).toBe("White street");
    expect(streetsNames[1]).toBe("Happy street");
    expect(streetsNames[2]).toBe("Happy street");
})