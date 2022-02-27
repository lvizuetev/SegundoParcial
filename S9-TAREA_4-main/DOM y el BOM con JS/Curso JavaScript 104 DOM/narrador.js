let d = document;
let w = window;

export default function narrador() {
  const $select = d.querySelector("#assistant--lang");
  const $textArea = d.querySelector("#assistant--text");
  const $button = d.querySelector("#assistant--button");

  let u = new SpeechSynthesisUtterance();
  let speech = w.speechSynthesis;
  let voices = [];

  //setSpeech();

  d.addEventListener("DOMContentLoaded", (e) => {
    w.speechSynthesis.addEventListener("voiceschanged", (e) => {
      voices = speech.getVoices();
      voices.forEach((voice) => {
        let $option = d.createElement("option");
        $option.textContent = `${voice.name} - ${voice.lang}`;
        $option.value = voice.name;
        $select.appendChild($option);
      });
    });

    d.addEventListener("change", (e) => {
      if (e.target === $select) {
        u.voice = voices.find((voice) => {
          voice.name === e.target.value;
        });
      }
    });

    d.addEventListener("click", (e) => {
      if (e.target === $button) {
        u.text = $textArea.value;
        w.speechSynthesis.speak(u);
        $textArea.value = "";
      }
    });
  });
}