let a =10;
let b =6;

console.log(a + b);
console.log(a * b);
console.log(a - b);
console.log(a / b);
console.log(a % b)


// uninary operator

console.log(a++);
console.log(a);
console.log(++a);
console.log(a--);
console.log(a);
console.log(--a);

// comparison
console.log(a < b);
console.log(a > b);
console.log(a == b);

// control flow
let score = 80;

if (score >= 80){
    console.log("You had A");
} else if (score >= 75){
    console.log("You had B+");
} else if (score >= 70) {
    console.log("You had B");
} else if (score >= 65) {
    console.log("You had C+")
} else if (score >= 60);{
    console.log("You had C")
}


const gender = "Male"

switch (gender) {
    case "Male" :
    console.log("Go to the male washroom");
    break;
    case "Female":
        console.log("Go to the female washroom");
        break;
        default:
            console.log("No washroom for you");
            break;
}


for (let count =1; count <10; count++) {
    console.log(count);
}

let count = 1

while (count < 10) {
console.log(count);
count++;
}
