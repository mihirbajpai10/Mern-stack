const nums = [34, 8, 9, 25, 46, 36, 77];

const evens = nums.filter( (n) => { return n%2===1 } )

console.log(evens);

// WAP to filter prices b/w 500 to 2000
const prices = [344, 455, 785, 1500, 1999,567, 800];

const money = prices.filter( (p) => { return p>=500 && p<=2000 } );
console.log(money);

//

const nums2 = [ 4, 6, 8, 5, 7, 1, 3 ];

const result = nums2.map((n) => { return n**2 });

console.log(result);

//

const prices2 = [ '$54.45', '$45.66', '$565.23', '$678.35' ];

const money2 = prices2.map ( (p) => { return parseInt(p.slice(1)) });
console.log(money2);

//

const names = ['Ansh Gupta', 'Ansuman Verma', 'Mihir Bajpai'];

const fnames = names.map ( (n) => { return (n.split(' ')[0]) });
console.log(fnames);