// function return 16
function colorOf(...arg){
    return arg.reduce((prevVal, curVal, index) => prevVal += (curVal < 16 ? '0' : '') + curVal.toString(16), '#')
}

console.log(colorOf(255,0,0))
console.log(colorOf(0,111,0))
console.log(colorOf(1, 2 ,3))


var isSquare = function(n){
    return Number.isInteger(Math.sqrt(n))
}