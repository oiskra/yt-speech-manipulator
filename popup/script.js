import { IS_RECOGNITION_ON } from "../constants.js";

const activateBtn = document.querySelector("#activate-btn");
const waveLines = document.querySelectorAll(".wave-line");

const toggleRecognitionButtonAnimation = (newValue) => {
    activateBtn.classList.toggle('active', newValue);
    waveLines.forEach((line) => {
        line.classList.toggle('on', newValue)
    })
}

chrome.storage.onChanged.addListener((changes) => {
    if(!Object.hasOwn(changes, IS_RECOGNITION_ON))
        return;
    
    toggleRecognitionButtonAnimation(changes[IS_RECOGNITION_ON].newValue);
});

document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.sync.get([IS_RECOGNITION_ON])
        .then(v => toggleRecognitionButtonAnimation(v[IS_RECOGNITION_ON])) 
});

activateBtn.addEventListener('click',() => {
    chrome.storage.sync.get([IS_RECOGNITION_ON])
        .then((v) => {
            chrome.storage.sync.set({
                [IS_RECOGNITION_ON]: !v[IS_RECOGNITION_ON]
            })
        })
});


