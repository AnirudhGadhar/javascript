const jsuser = {
    name : "ani",
    age : 18,
    isLoggedIn : false,
    location : "raichur",
}

console.log(jsuser.age)

jsuser.age = 22
console.log(jsuser.age)




//const tinderuser = new Object()   // singleton object
const tinderuser = {}    // non singelton object

tinderuser.id = "123abc"
tinderuser.name="sammy"
tinderuser.isLoggedIn = true
console.log(tinderuser);


const regularuser = {
    email : "ani@gmail.com",
   firstname :"ani",
   lastname : "gadhar"

}


console.log(regularuser.lastname);


const ob1 = {1: "a" , 2: "b"}
const ob2 = {3 : "c", 4 : "d"}

const ob3 ={ob1 , ob2};
console.log(ob3)
