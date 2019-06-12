// document.querySelector('.button-2').addEventListener('click',countDownTimer);

console.log("ok");

const formElement = document.querySelector('#form');

console.log(formElement);

formElement.addEventListener('submit', countDownTimer);

function countDownTimer(event) {
    // const nowTime = new Date();
    const isReady = confirm("Are you OK??");
    if (isReady == false)
        event.preventDefault();
    const getTime = document.querySelector('.setTime');
    console.log(getTime.value);


}
