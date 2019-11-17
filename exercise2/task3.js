function check(){
    if(document.getElementById("colb").checked){
        document.getElementById("input").value = "Blue";
    }
    else if(document.getElementById("colr").checked){
        document.getElementById("input").value = "Red";
    }
    else if(document.getElementById("coly").checked){
        document.getElementById("input").value = "Yellow";
    }
    else if(document.getElementById("colg").checked){
        document.getElementById("input").value = "Green";
    }
    console.log(document.getElementById("input").value);
}