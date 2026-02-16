function openSong(songKey) {
  document.getElementById('placeholderText').textContent = "Video for " + songKey + " coming soon!";
  document.getElementById('modal').style.display = "flex";
}

function closeModal() {
  document.getElementById('modal').style.display = "none";
}
