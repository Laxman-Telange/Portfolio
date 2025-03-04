let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0]; // default to the first voice

  // Clear existing options before adding new ones
  voiceSelect.innerHTML = "";

  // Populate the dropdown with voice options
  voices.forEach((voice, i) => {
    let option = new Option(voice.name, i);
    voiceSelect.add(option);
  });
};

voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
});

document.querySelector("button").addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
});
