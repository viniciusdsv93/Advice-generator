var adviceNumber = document.querySelector('.advice-container h4 span');
var adviceContent = document.querySelector('.advice-container h2');
var changeButton = document.querySelector('.change-button');
function requestNewAdvice() {
    fetch('https://api.adviceslip.com/advice')
        .then(function (response) { return response.json(); })
        .then(function (data) {
        adviceNumber.innerHTML = "#".concat(data.slip.id);
        adviceContent.innerHTML = "\"".concat(data.slip.advice, "\"");
    });
}
requestNewAdvice();
changeButton.addEventListener('click', requestNewAdvice);
