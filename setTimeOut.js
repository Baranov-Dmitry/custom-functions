(() => console.log('arrow function'))()

for (var i = 0; i < 10; i++) {
    ((e) => {
        setTimeout(()=> {
            console.log(e)
        }, 1000)
    })(i)
}

const arr = [-2, 10, -15, 50, 180, 60, -100, 90, 92, 122];

// sum positive number from array
console.log(((arr) => arr.reduce((prev, current) => prev = current > 0 ? prev + current : prev))(arr))