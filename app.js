function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}
function generatePin() {
    document.getElementById('screen-pin').value = getPin();
}

document.getElementById('calc-buttons').addEventListener('click', function (event) {
    const button = event.target.innerText;
    const screen = document.getElementById('screen-button');
    if (isNaN(button)) {
        if (button == 'C') {
            screen.value = '';
            document.getElementById('notify-success').style.display = 'none';
            document.getElementById('notify-fail').style.display = 'none';
        }
        if (button == '<') {
            screen.value = screen.value.slice(0, -1);
        }
    }
    else {
        screen.value += button;
    }
});

document.getElementById('code-submit').addEventListener('click', function () {
    const screenButtonValue = document.getElementById('screen-button').value;
    const screenPinValue = document.getElementById('screen-pin').value;
    if (screenButtonValue == screenPinValue) {
        document.getElementById('notify-success').style.display = 'block';
        document.getElementById('notify-fail').style.display = 'none';
    }
    else {
        document.getElementById('notify-success').style.display = 'none';
        document.getElementById('notify-fail').style.display = 'block';
    }
})