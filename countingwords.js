//Counting 
function myFun() {
    var str = prompt("Enter a word");
    
//var length = str.replace(/\s/g, "").length;
//    alert("Your word has "+length+" letters");
    if(str==str+" " ){
        alert("Just one word please!")
    }
    else{
        var n = str.length;
        alert(n);
    }
}
myFun();
