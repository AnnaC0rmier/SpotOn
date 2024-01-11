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