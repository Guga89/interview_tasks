const listOfStrings = ["668801", "668802", "668803", "668804", "668805"]
const listOfStrings2 = ["668801", "668802", "668803", "7799ii", "668804", "668805", "779901", "779902", "779903", "6688ii", "779904", "779905"]
const listOfStrings3 = ["668801", "668802", "668803", "668804", "668805", "779901", "779902", "779903", "779904", "779905"]

// [listOfStrings[0].substring(0, 4)]

function oneConcater(list) {
    const listSorted = list.sort()
    const output = listSorted.reduce((acc, cur) => {
        return acc + ' ' + cur.substring(4, 6)
    })
    // console.log(output)
    return output
}


function multiConcater(list, func) {
    const mySet = new Set(list.map((item) => { return item.substring(0, 4) }))
    const output = []

    mySet.forEach((item) => {
        const result = list.filter(listItem => {
            return listItem.substring(0, 4) === item
        })
        output.push(func(result))
    })
    console.log(output.join('+'))
}


oneConcater(listOfStrings)
multiConcater(listOfStrings2, oneConcater)



