//example-one(string)
let Author: string = "Allama Iqbal";
let Quote:string = "Be aware of your own worth;use all of your power to achieve it.";
console.log(`Author: ${Author}\nQuotes: ${Quote}`);

//Example-two(number);
let x:number = 15;
let y:number = 5;
console.log("x = 15 and y = 5");
console.log(`x + y: ${x + y}`);
console.log(`x - y: ${x - y}`);
console.log(`x / y: ${x / y}`);
console.log(`x * y: ${x * y}`);

//Example-three(boolean)
let todayishot:boolean = true;
let todayiscold:boolean = false
console.log(`todayishot: ${todayishot}\ntodayiscold: ${todayiscold}`);

//Example-four(null)
let nullnumber:null=null;
console.log(nullnumber);

//Example-five(undefined);
let a;
console.log(a);

//Example-six(symbol)
let mysymbol=("Aiman Khalid!") ;
console.log(mysymbol);
 
//Example-seven(bigint)
let bigintvalue=(123456789101112121314151612711181920);
console.log(bigintvalue);

//Example of case sencitive and uppercase
let myName = 'Muhammad Khalid';
console.log(myName.toUpperCase());

//Example of lowercase
let country_Name = 'PAKISTAN';
console.log(country_Name.toLowerCase());

//Example of titlecase
let PersonName:string='Hello Thomas';
console.log(PersonName.replace(/\b\w/g,(char)=>char.toUpperCase()));

//Example of Arrays
let fruits:string[]=['Apple','Mango','Banana','Orange','Pineapple','Srawberry'];
console.log(fruits);
//Example of push
fruits.push('cherry');
console.log(fruits);
//Example of pop
fruits.pop();
console.log(fruits);
//Example of slice
fruits[4] = 'Grapes';
console.log(fruits);
//Example of splice
fruits.splice(3,2,'berry','guava');
console.log(fruits);

//Example of any
let city: any = ['karachi','lahore','islamabad','multan','hyderabad',15,1,10,true];
console.log(city);

//Example of number
let number: number []=[1,26,37];
console.log(number);

//Example of boolean

let booleantype:boolean[]= [true, false];
console.log(booleantype);
