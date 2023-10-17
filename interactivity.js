//Star buttons
const oneStarButton = document.querySelector('.one-star')
const twoStarsButton = document.querySelector('.two-stars')
const threeStarsButton = document.querySelector('.three-stars')
const fourStarsButton = document.querySelector('.four-stars')
const fiveStarsButton = document.querySelector('.five-stars')
const starsContainer = document.querySelector('.stars-container')
// Submit button
const submitB = document.querySelector('.submit-b')
//Second box tags
let initialBox = document.querySelector('.initial-box')
let secondBox = document.querySelector('.subsequent-box');
let result = document.querySelector('.result')
let resultVar = undefined;

starsContainer.addEventListener('click', function(e) {
  if(e.target !== starsContainer) {
    for(let i = 0; i < starsContainer.children.length; i++) {
      starsContainer.children[i].style.backgroundColor = "hsl(213, 17%, 20%)";
      starsContainer.children[i].style.color= "hsl(216, 12%, 54%);";
    }
    e.target.style.backgroundColor = "hsl(216, 12%, 54%)";
    e.target.style.color = "white";
  }
  
  resultVar = e.target.textContent;
})

submitB.addEventListener('click', function() {

if(resultVar !== undefined) {
  result.textContent = `You selected ${resultVar} out of 5`
  initialBox.setAttribute("class", "initial-box-removed")
  secondBox.setAttribute("class", "subsequent-box-appeared")
} else {
  alert('Choose the grade please.')
}
    
})
