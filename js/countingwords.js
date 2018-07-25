//Counting Letters
//function myFun() {
//    var str = prompt("Enter a word");
//    
//var length = str.replace(/\s/g, "").length;
//   alert("Your word has "+length+" letters");
////    if(str==str+" " ){
////        alert("Just one word please!")
////    }
////    else{
////        var n = str.length;
////        alert(n);
////    }
//}
//myFun();
function second() {
    var str = prompt("Enter a word");

    var s = str.length;
    // alert(s);
    if (s == 2) {
        alert("second character is" + s);
    }
}
second();




//function findPrimeFactors (num) {
//
//    var primeFactors =[];
//    while (num % 2 === 0) {
//        primeFactors.push(2);
//        num = num / 2;
//    }
//    
//    var sqrtNum = Math.sqrt(num);
//    for (var i = 3; i <= sqrtNum; i++) {
//        while (num % i === 0) {
//            primeFactors.push(i);
//            num = num / i;
//        }
//    }
//
//    if (num > 2) {
//        primeFactors.push(num);
//    }
//    return primeFactors;
//    
//    
//}
//document.write(findPrimeFactors(10));
//alert(findPrimeFactors(123));


//Reversing a string

//function reverseString(str) {
//    return str;
//    
//}
//reverseString("hello");
