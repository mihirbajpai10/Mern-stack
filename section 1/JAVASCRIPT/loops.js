// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// for (let i = 100; i > 0; i-=10) {
//     console.log(i);
// }

// Process.stdout.write('First Line');
// console.log('Second Line');

// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; i <= i; j++)
//         Process.stdout.write('*');
//     console.log();
// }

// for(let i=1; i<=10; i++){
//     console.log('*'.repeat(i));
// }

// let num = 25
// let sqrt = num**0.5;
// if(sqrt%1 === 0){
//     console.log('perfect square');
// }

// for(let i=10; i<=100; i++){
//     let sqrt = i**0.5;
//     if(sqrt%1 === 0){
//         console.log(i);
//     }
// }

// while
let num1 = 28547;
let rev = 0;

while(num1>0){
    let d = num1%10;
    console.log(rev);
    rev = rev*10 + d;
    num1 = parseInt(num1/10);
}

console.log(rev);