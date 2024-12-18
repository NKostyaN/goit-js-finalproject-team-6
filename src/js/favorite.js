import icons from '../img/icons/sprites.svg';
import { getFavorites, toggleFavorite } from './storage.js';
import { api } from './api.js';
import * as utils from './utils.js';
import { initModalListeners } from './modal.js';

async function renderQuote() {
  function serviceQuote() {
    const BASE_URL = 'https://your-energy.b.goit.study/api';
    const END_POINT = 'quote';

    return fetch(`${BASE_URL}/${END_POINT}`).then(resp => {
      if (!resp.ok) {
        throw new Error(`Fetch error with ${resp.status}: ${resp.statusText}`);
      }
      return resp.json();
    });
  }
  const currentDate = new Date();
  const currentDay = currentDate.getDate();

  let storedQuoteState = JSON.parse(localStorage.getItem('quoteData')) ?? {};

  const storedQuoteDay = storedQuoteState.day ?? 0;

  if (currentDay !== storedQuoteDay) {
    const quoteData = await serviceQuote();

    quoteData.day = currentDay;
    localStorage.setItem('quoteData', JSON.stringify(quoteData));
    storedQuoteState = quoteData;
  }

  const quoteText = document.querySelector('.quote-text');
  const quoteAuthor = document.querySelector('.quote-author');
  quoteText.textContent = storedQuoteState.quote;
  quoteAuthor.textContent = storedQuoteState.author;
}

renderQuote();

const Refs = {
  galleryContainer: document.querySelector('.favorites-gallery'),
  galleryList: document.querySelector('.gallery-list'),
  defaultText: document.querySelector('.js-hidden-text'),
};

Refs.defaultText.style.display = 'none';
Refs.galleryContainer.style.display = 'none';

async function getAllFavoriteModels(exercises) {
  const exModels = await Promise.all(
    exercises.map(async element => {
      return await api.exerciseInfo(element);
    })
  );

  return exModels;
}

async function createExerciseCards(exercises) {
  return getAllFavoriteModels(exercises).then(value => {
    return value
      .map(
        ({ _id, bodyPart, burnedCalories, target, name, time }) =>
          `<li data-id="${_id}" class="exercise-card">
              <div class="exercise-header">
                <div class="exercise-trash">
                  <p class="workout">WORKOUT</p>
                <button id="dell" class="trash-btn" type="submit">
                <svg class="trash-svg"  width="16" height="16">
                  <use href="${icons}#icon-trash-fav"></use>
                </svg> 
                </button>              
                </div>    
                  <button class="exercise-btn" type="button" data-modal-open value="${_id}">
                  Start
                    <svg class="exercise-arrow" width="13" height="13">
                      <use href="${icons}#icon-start-arrow"></use>
                    </svg>
                  </button>
              </div>  
                    <div class = "exercise-tittle"> 
            <h3 class="exercise-name">
              <svg class="exercise-name-icon" width="24" height="24">
                <use href="${icons}#icon-icon-2"></use>
              </svg>${utils.capitalize(name)}</h3>
                    </div> 
            <div class="exercise-info">
              <p class="truncate-text"><strong class="exercise-info-title">Burned calories:</strong> ${burnedCalories}/${time}min</p>
              <p class="truncate-text"><strong class="exercise-info-title">Body part:</strong> ${utils.capitalize(
                bodyPart
              )}</p>
              <p class="truncate-text"><strong class="exercise-info-title">Target:</strong> ${utils.capitalize(
                target
              )}</p>
            </div>
          </li>`
      )
      .join('');
  });
}

function renderExercises(exercises) {
  createExerciseCards(exercises).then(
    cards => {
      Refs.galleryList.innerHTML = '';
      Refs.galleryList.insertAdjacentHTML('beforeend', cards);

      Refs.defaultText.style.display = 'none';
      Refs.galleryContainer.style.display = 'block';

      const cardsEl = document.querySelectorAll('.exercise-card');
      for (let card of cardsEl) {
        card.querySelector('#dell').addEventListener('click', removeCard);
      }

      if (exercises.length === 0) {
        Refs.defaultText.style.display = 'flex';
        Refs.galleryContainer.style.display = 'none';
      }

      initModalListeners();
    },
    error => {
      console.log(error); // "Error! Error passed to reject function"
    }
  );
}

window.addEventListener('resize', renderCards);
async function renderCards() {
  let exercises = getFavorites();
  await renderExercises(exercises);
}

renderCards();

function removeCard(event) {
  const id = document.querySelector('.exercise-card').dataset.id;
  toggleFavorite(id);
  renderCards();
}
