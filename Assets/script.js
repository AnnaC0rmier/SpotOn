const formData = document.getElementById("Form");


function getVideoData(song1) {
  const videoUrl = `https://youtube-music-api3.p.rapidapi.com/search?q=${song1}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '286c8b5e12mshe701d6545b1d951p1ee483jsnefd7231b1b8b',
      'X-RapidAPI-Host': 'youtube-music-api3.p.rapidapi.com'
    }
  };
  fetch(videoUrl, options)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var videoDiv = document.getElementById('video');
      var video = document.createElement('iframe');
      video.src = `https://www.youtube.com/embed/${data.result[0].videoId}`
      video.width = 600;
      video.height = 400;
      video.allowFullscreen = true;
      videoDiv.removeChild(videoDiv.firstChild)
      videoDiv.appendChild(video);
      videoAppend = true;
    })
}

function getMusicData(selectedGenre) {
  const url = `https://spotify23.p.rapidapi.com/recommendations/?limit=20&seed_genres=${selectedGenre}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '93e4659605mshe6c8aad95b92bf9p1214fbjsn192328b68f6f',
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
  };

  fetch(url, options)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

      var song1 = document.getElementById('song1').textContent = '1. ' + data.tracks[0].name + ' By ' + data.tracks[0].artists[0]?.name;
      var song2= document.getElementById('song2').textContent = '2. ' + data.tracks[1].name + ' By ' + data.tracks[1].artists[0]?.name;
      var song3 = document.getElementById('song3').textContent = '3. ' + data.tracks[2].name + ' By ' + data.tracks[2].artists[0]?.name;
      var song4= document.getElementById('song4').textContent = '4. ' + data.tracks[3].name + ' By ' + data.tracks[3].artists[0]?.name;
      var song5 =document.getElementById('song5').textContent = '5. ' + data.tracks[4].name + ' By ' + data.tracks[4].artists[0]?.name;


      const existingData = JSON.parse(localStorage.getItem('savedSongs')) || [];

      const newSongs = [song1, song2, song3, song4, song5];
      
      const updatedArray = existingData.concat(newSongs);
      
      if (updatedArray.length > 15) {
          updatedArray.splice(0, 5); 
      }
      
      localStorage.setItem('savedSongs', JSON.stringify(updatedArray));
      
      getVideoData(song1);
    })
}


formData.addEventListener("submit", function(event) {
  event.preventDefault();

  const genreDropdown = document.getElementById("genre");
  const selectedGenre = genreDropdown.value;

  getMusicData(selectedGenre);
});

