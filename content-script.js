const initialize = () => {
    const SpeechRecognition = window.webkitSpeechRecognition;
    const SpeechGrammarList = window.webkitSpeechGrammarList;
    
    const grammar =
        "#JSGF V1.0; grammar commands; public <command> = play | pause | fullscreen";
    const recognition = new SpeechRecognition();
    const speechRecognitionList = new SpeechGrammarList();
    speechRecognitionList.addFromString(grammar, 1);
    recognition.grammars = speechRecognitionList;
    recognition.lang = "en-US";

    return recognition;
}

const RECOGNITION = initialize();
RECOGNITION.start();

const handleVoiceCommand = (e) => {
    const res = e.results[0][0].transcript;
    console.log(res);
}

RECOGNITION.onstart = () => console.log('Recognition started.');
RECOGNITION.onend = () => !RECOGNITION.manualStop && setTimeout(() => RECOGNITION.start(), 100);

RECOGNITION.onresult = handleVoiceCommand;






