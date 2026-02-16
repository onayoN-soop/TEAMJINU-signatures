function playVideo(videoId) {
  document.getElementById('videoPlayer').src = "https://www.youtube.com/embed/" + videoId + "?autoplay=1";
  document.getElementById('modal').style.display = "flex";
}

function closeModal() {
  document.getElementById('modal').style.display = "none";
  document.getElementById('videoPlayer').src = "";
}
