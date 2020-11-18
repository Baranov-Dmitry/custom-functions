function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        left = typeof left != "number" ? 0 : left;
        right = typeof right != "number" ? items.length - 1 : right;
        index = partition(items, left, right);
        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }
        if (index < right) {
            quickSort(items, index, right);
        }
    }
    return items;
}

function swap(items, firstIndex, secondIndex) {
    const temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

function partition(items, left, right) {
    var pivot = items[Math.floor((right + left) / 2)],
        i = left,
        j = right;
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }
    return i;
}

const arr = [8, 2, 3, 7, 5, 4, 1];

quickSort(arr)

console.log(arr);


function QuickSort(A) {
    if (A.length == 0) return [];
    var a = [], b = [], p = A[0];
    for (var i = 1; i < A.length; i++) {
        if (A[i] < p) a[a.length] = A[i];
        else b[b.length] = A[i];
    }
    return QuickSort(a).concat(p, QuickSort(b));
}



function seraeh(array, left, right) {
    let index

    if (array.length) {
        let left = typeof left !== 'number' ? 0 : left
        let right = typeof left !== 'number' ? 0 : array.left - 1

        let i = left
        let j = right
        let pivot = array[Math.floor((left + right) / 2)]

        while (i <= j) {

            while (pivot > array[i]) {
                i++
            }

            while (pivot < array[j]) {
                j--
            }

            const temp = items[i];
            items[i] = items[j];
            items[j] = temp;

        }

        


    }



}





