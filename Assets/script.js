function getVideoData(song1){
  const videoUrl = `https://youtube-music-api3.p.rapidapi.com/search?q=${song1}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '286c8b5e12mshe701d6545b1d951p1ee483jsnefd7231b1b8b',
    'X-RapidAPI-Host': 'youtube-music-api3.p.rapidapi.com'
    }
  };
  fetch (videoUrl, options)
  .then (function(response){
    return response.json();
  })
  .then (function(data){
    var videoDiv = document.getElementById('video');
    var video = document.createElement('iframe');
    video.src =`https://www.youtube.com/embed/${data.result[0].videoId}`
    video.width = 600;
    video.height = 400;
    video.allowFullscreen = true;
    videoDiv.appendChild(video)
  })
}



function getMusicData() {
    const url = 'https://spotify23.p.rapidapi.com/recommendations/?limit=20&seed_genres=pop';
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '286c8b5e12mshe701d6545b1d951p1ee483jsnefd7231b1b8b',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};
 
fetch(url, options)
.then (function(response){
    return response.json();  
})
.then (function(data){
    var song1 =  document.getElementById('song1').textContent = '1. '  +  data.tracks[0].name + ' By ' + data.tracks[0].artists[0]?.name;
    document.getElementById('song2').textContent = '2. '  + data.tracks[1].name +  ' By ' + data.tracks[1].artists[0]?.name;
    document.getElementById('song3').textContent = '3.  '   + data.tracks[2].name + ' By ' + data.tracks[2].artists[0]?.name;
    document.getElementById('song4').textContent = '4. '   + data.tracks[3].name + ' By ' + data.tracks[3].artists[0]?.name;
    document.getElementById('song5').textContent = '5. '  + data.tracks[4].name +  ' By ' + data.tracks[4].artists[0]?.name;

    getVideoData(song1)
  
})  
}
getMusicData()


 
const input = document.getElementById("dropdown");
const Genre = document.getElementById("Genre");
const formData = document.getElementById("Form");

formData.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log(formData)
})
input.addEventListener("change", function() {
  const userInput = input.value;
  

  const options = generateOptions(userInput);
  

  Genre.innerHTML = "";
  

  options.forEach((option) => {
    const optionElement = document.createElement("option");
    optionElement.value = option;
    optionElement.textContent = option;
    Genre.appendChild(optionElement);
  });
});

function generateOptions(userInput) {
 
  const options = [];
  for (let i = 1; i <= userInput; i++) {
    options.push(i);
  }
  if (userInput === 'Music') {
    return ['Rock', 'Hip-Hop', 'EDM', 'Metal', 'Pop', 'Instrumentals']
  }
  return options;
}

generateOptions("Music")

generateOptions("Music")
