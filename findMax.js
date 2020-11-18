const arr = [2, 10, 15, 50, 180, 60, -100, 90, 92, 122]

function findMax(arr) {
    let max = arr[0]
    for (let index = 1; index < arr.length; index++) {
        if (arr[index] > max) {
            max = arr[index]
        }
    }
    return max
}

function findMin(arr) {
    let max = arr[0]
    for (let index = 1; index < arr.length; index++) {
        if (arr[index] < max) {
            max = arr[index]
        }
    }
    return max
}

console.log(findMin(arr))