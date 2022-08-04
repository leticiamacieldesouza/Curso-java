function increment () {
    var currentNumberWrapper = document.getElementById("currentNumber");
    var currentNumber = 0;
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement () {
    var currentNumberWrapper = document.getElementById("currentNumber");
    var currentNumber = 0;
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

