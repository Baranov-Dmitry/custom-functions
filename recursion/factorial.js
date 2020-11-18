

// Рекурсивное нахождение факториала с мемоизацией

// обявляем функцию которая возвращает функцию с замыканием переменной кеша
function getFactorialRecursion() {
    // кеш
    const cache = []
    // возвращаем функцию с замыканием
    return function memo(n) {
        if (n === 1) {
            // случий остановки
            return n
        } else {
            // если результат есть в кеш
            if (cache[n]) {
                console.log('returned form cache: ', cache[n])
                return cache[n]
            } else {
                // иначе вичисляем и заносим в кеш
                cache[n] = n * memo(n - 1)
                return cache[n]
            }
        }
    }
}

const getFactorial = getFactorialRecursion()

console.log(getFactorial(5))
console.log(getFactorial(8))
console.log(getFactorial(9))
console.log(getFactorial(12))