
function clearWindow() {

    document.getElementById("display").innerHTML = "";
}



const buttons = document.getElementById("buttons");
//console.log(buttons);


//document.getElementById("minus").addEventListener("click", plusbuttom());
//document.getElementById("division").addEventListener("click", plusbuttom());
//document.getElementById("gange").addEventListener("click", plusbuttom());


var numbers;
var result;
var resultet;


buttons.onclick = function (e) {


//
//    console.log(e.target);
    resultet = document.getElementById("display").innerHTML;
    var number = e.target.innerText;
    if (number.match(/^\d+$/)) {
        document.getElementById("display").innerHTML += number;
    } else {
        if (number === "=") {

            result = eval(resultet);
            document.getElementById("display").innerHTML = result;
            

        } else {
            
            if(number.length > 1 ){
                
                number = "";
            }
            document.getElementById("display").innerHTML += number;
        }
        //document.getElementById("display").innerHTML += number;
    }


//    numbersArrays = document.getElementById("display").innerHTML.split(/[+,\-,*,\/]/);
//    console.log(numbersArrays);

//    if (number === "+") {
//        console.log("før " + numbersArrays);
//        operation = "+";
//        resultet += parseInt(numbersArrays[numbersArrays.length - 1]);
//        console.log("efter " + parseInt(numbersArrays[numbersArrays.length] - 1));
//        console.log("resultet: " + resultet);
//
//    }
//
//    if (number === "-") {
//
//        operation = "-";
//        resultet -= numbersArrays[numbersArrays.length - 1];
//        numbersArrays = String.split("");
//
//    }
//    if (number === "*") {
//
//        console.log("*");
//        resultet *= numbersArrays[numbersArrays.length];
//        numbersArrays = String.split("");
//    }
//    if (number === "/") {
//
//        console.log("/");
//        resultet /= numbersArrays[numbersArrays.length];
//        numbersArrays = String.split("");
//    }




};


