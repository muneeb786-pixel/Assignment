// variable initialize 
let username:string ='Muneeb Ur Rehman'

// print in lowercase 
console.log('Lower case ',username.toLowerCase());
// print in uppercase
console.log('Upper case ',username.toUpperCase());
// print in title case
// slice string and pic first charactor of each string and uppercase it and remaining string to lower case 
let titleCase=username.split(' ').map(word=>{
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}).join(' ')
console.log('Title case',titleCase);
