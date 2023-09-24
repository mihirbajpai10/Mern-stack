function addnums(a , b) {
    var c = a+b;
    console.log(c);
    
}

addnums(34, 676);
// console.log(c);


const getAvg = function(m1, m2, m3, m4 = 100){

    console.log(m1, m2, m3, m4);

    let total = ((m1+m2+m3+m4)/800)*100

    // console.log(total);
    // console.log(total+'%');
    return total;
}

let percentage = getAvg(136, 134, 34, 199);
console.log(percentage);

// Arrow Function

const fact = ( n ) => {

    let f = 1;

    for(let i=2; i<=n; i++){
        f = f*i;
    };
    return f;
}

let ans = fact(6);
console.log(ans);

// WAP to check if a no. is prime

let a = 13;

for (let i = 2; i < a; 1++) {
    if(a%i == 0){
        isPrime = false;
        break;
    }
    
}
if(isPrime) console.log('prime');
else console.log('not prime');


// WAP to check if a no. is palindrome

let num1 = 28547;
let rev = 0;

while(num1>0){
    let d = num1%10;
    console.log(rev);
    rev = rev*10 + d;
    num1 = parseInt(num1/10);
}

console.log(rev);

// WAP to take sum of all perfect square from 10 to 100

for(let i=10; i<=100; i++){
         let sqrt = i**0.5;
         if(sqrt%1 === 0){
             console.log(i);
         }
     }

// let [a, b] = [4, null];
