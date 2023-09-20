//quokka
const a = 1
const b = 2
console.log(a + b)

// == (checks values)/ === (checks types also)
console.log(1 == "1")
console.log(1 === "1")

//string to number
let nr = "1"
console.log(parseInt(nr))
console.log(+nr)

//promise, async, await
;(async () => {
    const myPromise = () =>
        new Promise(resolve =>
            setTimeout(() => resolve("myPromise() resolved in 100ms"), 100)
        )
    const myPromise2 = new Promise(resolve =>
        setTimeout(() => resolve("myPromise2 resolved in 200ms"), 200)
    )
    const asyncAwait = async () => {
        const myPromiseResponse = await myPromise()
        const myPromiseResponse2 = await myPromise2
        return { myPromiseResponse, myPromiseResponse2 }
    }

    console.log(await asyncAwait())
})()

//prettier
const m = 1,
    n = 2,
    o = 3

//trading places
const list = [1, 2, 3, 4, 47]
const number = list[4]
console.log(number)

//array deconstruct
;(() => {
    const array = () => [1, 2, 3, 4, 5]
    const deconstruct = () => {
        const [b, , d, , a] = array()
        return { a, b, d }
    }
    console.log(deconstruct())
})()

//object deconstuct

const raimo = {
    name: "raimo",
    uni: "tlu"
}
console.log(raimo.name + " " + raimo.uni)
console.log(raimo["name"] + " " + raimo["uni"])
