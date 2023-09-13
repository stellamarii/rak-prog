const arr = [13, 9, 10, 5, 3, 6]

function findIndex (arr, element) {
    return arr.indexOf(element)
}
console.log(findIndex(arr, 9))


function sum (a, b) {
    return a + b
}
console.log(sum(1, 2))


const arrowFn = (a, b) => {
    return a + b
}
console.log(arrowFn(3,5))

const arrowFn2 = (a, b) => a + b
console.log(arrowFn2(2,4))

/* function addNr (a, b) {
    return function addNrHelper (b) {
        return a + b
    }
} */
const addNr = (a) => (b) => a + b
console.log(addNr(3)(4))



//const nameStella = "Stella"
//const name = `Name is ${nameStella}`
const nameFn = name => `Name is ${name}`
console.log(nameFn("Stella"))


const arr2 = [1, 2, 3, 4, 5]
//const newArr2 = [6,7,8,9,10]
const newArr2 = arr2.map( element => element + 5 )
console.log(newArr2)

const filteredArr = arr2.filter( element => element % 2 != 0)
console.log(filteredArr)