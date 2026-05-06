let currentAudio = null;
let currentSound = null;

// 🔊 Preloaded sounds cache
const sounds = {};

// 🧠 List every sound name ONCE
const soundList = [
  "AV1-Hello",
  "AV1-Greeting",
   "AV1-Pitch1",
   "AV1-Pitch2",
    "AV1-Pitch3",
     "AV1-Transfer",
      "AV1-Holdon",
     "AV1-Staywithme",
      "AV1-Thanksforasking",
      "AV1-Canuhearme",
       "AV1-Busy",
        "AV1-RealPerson",
        "AV1-marketplace",
        "AV1-Medicare-Medicaid",
         "AV1-NotInterested",
            "AV1-NotInt2",
              "AV1-Free",
          "AV1-NoProblem",
       "AV1-OK",
       "AV1-RUThere",
       "AV1-SorryGoAhead",
        "AV1-Sorrytohearthat",
         "AV1-Staywithme",
          "AV1-Yes",
      "AV1-No",



        
     

];

// 🚀 PRELOAD ALL SOUNDS
soundList.forEach(name => {
  const audio = new Audio("sounds/" + name + ".mp3");
  audio.preload = "auto";
  sounds[name] = audio;
});

// ▶️ Play sound
function playSound(soundName) {

  const audio = sounds[soundName];
  if (!audio) return;

  // Same sound already playing → do nothing
  if (
    currentAudio &&
    currentSound === soundName &&
    !currentAudio.paused
  ) {
    return;
  }

  // Stop current sound
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  currentAudio = audio;
  currentSound = soundName;

  currentAudio.currentTime = 0;
  currentAudio.play().catch(err => {
    console.log("Audio error:", err);
  });

  currentAudio.onended = () => {
    currentAudio = null;
    currentSound = null;
  };
}

// ⏹ Stop button
function stopSound() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
    currentSound = null;
  }
}
