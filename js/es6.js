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
console.log(ninja.name);
