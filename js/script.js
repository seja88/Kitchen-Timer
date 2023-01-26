//BODY STYLES ETC.
const body = document.querySelector('body');
body.style.display = 'flex';
body.style.flexDirection = 'column';
body.style.width = "50vh";
body.style.justifyContent= 'center';
body.style.textAlign= 'center'
// h1 as TIMER
const timer = document.createElement('h1');
document.body.appendChild(timer);
timer.innerHTML = 'READY';

// h2
const minutes = document.createElement('h2');
document.body.appendChild(minutes);
minutes.style.color = 'red';
minutes.innerHTML = 'minutes';
minutes.style.margin = '0px';
//text Area
const textAreaOne = document.createElement('textarea');
document.body.appendChild(textAreaOne);
//h2
const seconds = document.createElement('h2');
document.body.appendChild(seconds);
seconds.style.color = 'blue';
seconds.innerHTML = 'seconds';
seconds.style.margin = '0px';
//text area
const textAreatwo = document.createElement('textarea');
document.body.appendChild(textAreatwo);
//button
const button = document.createElement('button');
document.body.appendChild(button);
button.innerHTML = "START THE COUNTDOWN";
button.style.marginTop = '10px'

//reset button
const resetButton = document.createElement('button');
document.body.appendChild(resetButton);
resetButton.innerHTML = "RESET"
resetButton.style.marginTop = "10px";


//reset button EVENT

resetButton.addEventListener('click', (event) => {
    location.reload();
});

// button EVENT
button.addEventListener('click', (event) => {
    let minutes = parseInt(textAreaOne.value);
    let seconds = parseInt(textAreatwo.value);
    let countDown = (minutes * 60) + seconds;
    timer.innerHTML = countDown;

    const interval = setInterval(()=>{
        if (countDown > 0) {
            countDown -= 1;
            timer.innerHTML = countDown;
        }
        else {
            clearInterval(interval);
            timer.innerHTML = "COUNTDOWN FINISHED.";
        }

    },1000)
});


