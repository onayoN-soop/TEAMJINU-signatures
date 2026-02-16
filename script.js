// Song data with multiple performers
const songs = {
  "song1": {
    title: "Song 1",
    performers: {
      "Alice": "dQw4w9WgXcQ",
      "Bob": "3JZ_D3ELwOQ"
    },
    thumbnail: "thumbnails/song1.png"
  },
  "song2": {
    title: "Song 2",
    performers: {
      "Charlie": "kXYiU_JCYtU",
      "Dave": "abc123"
    },
    thumbnail: "thumbnails/song2.png"
  },
  "song3": {
    title: "Song 3",
    performers: {
      "Eva": "def456",
      "Frank": "ghi789"
    },
    thumbnail: "thumbnails/song3.png"
  }
};

// Generate cards dynamically
const cardGrid = document.getElementById('cardGrid');
for (let key in songs) {
  const card = document.createElement('div');
  card.className = 'card';
  card.onclick = () => openSong(key);

  const img = document.createElement('img');
  img.src = songs[key].thumbnail;
  img.alt = songs[key].title;
  card.appendChild(img);

  const h3 = document.createElement('h3');
  h3.textContent = songs[key].title;
  card.appendChild(h3);

  cardGrid.appendChild(card);
}

// Open modal with performer buttons
function openSong(songKey) {
  const song = songs[songKey];
  const firstPerformer = Object.keys(song.performers)[0];
  document.getElementById('videoPlayer').src = "https://www.youtube.com/embed/" + song.performers[firstPerformer] + "?autoplay=1";

  const container = document.getElementById('performerButtons');
  container.innerHTML = "";
  for (let performer in song.performers) {
    const btn = document.createElement('button');
    btn.textContent = performer;
    btn.onclick = (e) => {
      e.stopPropagation();
      document.getElementById('videoPlayer').src = "https://www.youtube.com/embed/" + song.performers[performer] + "?autoplay=1";
    };
    container.appendChild(btn);
  }

  document.getElementById('modal').style.display = "flex";
}

function closeModal() {
  document.getElementById('modal').style.display = "none";
  document.getElementById('videoPlayer').src = "";
}
