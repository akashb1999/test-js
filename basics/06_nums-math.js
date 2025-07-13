const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

//Math.random() generates a random float between 0 and 1
//Math.random() * (max - min + 1) ->এটি min থেকে max পর্যন্ত রেঞ্জে random সংখ্যা তৈরি করে, দশমিক সহ।
//Math.floor(...)-->এটি দশমিক সংখ্যা কে নিচের পূর্ণ সংখ্যায় পরিণত করে। যেমন: 5.89 → 5
//Math.floor(Math.random() * (max - min + 1)) + min -->এতে min থেকে max পর্যন্ত একটি পূর্ণসংখ্যা (integer) পাওয়া যায়।
// let min = 5;
// let max = 10;
// console.log(Math.floor(Math.random() * (max - min + 1)) + min);  ->প্রতিবার রান করলে 5 থেকে 10 এর মধ্যে যেকোনো একটা সংখ্যা আসবে (যেমন: 6, 9, 10 ইত্যাদি)।