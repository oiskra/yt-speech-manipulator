const muteBtn = document.querySelector('.ytp-mute-button');
const fullscreenBtn = document.querySelector('.ytp-fullscreen-button');
const skipAdBtn = document.querySelector('.ytp-skip-ad-button');
const video = document.querySelector('.video-stream');

const SpeechRecognition = window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = "en-US";

const handleVoiceCommand = (e) => {
    const result = e.results[0][0].transcript;   
    console.log(result);
}

const startRecognition = () => {
    recognition.addEventListener('end', restartRecognition);
    recognition.start();
}

const endRecognition = () => {
    recognition.removeEventListener('end', restartRecognition);
    recognition.stop();
}

const restartRecognition = () => !recognition.manualStop && setTimeout(() => recognition.start(), 100);

chrome.storage.sync.get(['yvc_ext_isRecOn'])
.then((v) => {v['yvc_ext_isRecOn'] && startRecognition()})
.then(() => {
    chrome.storage.onChanged.addListener((changes) => {
        const changedStorageValue = changes['yvc_ext_isRecOn'].newValue;
    
        if(changedStorageValue) { startRecognition(); }
        else { endRecognition(); }  
    })    
})

recognition.addEventListener('start', () => console.log('started...'));
recognition.addEventListener('result', handleVoiceCommand);










