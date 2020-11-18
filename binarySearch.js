const arr = [2, 10, 15, 50, 55, 60, 87, 90, 92, 122]

function binarySearch(arr, value) {
    let guess
    let min = 0
    let max = arr.length - 1
    while (min <= max) {
        guess = parseInt((min + max) / 2)
        if (arr[guess] === value) {
            return `Index of array is: ${guess}`
        } else {
            if (arr[guess] > value) {
                max = guess - 1
            } else {
                min = guess + 1
            }
        }
    }
    console.log(min, max, guess)
    return `Value ${value} is not found`
}

console.log(binarySearch(arr, 60))