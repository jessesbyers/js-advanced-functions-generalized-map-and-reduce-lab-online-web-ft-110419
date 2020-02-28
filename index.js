function map(array, block) {
    let newArray = []
    array.forEach(element => {
        newArray.push(block(element))
    })
    return newArray
} 

function reduce(array, block, start) {
    let value = !!start ? start : array[0];
    for (let i = !!start ? 0 : 1; i < array.length; i++) {
        value = block(array[i], value)
    }
    return value
}
