const array = [8,2,3,7,5,4,1];

function bubbleSort(arr) {
    let swap
    let flag
    for (let i = 0; i < arr.length - 1; i++) {
        flag = false
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = swap
                flag = true
            }
        }
        if (!flag) break
    }
    return arr
}





console.log(bubbleSort(array));