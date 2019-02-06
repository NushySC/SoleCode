// Odd or even

const number = prompt('Enter number');
const isEvenOrOdd = (number % 2 == 0)? "Even": "Odd";
console.log(isEvenOrOdd);


// Grade (wrong)

const grade = prompt('Enter your grade');
const failedOrPassed = (grade < 5)? "Suspenso": (grade >= 6)? "Bien": (grade >= 8 )? "Notable": (grade >= 9 )? "Sobresaliente":
console.log(failedOrPassed);


//Concatenation 

const hobby = prompt("What's your favorite activity");
const times = prompt("How many time a week do you practice?");
const bestWeek = ("I love " + hobby + ", " + times + " times per week.");
console.log(bestWeek);


// Else statement

const number1 = prompt("Pick a number");
const number2 = prompt("Pick a second number");

if (number1 > number2) {
    alert("Player 1 wins!");
} else {
    alert("Player 2 wins!");
}

// Age alert

const yourAge = prompt("Please enter your age");
const goAge = 18;

 if (yourAge > goAge) {
     alert("Yay! You can watch some porn now!");
 } else {
     alert("Bummer! You have to jerk off to your imagination");
 }

 // Club Bouncer

 const yourAge = prompt("Please enter your age");
 if (yourAge < 18) {
     alert("Get the fuck out, baby!");
 } else if (yourAge >= 18 && yourAge < 21) {
     alert("You may come in, but you can't get wasted");
 } else {
     alert("Welcome to the jungle!");
 }

 // Club Bouncer (doesn't work because promp return a string; so either write case by case, or force the prompt to retun a number)

 const yourAge = prompt("Please enter your age");
 switch (yourAge) {
    case yourAge < 18:
        alert("Get the fuck out, baby!");
        break;
    case yourAge >= 18 && yourAge < 21:
        alert("You may come in, but you can't get wasted");
        break;
    case yourAge > 21:
        alert("Welcome to the jungle!");
        break;  
    default:
    alert("Don't you know how to write?");
    break;
 }

 // A song a day (be careful because it's case sensitive and cases shoul be in quotes)

 const dayOfWeek = prompt("What day is today?");

 switch (dayOfWeek) {
     case "Monday":
     case "monday":
     alert("\"Monday morning\" by Pulp");
     break;
     case "tuesday":
     alert("Tuesday is a lame day with no song");
     break;
     default:
     alert("I can't think of any");
     break;
 }

 // Function Say my name, say my name

 const name = prompt("Please, tell me your name so I can sing it");

 function sayMyName (name) {
     alert("Say my name, say my name , " + name);
 }
 sayMyName(name);

//Function Say name

function sayHello(name) {
    alert("Hi, " + name);
          }
    sayHello("David");
    sayHello("Sarah"); // it will continue as long as you provide names

// Ask me Anything

const name = prompt("What's your name?");
const age = prompt("How old are you?");
const place = prompt("Where do you live");

function askMe() {
    alert ("My name is " + name + ", " + "I\'m " + age + " years old, " + "and I live in " + place);
}

askMe();

// Calculate year you were born (does not work because it doesn't return a number)

const yearBorn = prompt("Which year were you born?", "example: 1900");
const yearNow = prompt("What year is it now?");

function calculator(yearBorn, yearNow) {
    return yearBorn - yearNow;
}

//-------------------- this works because we provided the arguments as constants?¿

const yearBorn = 1990;
const yearNow = 2019;
function calculator() {
    return yearNow - yearBorn;
}

calculator();

//-------------------- this works because we provided the arguments as after?¿

function calculator(yearNow,yearBorn) {
    return yearNow - yearBorn;
}

calculator(2019,1990);

//---------- this tells you your age!

function calculator(yearNow,yearBorn) {
    return yearNow - yearBorn;
}

const myAge = calculator(2019,1990);

function tellAge () {
    alert("You are " + myAge);
}

tellAge();

//Login

const password = 0000;
const yourPassword = prompt("Please, write your password");

function checkPass () {
    if (password == yourPassword) {
        alert("You're in");
    } else {
        alert("Get out!");
    }
}

checkPass();


//Confirm box

const species = confirm('Are you a robot?');

if (species == true) {
    alert("This is scary");
} else {
    alert("We are happy to have you");
}


//Sell car Objects

var sellCar = {

    carName1   :  'BMW 428',
    carName2   : 'Benz E350,
    carName3   : 'Lexus NX 300
  
    carPrice      : function( xCar,xDollar) {
   document.write (  " Dear customer, this car is   " + xCar + " and its price is " + xDollar );
  
  }
  
  some one who want our Benz E350, then we call our object to say to our client about price of the car..
  
  document.write (  sellCar.getPrice (sellCar.carName2, 2000)  );
  
  //output
  
   Dear customer, this car is   Benz E350 and its price is 2000 );

   ///// Change name

   function person(name, age) {
    this.name = name;  
    this.age = age;
    this.changeName = function (name) {
      this.name = name;
    }
  }
  
  var p = new person("David", 21);
  p.changeName("John");
  //Now p.name equals to "John"

  ////change name too


  function person(name, age) {
    this.name = name;  
    this.age = age;
    this.changeName = function (name) {
        this.name = name;
    }
}

var p = new person("David", 21);

/* Ask for the user's name and assign it to the variable: inputUser */
var inputUser = prompt("Name please");


/* If the user's name is the same as the defined object, don't do anything */
if(inputUser=="David"){
    alert("Hey that's funny, we have the same name. So I can be lazy and let the name stay :D");
}

/* If the user's name does not meet the condition above, the name will be changed to what the user has typed */
else{
    alert("Aw man, I don't want to work. Ugh fine, I'll change the name to:"+" "+inputUser)
   p.changeName(inputUser) 
   
}
document.write(p.name);

///// yet again another change name


/***Begin***/
function person(paramName, paramAge) {
    this.name = paramName;  
    this.age = paramAge;

/* create an object property that has a function assigned to it (in other words, create a "method") */
    this.changeName = function (newName) {
        this.name = newName;
    }
}

/* create a new object with the two properties (the passed params) */
var someone = new person("David", 21);

/* call the method - the function that is assigned to the object property changeName - to change the value of the name property */
someone.changeName("John");

document.write(someone.name+" is "+someone.age);
/***End***/

Breaking it down (the way I understand it (so far)):
- An object is a variable containing other variables
- An object variable is called a property.
- An object property is a name value pair, property name and property value separated by a colon.
- An o


/// stock what?


function product(name, price , stock) {
    this.name = name;  
    this.price = price;
    this.stock =stock;
    this.outOfStock = function (stock) {
        this.stock = stock ;
    }
}

var p = new product("mobile", 21,"instock" );
p.outOfStock("outOfStock" );

document.write(p.stock );

//////////change name

var person = {
    name:"John",
    age:"20",
    changeName: function(newName){
    this.name = newName;
    }
};

person.changeName("Tim");

document.write (person.name);

-----------------------------------------
For Constructor Function-
-----------------------------------------
function person(name,age){
  this.name=name;
  this.age=age;
  this.changeName = function(newName){
  this.name = newName;
  }
};

var p=new person("John", 20);
p.changeName("Tim");

document.write (p.name);

//// yeR OF BIRTH

function person(name, age) {
    this.name= name;  
    this.age = age;
    this.yearOfBirth = bornYear;
  }
  function bornYear() {
    return 2016 - this.age;
  }

  ///year

  function person(name, age) {
    this.name= name;  
    this.age = age;
    this.yearOfBirth = bornYear;
  }
  function bornYear() {
    return 2016 - this.age;
  }
  
  var p = new person("A", 22);
  document.write(p.yearOfBirth());
  // Outputs 1994

  //////flip coin

  // function that returns a coin flip (either 0 or 1)
function coinflip() {
    return Random number either 0 or 1
  }
  
  // function that uses the coin flip to print either "left" or "right"
  function getRandomDirection() {
    var coinflip = coinflip();
    
    return "left or right" depending on value of coinflip;
  }
  
  // execute the program
  getRandomDirection()


