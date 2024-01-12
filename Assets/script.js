

// const apiKey = '286c8b5e12mshe701d6545b1d951p1ee483jsnefd7231b1b8b'

// const musicUrl = 'https://spotify23.p.rapidapi.com/recommendations/'

function getMusicData() {
    // const url = 'https://spotify23.p.rapidapi.com/recommendations/?limit=20&seed_tracks=0c6xIDDpzE81m2q797ordA&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry';
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
        console.log(data);
        console.log(data.tracks);
        console.log(data.tracks[1].artists[0]?.name);
        console.log(data.tracks[1].name);
        console.log(data.seeds);
    })  
}

getMusicData()

// data.tracks[i].artist[0].name
// conditional chaining to prevent error for multiple artists



  
const input = document.getElementById("dropdown");
const Genre = document.getElementById("Genre");
const formData = document.getElementById("Form");

formData.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log(formData)
})
input.addEventListener("change", function() {
  const userInput = input.value;
  
  // Generate options based on user input
  const options = generateOptions(userInput);
  
  // Clear existing options
  Genre.innerHTML = "";
  
  // Create and append new options
  options.forEach((option) => {
    const optionElement = document.createElement("option");
    optionElement.value = option;
    optionElement.textContent = option;
    Genre.appendChild(optionElement);
  });
});

function generateOptions(userInput) {
  // Generate options based on user input
  // Example logic: Create an array of numbers up to the user input value
  const options = [];
  for (let i = 1; i <= userInput; i++) {
    options.push(i);
  }
  if (userInput === 'Podcasts') {
  return ['real crime', 'comedy', 'technology', 'news', 'sports']
  }
  else if (userInput === 'Music') {
    return ['Rock', 'Hip-Hop', 'EDM', 'Metal', 'Pop', 'Instrumentals']
  }
  return options;
}
generateOptions("Music")
