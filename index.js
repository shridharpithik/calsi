function add()
{
        number1 = document.getElementById("first").value;
        number2 = document.getElementById("second").value;
        document.getElementById("result").innerHTML = parseInt(number1)+parseInt(number2);
}

function sub() 
{ 
        num1 = document.getElementById("first").value;
        num2 = document.getElementById("second").value;
document.getElementById("result").innerHTML = number1-number2;
}
function multiply()
{
        num1 = document.getElementById("first").value;
        num2 = document.getElementById("second").value;
        document.getElementById("result").innerHTML = number1 * number2;
}

function divide() 
{ 
        num1 = document.getElementById("first").value;
        num2 = document.getElementById("second").value;
document.getElementById("result").innerHTML = number1 / number2;
}
