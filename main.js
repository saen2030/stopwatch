const displaySecond = document.getElementById("displaySecond");
const displayMinute = document.getElementById("displayMinute");
const displayMilSecond = document.getElementById("displayMilSecond");
const maxLimit = 9;
const lapTableBody = document.getElementById("tableBody");
var intervalId = 0;

// singleToDoubleDigitConverter function takes a single digit number and appends 0 infront of it.
const singleToDoubleDigitConverter = (digit) => {
  if (digit.length == 1) {
    let doubleDigit = "0" + digit;
    return doubleDigit;
  } else {
    return digit;
  }
};

// deleteTableRows function takes a table body and deletes all its rows
const deleteTableRows = (tableBody) => {
  let allBodyRows = Array.from(tableBody.children);
  for (let i = 0; i < allBodyRows.length; i++) {
    allBodyRows[i].remove();
  }
}

var onClickStart = () => {
  if (intervalId == 0) {
    intervalId = setInterval(startTimer, 10);
  }
};

var onClickStop = () => {
  clearInterval(intervalId);
  intervalId = 0;
};

var onClickReset = () => {
  clearInterval(intervalId);
  intervalId = 0;
  lapCount = 0;
  displayMilSecond.innerText = "00";
  displaySecond.innerText = "00";
  displayMinute.innerText = "00";
  deleteTableRows(lapTableBody);
};

var lapCount = 0;
var onClickLap = () => {
  let row = lapTableBody.insertRow(lapCount);
  lapCount++;
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  cell1.innerHTML = `${lapCount}`;
  cell2.innerHTML = `${displayMinute.innerText}:${displaySecond.innerText}:${displayMilSecond.innerText}`;
};

var updateMinute = () => {
  if (parseInt(displayMinute.innerText) >= maxLimit) {
    alert("You need to reset your clock !");
    clearInterval(intervalId);
  } else {
    displayMinute.innerText = singleToDoubleDigitConverter(
      (parseInt(displayMinute.innerText) + 1).toString()
    );
  }
};

var updateSecond = () => {
  if (parseInt(displaySecond.innerText) >= 59) {
    displaySecond.innerText = "00";
    updateMinute();
  } else {
    displaySecond.innerText = singleToDoubleDigitConverter(
      (parseInt(displaySecond.innerText) + 1).toString()
    );
  }
};

var startTimer = () => {
  if (parseInt(displayMilSecond.innerText) >= 99) {
    displayMilSecond.innerText = "00";
    updateSecond();
  } else {
    displayMilSecond.innerText = singleToDoubleDigitConverter(
      (parseInt(displayMilSecond.innerText) + 1).toString()
    );
  }
};

// key bindings
var spaceKeyToggler = true;
document.addEventListener(
  "keyup",
  (event) => {
    event.preventDefault();
    const keyName = event.key;
    if (keyName === "s" && spaceKeyToggler == true) {
      spaceKeyToggler = false;
      onClickStart();
    } else if (keyName === "s" && spaceKeyToggler == false) {
      spaceKeyToggler = true;
      onClickStop();
    }
    if (keyName === "r") {
      onClickReset();
    }
    if (keyName === "l") {
      onClickLap();
    }
  }
);