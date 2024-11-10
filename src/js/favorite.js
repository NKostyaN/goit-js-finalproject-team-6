import icons from '../img/icons/sprites.svg';
import axios from "axios";
import { getFavorites, removeFromFavorites } from "./storage";
import { api } from './api';
// import { handleModalOpen2 } from './modal.js';




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



renderQuote();


const Refs = {
  galleryList: document.querySelector(".gallery-list"),
  defaultText: document.querySelector(".js-hidden-text"),
}

async function getAllFavoriteModels(exercises) {
  const exModels = await Promise.all(
    exercises.map(async (element) => {
      return await api.exerciseInfo(element);
    })
  );

  return exModels;
}
  

  async function createExerciseCards(exercises) {
  
    return getAllFavoriteModels(exercises).then(
        value => {
            return value.map(({_id, bodyPart, burnedCalories, target, name, time}) => 
                `<li data-id="${_id}" class="exercise-card">
                  <div class="exercise-header">
                    <div class="exercise-trash">
                      <p class="workout">WORKOUT</p>
                    <button class="trash-btn" type="submit">
                    <svg class="trash-svg"  width="16" height="16">
                          <use id = "dell" href="${icons}#icon-trash-fav"></use>
                          </svg> 
                    </button>              
                    </div>    
                      <button id = "open" class="exercise-btn" type="button">Start
                        <svg id = "arrow" class="arrow-svg" width="16" height="16">
                          <use href="${icons}#icon-arrow"></use>
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
                      <p class="exercise-category">Body part: <span>${capitalize(bodyPart)}</span></p>
                      <p class="exercise-category">Target: <span>${capitalize(target)}</span></p>
                    </div>            
                </li>`
              ).join("")
        },)
        
   
}

function renderExercises(exercises) {
     createExerciseCards(exercises).then(
    cards => {
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
    },
    error => {
      console.log(error); // "Error! Error passed to reject function"
    }
  );

 
}

let perPage = 7
window.addEventListener("resize", renderCards)
function renderCards() {
  let exercises = getFavorites();
  

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
  removeFromFavorites(id, );
  renderCards();  
}

async function openCard(event) {
  const id = event.currentTarget.dataset.id; 
    
}

function capitalize(s) {
        return s[0].toUpperCase() + s.slice(1);
    
}

