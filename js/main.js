const buttons = document.querySelectorAll(".button-option");

const btnStart = document.querySelector("#start");

const screens = document.querySelectorAll(".screen");

const lastScreen = document.querySelector("#result-screen");

const lastScreenResult = document.querySelector("#result-message");

const screenArray = Array.from(screens);

let trueCounter = 0;

let falseCounter = 0;

btnStart.addEventListener('click', () =>{
    let currentScreen = btnStart.closest(".screen");
    currentScreen.classList.remove("show");
    let nextScreenIndex = screenArray.indexOf(currentScreen) + 1;
    let nextScreen = screenArray[nextScreenIndex];
    nextScreen.classList.add("show");
})

buttons.forEach(elem =>{
    elem.addEventListener('click', () =>{
        let currentScreen = elem.closest(".screen");
        let screenBtns = currentScreen.querySelectorAll(".button-option");
        if(elem.classList.contains("correct")){
            screenBtns.forEach(elem =>{
                elem.disabled = true;
            })
            elem.disabled = true;
            trueCounter++;
            elem.classList.add("true");
            elem.innerHTML = "True";
            lastScreenResult.innerHTML = `You have ${trueCounter} correct answer(s)!`;
        }
        if(!elem.classList.contains("correct")){
            screenBtns.forEach(elem =>{
                elem.disabled = true;
            })
            elem.disabled = true;
            falseCounter++;
            elem.classList.add("false");
            elem.innerHTML = "False";
        }
        setTimeout(() => {
            currentScreen.classList.remove("show");
            let nextScreenIndex = screenArray.indexOf(currentScreen) + 1;
            let nextScreen = screenArray[nextScreenIndex];
            nextScreen.classList.add("show");
            if(screenArray.indexOf(currentScreen) === (screenArray.length - 1)){
                currentScreen.classList.remove("show");
                lastScreen.classList.add("show");
            }
          }, "1200") 
    })
})