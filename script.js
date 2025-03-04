"use strict"

// task 1
let firtsName = "aleksandre";

// task 2

let lastName = "chokheli";

// task 3

const fullName = `${firtsName} ${lastName}`;

console.log(fullName);

// task 4
const dateOfBirth = 2005;

console.log(`მე დავიბადე ${dateOfBirth} წელს`);

// task 5

let curretYear = 2025;

let calculateAge = curretYear - dateOfBirth;

console.log(`მე ვარ ${calculateAge} წლის`)


// task 6

let checkNumber = 1;

if(checkNumber < 0){
    console.log("Negative")
}

else if(checkNumber === 0){
    console.log("Zero");
}
else{
console.log("Positive");

}


// task 7
let weather = prompt();
if(weather == "მზიანი"){
    console.log("ცხელა! მზის სათვალე არ დაგავიწყდეს! 😎");
}
else if(weather == "წვიმიანი"){
    console.log("ჭექა-ქუხილია! ქოლგა წაიღე! ☔");
}

else if(weather == "თოვლიანი"){
    console.log("ყინავს. თბილად ჩაიცვი! ❄️")
}

else if(weather == "ნისლიანი"){
    console.log("ფრთხილად იყავი, გზაზე ცუდი ხილვადობაა! 🌫️");
    
}
else{
    console.log("ასეთი ამინდი არ არსებობს")
}
