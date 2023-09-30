const displaySecond=document.getElementById("displaySecond");
const displayMinute=document.getElementById("displayMinute");
const displayMilSecond=document.getElementById("displayMilSecond");


// alert(typeof(parseInt(currentMilSecondValue.innerText)))
var intervalId;
var maxLimit=9;

var toDoubleDigitConverter=(digit)=>{
    if(digit.length<2){
        let doubleDigit="0"+digit;
        return doubleDigit;
    }else{
        return digit;
    }
}

var onClickStart=()=>{

    intervalId=setInterval(startTimer,10);
}
var updateMinute=()=>{
    if((parseInt(displayMinute.innerText))>=maxLimit){
        alert("You need to reset your clock !");
        clearInterval(intervalId);
    }else{
        displayMinute.innerText=toDoubleDigitConverter(((parseInt(displayMinute.innerText))+1).toString());
    }
    
}

var updateSecond=()=>{
    if((parseInt(displaySecond.innerText))>=59){
        displaySecond.innerText="00";
        updateMinute();
    }else{
        displaySecond.innerText=toDoubleDigitConverter(((parseInt(displaySecond.innerText))+1).toString());
    }
}




var startTimer=()=>{
    if((parseInt(displayMilSecond.innerText))>=99){
        displayMilSecond.innerText="00";
        updateSecond();
    }else{
        displayMilSecond.innerText=toDoubleDigitConverter(((parseInt(displayMilSecond.innerText))+1).toString());
    }

}