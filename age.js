var age =15;
if(age>=0&&age<=9){
    console.log("Young");
}
else if(age>=10&&age<=17){
    console.log("Young Adult");
}
else if(age>=18&&age<=40){
    console.log("Youth")
}
else{
    console.log("Dude your are grown");
}
String.prototype.repeat = function (count) {
    if (count < 1) return '';
    var result = '', pattern = this.valueOf();
    while (count > 1) {
        if (count & 1) result += pattern;
        count >>>= 1, pattern += pattern;
    }
    return result + pattern;
};
var a = "*";
console.debug(a.repeat(10));



