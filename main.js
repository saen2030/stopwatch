const displaySecond = document.getElementById("displaySecond");
const displayMinute = document.getElementById("displayMinute");
const displayMilSecond = document.getElementById("displayMilSecond");
const maxLimit = 9;
const lapTableBody = document.getElementById("tableBody");

var intervalId;
var lapCount = 0;


const toDoubleDigitConverter = (digit) => {
  if (digit.length < 2) {
    let doubleDigit = "0" + digit;
    return doubleDigit;
  } else {
    return digit;
  }
};

const deleteTableRows=()=>{
  // Array.from(lapTableBody.children).forEach(c => c.remove())
  let allBodyRows=Array.from(lapTableBody.children);
  for(let i=0;i<allBodyRows.length;i++){
    allBodyRows[i].remove();
  }
  
}

var onClickStart = () => {
  intervalId = setInterval(startTimer, 10);
};

var onClickStop = () => {
  clearInterval(intervalId);
};

var onClickReset = () => {
  clearInterval(intervalId);
  lapCount=0;
  displayMilSecond.innerText = "00";
  displaySecond.innerText = "00";
  displayMinute.innerText = "00";
  deleteTableRows();
};

var onClickLap = () => {
  let row = lapTableBody.insertRow(lapCount);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  cell1.innerHTML = `${lapCount}`;
  cell2.innerHTML = `${displayMinute.innerText}:${displaySecond.innerText}:${displayMilSecond.innerText}`;
  lapCount++;
};

var updateMinute = () => {
  if (parseInt(displayMinute.innerText) >= maxLimit) {
    alert("You need to reset your clock !");
    clearInterval(intervalId);
  } else {
    displayMinute.innerText = toDoubleDigitConverter(
      (parseInt(displayMinute.innerText) + 1).toString()
    );
  }
};

var updateSecond = () => {
  if (parseInt(displaySecond.innerText) >= 59) {
    displaySecond.innerText = "00";
    updateMinute();
  } else {
    displaySecond.innerText = toDoubleDigitConverter(
      (parseInt(displaySecond.innerText) + 1).toString()
    );
  }
};

var startTimer = () => {
  if (parseInt(displayMilSecond.innerText) >= 99) {
    displayMilSecond.innerText = "00";
    updateSecond();
  } else {
    displayMilSecond.innerText = toDoubleDigitConverter(
      (parseInt(displayMilSecond.innerText) + 1).toString()
    );
  }
};
