const gen = (n, w) => {
  return (num) => num % n === 0 ? w : ''
}
const fizz = gen(3, 'fizz')
const bazz = gen(5, 'bazz')

for (let i = 1; i <= 100; i++) {
  console.log(fizz(i)+bazz(i) || i)
}

// [...Array(99).keys()].map(i => i + 1).forEach(i => console.log(fizz(i)+bazz(i)) || i)
