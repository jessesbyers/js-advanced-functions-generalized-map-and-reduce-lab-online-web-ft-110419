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
           value = block(value, num, start)
    })
    
    return value
}
