// New code for play/pause button
const playPauseBtn = document.getElementById('playPauseBtn');
let isPlaying = false;

// Replace the audio source with your own audio file
const audio = new Audio("path/to/your/audio.mp3");

playPauseBtn.addEventListener('click', () => {
  isPlaying = !isPlaying;

  if (isPlaying) {
    // Play audio
    audio.play();
    playPauseBtn.textContent = "⏸️";
  } else {
    // Pause audio
    audio.pause();
    playPauseBtn.textContent = "▶️";
  }
})