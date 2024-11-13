import icons from '../img/icons/sprites.svg';
import { getFavorites, toggleFavorite } from './storage.js';
import { api } from './api.js';
import * as utils from './utils.js';
// import axios from 'axios';
// import { initModalListeners } from './modal';

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
  galleryList: document.querySelector('.gallery-list'),
  defaultText: document.querySelector('.js-hidden-text'),
};

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
                <p class="exercise-workout">WORKOUT</p>
                <button class="trash-btn" type="submit">
                  <svg class="trash-svg"  width="16" height="16">
                    <use id = "dell" href="${icons}#icon-trash-fav"></use>
                  </svg> 
                </button> 
              </div>
              <button id = "open" class="exercise-btn" type="button">
                Start
                <svg class="exercise-arrow" width="13" height="13">
                  <use href="${icons}#icon-start-arrow"></use>
                </svg>
              </button>
            </div>
            <h3 class="exercise-name">
              <svg class="exercise-name-icon" width="24" height="24">
                <use href="${icons}#icon-icon-2"></use>
              </svg>${utils.capitalize(name)}</h3>
            <div class="exercise-info">
              <p class="truncate-text"><strong class="exercise-info-title">Burned calories:</strong> ${burnedCalories}/${time}min</p>
              <p class="truncate-text"><strong class="exercise-info-title">Body part:</strong> ${utils.capitalize(
                bodyPart
              )}</p>
              <p class="truncate-text"><strong class="exercise-info-title">Target:</strong> ${utils.capitalize(
                target
              )}</p>
            </div>
          </li>
          `
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
      Refs.galleryList.style.display = 'flex';

      const cardsEl = document.querySelectorAll('.exercise-card');
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

window.addEventListener('resize', renderCards);
function renderCards() {
  let exercises = getFavorites();

  renderExercises(exercises);
}

renderCards();

const cards = document.querySelectorAll('.exercise-card');

for (let card of cards) {
  card.addEventListener('click', handleCardClick);
}

async function handleCardClick(event) {
  switch (event.target.id) {
    case 'dell':
      return removeCard(event);
    case 'open':
      return openCard(event);
    case 'arrow':
      return openCard(event);
  }
}

function removeCard(event) {
  const id = event.currentTarget.dataset.id;
  toggleFavorite(id);
  renderCards();
}

async function openCard(event) {
  const id = event.currentTarget.dataset.id;
}

function capitalize(s) {
  return s[0].toUpperCase() + s.slice(1);
}
