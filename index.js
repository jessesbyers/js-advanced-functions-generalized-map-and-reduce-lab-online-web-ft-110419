function map(array, block) {
    let newArray = []
    array.forEach(element => {
        newArray.push(block(element))
    })
    return newArray
} 

function reduce(array, block, value=0) {
    let answer

    array.forEach(element => {
       answer = block(element, value)
    })
    return answer
}

// function reduce(array, block, value=0) {
//     let answer
//     for (let i = value; i < array.length; i++ ) {
//         answer = block(array, value)
//     }
//     return answer
// }