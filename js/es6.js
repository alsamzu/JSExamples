window.onload = function(){
   var items = document.getElementsByTagName("ul");

function es (){
    for(let i = 0; i<items.length; i++){
        items[i].onclick = function(){
            console.log(i);
        }
    }
}
   // es();

}

var name = "crystal";
var belt = "black";

var ninja = {
    name,belt
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
console.log(str.includes("A",4));

//Arrow functions
var ninja = (nam) => {
        console.log(`${nam} says hello`);
}
ninja("Alsam");


