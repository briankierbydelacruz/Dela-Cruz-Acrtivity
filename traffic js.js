let currentLight = 0;
const lights = document.getElementsByClassName('light');

function startTrafficLight() {
    setInterval(changeLight, 6000); 
    changeLight(); 
}

function changeLight() {
    lights[currentLight].classList.remove('active');
    currentLight = (currentLight + 1) % 3;
    lights[currentLight].classList.add('active');
}