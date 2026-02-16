const songs = {
  "song1": {
    title: "see봐 레쓰고",
    performers: {
      "두니": "https://vod.sooplive.co.kr/player/187080117/catch",
      "금별": "https://vod.sooplive.co.kr/player/187082555/catch"
    },
    thumbnail: "thumbnails/1000.png"
  },
  "song2": {
    title: "아픈건 딱 질색이니까",
    performers: {
      "Charlie": "https://vod.sooplive.co.kr/player/187080119/catch",
      "Dave": "https://vod.sooplive.co.kr/player/187080120/catch"
    },
    thumbnail: "thumbnails/1001.png"
  }
  // Add more songs here
};

const gallery = document.getElementById("gallery");

for (let key in songs) {
  const song = songs[key];

  const card = document.createElement("div");
  card.className = "card";

  // Thumbnail image
  const img = document.createElement("img");
  img.src = song.thumbnail;
  img.alt = song.title;
  card.appendChild(img);

  // Title below thumbnail
  const title = document.createElement("h3");
  title.textContent = song.title;
  card.appendChild(title);

  // Performer buttons (hidden by default)
  const performersDiv = document.createElement("div");
  performersDiv.className = "performers";

  for (let performer in song.performers) {
    const btn = document.cre
