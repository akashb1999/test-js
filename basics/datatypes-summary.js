//Java Script is Dynamaic Language, not static one!
//Datatypes-----
// There are 2 types of datatypes---

//......................Premitive Datatypes___________________________Non-Premitive Datatypes.

//Premitive Datatypes (Call by Value)
//There are 7 types of premitive datatypes -----

//  > String, > Number , > Null, > undefined, > Boolian, > BigInt, > symbol (to make some value Unique).

//Non-Premitive Datatypes (call by Reference)
// > Arrays, > Objects***, > Functions.

const score = 100
const addScore = 100
const email = undefined
let objects = null
const id = "12345"
const anotherId = Symbol("12345")
const bigNumber = 1234567890123456789n

console.log(id)
console.log(anotherId)
console.log (email)//undefine
console.log (objects)//null
console.log (id === anotherId)//false
console.log (typeof bigNumber)//bigint
console.log (typeof objects)//object

// ********************* Non-Premitive (Reference)***********************
const citys = ["Rampurhat","Kolkata","Mumbai"]//Array
let myObj = {
    name : "Akash Bhattacharyya",
    myCity : 'Kolakata',
    age : 26,
}  //objects (comma{,}is mandatory)
let myFunctions = function(){
    console.log("Hello WOrld")
} //Function (afte declare a variable, must put (=)before function)

console.log(myObj)
console.log(myFunctions)

console.table([citys, myFunctions, myObj, anotherId, id, bigNumber])

//let ret1 = [undefined , undefined]
let retTypes = {
    undefined : 'undefined',
    Null : 'null',
    Boolian : 'bool',
    Number : 'Number',
    String : 'String',
    Object1 /*netive and doesn't implement{call}*/ : 'objects',
    Object2/*netive and doesn't implement{call}*/ : 'functions',
    object3/*host and doesn't implement {call}*/ : ["und","num","str","bool"],
}
console.table ([retTypes])

let r1 = [undefined, undefined]
let r2 = [null,null]
let r3 = ['boolian','boolian']
let r4 = ['Number', 'number']
let r5 = ['string' ,'string']
let r6 = ['objects','object']
let r7 = ['object', 'functions']
let r8 = ['object', undefined,'boolian','string','number']

console.table([r1,r2,r3,r4,r5,r6,r7,r8])