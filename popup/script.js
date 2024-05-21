const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList
const SpeechRecognitionEvent = window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent

const rec = new SpeechRecognition();
//navigator.mediaDevices.getUserMedia({ audio: true })
//await navigator.permissions.query({name: 'microphone'}).then(res => console.log(res))


