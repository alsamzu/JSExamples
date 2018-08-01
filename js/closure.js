var addTo = function(passed){

    var add = function(inner){
        var inner = 3;
        return passed + inner;
    }
    console.log(add(4));
    return add;
}
console.log(addTo(4));
