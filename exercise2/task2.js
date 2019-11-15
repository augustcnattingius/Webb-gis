function MyFunc() {
var x = document.getElementById("var").value;
var y = Math.pow(++x,2);
console.log(x);
console.log(y);
document.getElementById("res").innerHTML = y;

}
