function clearValue() {
    document.getElementById("display").innerHTML = "";
}

function display_value(number) {
    document.getElementById("display").innerHTML += number;
}

function calculate() {
    var result = [];
    var answer;
    // Check if the character '+' exists in number-output value
    if(document.getElementById("display").innerHTML.includes("+")){

        result = document.getElementById("display").innerHTML.split('+');
        document.getElementById("display").innerHTML = parseInt(result[0]) + parseInt(result[1])
    }
        // Check if the character '-' exists in number-output value

    else if(document.getElementById("display").innerHTML.includes("-")){
        result = document.getElementById("display").innerHTML.split('-');
        // Calculate the expression and change output.value
        document.getElementById("display").innerHTML = parseInt(result[0]) - parseInt(result[1]);
    }
    
    else if(document.getElementById("display").innerHTML.includes("/")){
        result = document.getElementById("display").innerHTML.split('/');
        document.getElementById("display").innerHTML = parseInt(result[0]) / parseInt(result[1]);
    }
    
    else{
        result = document.getElementById("display").innerHTML.split('*');
        answer= parseInt(result[0]) * parseInt(result[1]);
    }
}

let buttons = document.getElementsByClassName ("button");
console.log(buttons.length);
 for (let i = 0; i < buttons.length; i = i + 1) {
    buttons[i].addEventListener("click", function(){
        switch (buttons[i].innerHTML) {
            case 'C':
                clearValue();
                break;
            case '=':
                calculate();
                break;
            default:
                display_value(buttons[i].innerHTML)
                break;
        }
    })
 }



