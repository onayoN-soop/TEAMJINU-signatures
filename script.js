const songs = {
  "song1": {
    title: "see봐 래쓰고",
    performers: {
      "두니": "https://vod.sooplive.co.kr/player/187080117/catch"
    },
    thumbnail: "thumbnails/1000.png"
  }
};

const gallery = document.getElementById("gallery");

for (let key in songs) {
  const song = songs[key];
  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.src = song.thumbnail;
  img.alt = song.title;
  card.appendChild(img);

  const title = document.createElement("h3");
  title.textContent = song.title;
  card.appendChild(title);

  const performersDiv = document.createElement("div");
  performersDiv.className = "performers";

  for (let performer in song.performers) {
    const btn = document.createElement("button");
    btn.textContent = performer;
    btn.onclick = (e) => {
      e.stopPropagation();
      window.open(song.performers[performer], "_blank");
    };
    performersDiv.appendChild(btn);
  }

  card.appendChild(performersDiv);
  card.onclick = () => {
    performersDiv.style.display = performersDiv.style.display === "block" ? "none" : "block";
  };

  gallery.appendChild(card);
}
