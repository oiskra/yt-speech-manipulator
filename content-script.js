
// (async () => {
//     const SpeechRecognition = window.webkitSpeechRecognition;
//     const SpeechGrammarList = window.webkitSpeechGrammarList
//     const SpeechRecognitionEvent = window.webkitSpeechRecognitionEvent
//     console.log(window)
    console.log('content-script has been injected');
    navigator.mediaDevices
        .getUserMedia({ audio: true })


//     const grammar =
//         "#JSGF V1.0; grammar commands; public <command> = play | pause | fullscreen";
//     const recognition = new SpeechRecognition();
//     const speechRecognitionList = new SpeechGrammarList();
//     speechRecognitionList.addFromString(grammar, 1);
//     recognition.grammars = speechRecognitionList;
//     recognition.continuous = false;
//     recognition.lang = "en-US";
//     recognition.interimResults = false;
//     recognition.maxAlternatives = 1;

//     recognition.start();

//     recognition.onspeechstart = (event) => {
//         //const color = event.results[0][0].transcript;
//         console.log('speech detected')
//     };

//     recognition.onsoundstart = (event) => {
//         //const color = event.results[0][0].transcript;
//         console.log('sound detected')
//     };

//     recognition.onspeechend = (e) => {
//         recognition.stop();
//         console.log('speech end')
//     }

//     recognition.onresult = (event) => {
//         const color = event.results
//         console.log(color)
//     }

//     recognition.onnomatch = function (event) {
//         console.log('didnt recognize')
//     }
// })()


