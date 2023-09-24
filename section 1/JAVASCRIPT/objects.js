const user = {
    name : 'Mihir Bajpai',
    email : 'mihir@gmail.com',
    age : 23,
    password : 'egs97re',
    'roll-no' : '1140003'
}

console.log( user.name );
console.log( user['age'] );
console.log( user['roll-no'] );
user.city = 'Lucknow';
console.log(user);
user.age = 22


const smartphone = {
    brand : 'Samsung',
    model : 'S23 Ultra',
    price : 123000,
    colors : [ 'black', 'green', 'purple' ]
};

console.log( smartphone.colors[2] );
smartphone.colors [2] = 'Red';
console.log(smartphone);



const smartphoneList = [
   { brand : 'Samsung', model : 'S23 Ultra', price : 123000, colors : [ 'black', 'green', 'purple' ] }
];

console.log(smartphoneList[0].brand);
console.log(smartphoneList[0].colors[1]);
