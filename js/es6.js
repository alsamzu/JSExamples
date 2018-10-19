window.onload = function () {
    var items = document.getElementsByTagName("ul");

    function es() {
        for (let i = 0; i < items.length; i++) {
            items[i].onclick = function () {
                console.log(i);
            }
        }
    }
    // es();

}

var name = "crystal";
var belt = "black";

var ninja = {
    name,
    belt
}
//console.log(ninja.name);

//String Methods

var str = "Alsam is Amazing! "
//repeat method
console.log(str.repeat(5));

//startwith method
console.log(str.startsWith("A"));
//Endswith method
console.log(str.endsWith("A"));
//includes method
console.log(str.includes("A", 4));

//Arrow functions
var ninja = (nam) => {
    console.log(`${nam} says hello`);
}
ninja("Alsam");

//Sets
//Sets eliminate duplicates
var flames = new Set();
flames.add(`Warda`).add(`Zulfa`);
console.log(flames);

//Arrow Function

let z = (a, b) =>
    a + b;



document.write(z(41, 6));

//For of loop

//for..of is very similar to for..in with slight modification.

//for..of iterates through list of elements (i.e) like Array and returns the elements (not their index) one by one.
let string = "Javascript";
for (let char of string) {
    console.log(char);
}
