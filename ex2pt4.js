//Write a function that multiply each number under 70 by 2 in the following array.
//Hint: use a .map function


const ages = [25, 31, 42, 77];

const multiplication = ages.map((x) => x<70? (x*2) : x)
console.log(multiplication)

