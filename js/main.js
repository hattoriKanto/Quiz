const buttons = document.querySelectorAll(".button");

const correct = document.querySelectorAll(".correct");

const screens = document.querySelectorAll(".screen");

const lastScreen = document.querySelector("#result-screen");

const lastScreenResult = document.querySelector("#result-message");

const screenArray = Array.from(screens);

let trueCounter = 0;

let falseCounter = 0;

buttons.forEach(elem =>{
    elem.addEventListener('click', () =>{
        if(!elem.classList.contains("start")){
            if(elem.classList.contains("correct")){
                elem.disabled = true;
                trueCounter += 1;
                elem.classList.add("true");
                elem.innerHTML = "True";
                lastScreenResult.innerHTML = `You have ${trueCounter} correct answer(s)!`;
            } else{
                elem.disabled = true;
                falseCounter += 1;
                elem.classList.add("false");
                elem.innerHTML = "False";
            }
        }
        if(!elem.classList.contains("start")){
            setTimeout(() => {
                let currentScreen = elem.closest(".screen");
                currentScreen.classList.remove("show");
                let nextScreenIndex = screenArray.indexOf(currentScreen) + 1;
                let nextScreen = screenArray[nextScreenIndex];
                nextScreen.classList.add("show");
                if(screenArray.indexOf(currentScreen) === (screenArray.length - 1)){
                    currentScreen.classList.remove("show");
                    lastScreen.classList.add("show");
                }
              }, "1200") 
        } else{
            let currentScreen = elem.closest(".screen");
            currentScreen.classList.remove("show");
            let nextScreenIndex = screenArray.indexOf(currentScreen) + 1;
            let nextScreen = screenArray[nextScreenIndex];
            nextScreen.classList.add("show");
        } 
    })
})
/*function ifTrue(elem) {
    elem.disabled = true;
    trueCounter += 1;
    elem.classList.add("true");
    elem.innerHTML = "True";
    lastScreenResult.innerHTML = `You have ${trueCounter} correct answer(s)!`;
} */