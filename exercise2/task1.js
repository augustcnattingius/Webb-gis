var input = prompt("Enter number","Number");
function calc(i)  {
    var x = 0;
    var sum = 0;
    while(i != x){
        x++;
        sum = sum + 1/Math.pow(x,2);
    }
    return sum;
}
document.getElementById("result").innerHTML = calc(input);
