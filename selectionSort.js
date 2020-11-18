function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i

        for (let j = i; j < arr.length; j++) {
            if (arr[i] >  arr[j]) {
                 min = j
            }
        }

        if (min !== i ) {
            let swap = arr[i]
            arr[i] = arr[min]
            arr[min] = swap
        }

    }
    return arr
}

const array = [8,2,3,7,5,4,1];

console.log(selectionSort(array))