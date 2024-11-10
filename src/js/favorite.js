import icons from '../img/icons/sprites.svg';
import axios from "axios";
import { addFavoriteCards, deleteCard, getAllFavoriteCards } from "./local-storage";
import { makePaginationByItems } from './pagination.js';
import { api } from './api';



async function renderQuote() {
    const currentDate = new Date();
    const currentDay = currentDate.getDate();

    let storedQuoteState = JSON.parse(localStorage.getItem("quoteData")) ?? {};

    const storedQuoteDay = storedQuoteState.day ?? 0;

    if (currentDay !== storedQuoteDay) {
        const quoteData = await serviceQuote();

        quoteData.day = currentDay;
        localStorage.setItem("quoteData", JSON.stringify(quoteData));
        storedQuoteState = quoteData;
    }

    const quoteText = document.querySelector(".quote-text"); 
    const quoteAuthor = document.querySelector(".quote-author");
    quoteText.textContent = storedQuoteState.quote; 
    quoteAuthor.textContent = storedQuoteState.author;

}

async function serviceQuote() {
  try {
    const response = await axios.get(
      `https://your-energy.b.goit.study/api/quote`
    );
    return response.data; 
  } catch (error) {
    return null;
  }
}

renderQuote();


const Refs = {
  galleryList: document.querySelector(".gallery-list"),
  defaultText: document.querySelector(".js-hidden-text"),
}

function createExerciseCards(exercises) {
  
    return exercises.map(({_id, bodyPart, burnedCalories, target, name, time}) => 
      `<li data-id="${_id}" class="exercise-card">
        <div class="exercise-header">
          <div class="exercise-trash">
            <p class="workout">WORKOUT</p>
          <button class="trash-btn" type="submit">
          <svg class="trash-svg"  width="16" height="16">
                <use id = "dell" href="${icons}#trash-bin"></use>
                </svg> 
          </button>              
          </div>    
            <button id = "open" class="exercise-btn" type="button">Start
              <svg id = "arrow" class="arrow-svg" width="16" height="16">
                <use href="${icons}#exercise-start"></use>
              </svg>
            </button>
        </div>  
          <div class = "exercise-tittle"> 
          <div class= "man-svg-thumb">
            <svg width="24" height="24">
              <use href="${icons}#icon-icon-2"></use>
            </svg>
            </div>
            <p class="favorite-exercise-name">${capitalize(name)}</p>
          </div> 
          <div class="exercise-information">
            <p class="exercise-category">Burned calories: <span>${burnedCalories}/${time}min</span></p>
            <p class="exercise-category">Body part: <span>${bodyPart}</span></p>
            <p class="exercise-category">Target: <span>${target}</span></p>
          </div>            
      </li>`
    ).join("");
}


async function  getAllFavoriteModels(exercises){
  let res = exercises.map(async(x) => await api.exerciseInfo(x))
  let exModels  = []
  const exerciseData =  api.exerciseInfo(exerciseId);
  res.forEach(async(element) => element.then((value) => {
    exModels.add(value);
  }));
  exModels.forEach((element) => console.log( element));
}

async function  renderExercises(exercises)  {
let exModels = getAllFavoriteModels(exercises)
  exModels.forEach((element) => console.log( element));
  // exercises.forEach(async(element) => console.log(await api.exerciseInfo(element)));

//   api.exerciseInfo(x)
//   .then((value) => {
//    console.log(value);
//    // Expected output: "Success!"
//  });
  

// 
 
  let cards = createExerciseCards(exercises);

  Refs.galleryList.innerHTML=""
  Refs.galleryList.insertAdjacentHTML('beforeend', cards);

  Refs.defaultText.style.display = 'none';
  Refs.galleryList.style.display = 'flex';
    
  const cardsEl = document.querySelectorAll(".exercise-card"); 
  for (let card of cardsEl) {
    card.addEventListener('click', handleCardClick);  
  }

  if (exercises.length === 0) {
    Refs.defaultText.style.display = 'flex';
    Refs.galleryList.style.display = 'none';    
 } 
}



let perPage = 7
window.addEventListener("resize", renderCards)
 function renderCards() {
  let exercises = getAllFavoriteCards();
  console.log(exercises)
  console.log(exercises)

  if (window.innerWidth >= 768) {
    
    perPage = 10; 
  
  }

  if (window.innerWidth >= 1440) {
   
    perPage = 6; 
  
  }

  renderExercises(exercises.slice(0, perPage))

  makePaginationByItems(perPage, exercises.length).on(
    'afterMove',
    ({ page }) => {
        let start = (page-1)*perPage
      let end = page * perPage;
      
  renderExercises(exercises.slice(start, end))
    });
}

renderCards(); 

const cards = document.querySelectorAll(".exercise-card"); 

for (let card of cards) {
  card.addEventListener('click', handleCardClick);
}

async function handleCardClick(event) {
  switch (event.target.id) {
    case "dell":
      return removeCard(event);
    case "open":
      return openCard(event);
    case "arrow":
      return openCard(event);
  }
}

function removeCard(event) {
  const id = event.currentTarget.dataset.id; 
  deleteCard(id);
  removeFromFavorites(id, event);
  renderCards();  
}

async function openCard(event) {
  const id = event.currentTarget.dataset.id; 
    
  handleOpenModalClick(event, id);
}

function capitalize(s) {
  return s;
}


