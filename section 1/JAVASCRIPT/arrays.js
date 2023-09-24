const nums = [12 ,434, 45, 656, 3, 454];

console.log(nums);
console.log(nums.length);


const movies = ['Openhemier', 'Dream Girl 2', 'Gadar 2', 'RRR', 'Avengers', 'Flash'];
console.log(movies[4]);   //for element
console.log(movies.indexOf('Avengers')); //for index
console.log(movies.at(-2)); //for count array for backward

// slicing
console.log(movies.slice(1,5));
console.log(movies.slice(3));
console.log(movies.slice(3,-1));
console.log(movies.slice(3,5));

//adding elements

movies.push('Red'); //to add element at the end of array
movies.unshift('Batman'); //to add element at the beginning of an array
console.log(movies);

// removing elements

movies.pop(); // to remove element from the end of an array
movies.shift(); ////to remove element at the beginning of an array

console.log(movies);

//removes more than 1 element from any index
movies.splice(2 , 3);

// console.log(movies);

console.log( [ 'new element', ...movies, 'new element', ...nums ] );
console.log( [ ...movies.slice(0,2), 'new element', ...movies.slice(2) ] );

console.log([...'Mihir']);

//

const namess = ['Mihir', 'Shantanu', 'Satyam', 'Gaurav', 'Samar'];

const names = (arr, index, ele) => {
    return [...arr.slice(0,index), ele, ...arr.splice(index)]
};
console.log(names(namess,1,'Ansh'));