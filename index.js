function map(array, block) {
    let newArray = []
    array.forEach(element => {
        newArray.push(block(element))
    })
    return newArray
} 

function reduce(array, block, start=0) {
    let value = start

    array.forEach(num => {
       value = block(num, start)
    })
    return value
}


// function reduceToTotal(array, start=0) {
//     let value = start
//     array.forEach(num => {
//         value = value + num
//     })
//     return value
// }


// function reduce(array, block, value=0) {
//     let answer
//     for (let i = value; i < array.length; i++ ) {
//         answer = block(array, value)
//     }
//     return answer
// }