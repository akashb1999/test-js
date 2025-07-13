let myDate = new Date();

console.log(myDate);//2025-07-13T17:24:28.416Z
console.log(myDate.toString())//Sun Jul 13 2025 17:24:28 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString())//Sun Jul 13 2025
console.log(myDate.toISOString())//2025-07-13T17:27:58.567Z
console.log(myDate.toLocaleString())//7/13/2025, 5:28:39 PM
console.log(myDate.toJSON())//2025-07-13T17:28:39.511Z

console.log(typeof myDate)//it's a object!!

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let myCreate = new Date(2025, 2, 23)
console.log(myCreate.toDateString());//Sun Mar 23 2025

let myCreate1 = new Date("02-27-2020");
console.log(myCreate1.toDateString())//Thu Feb 27 2020
console.log(myCreate1.toLocaleString())//2/27/2020, 12:00:00 AM

let myTime = Date.now();
console.log(myTime)//1752429193067
// console.log(myTime.getTime());
console.log(Date.now()/1000)//1752429488.201

console.log(Math.floor(Date.now()/1000))//1752429562
console.log(Math.ceil(Date.now()/1000))//1752429595

let newDate = new Date();
// console.log(new Date.getTime()); for getting exact time
// console.log(new Date.getMonth()); for getting exact Month




//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate1 = new Date()
console.log(newDate1);
console.log(newDate1.getMonth() + 1);
console.log(newDate1.getDay());

// `${newDate.getDay()} and the time `

newDate1.toLocaleString('default', {
    weekday: "long",
    
})
