import iconsPath from '../img/icons/sprites.svg';
import { api } from './api.js';
import { notification } from './notification.js';
import { getFavorites, toggleFavorite } from './storage.js';

const SELECTORS = {
  closeModalButton: '[data-modal-close]',
  modalContainer: '[data-modal]',
  exerciseModal: '.modal',
  ratingModal: '.add-rating-modal',
  addToFavoritesButton: '.btn-modal-add-fav',
  imgModalExercise: '.img-modal-exercise',
  titleModal: '.title-modal',
  ratingValue: '.rating-value',
  statsList: '.stats-list',
  descText: '.desc-text',
  btnFavText: '.btn-fav-text',
  iconFavBtnUse: '.icon-fav-btn-use',
  openRatingModalButton: '[data-add-rating-open]',
  closeRatingModalButton: '[data-add-rating-close]',
  ratingForm: '.add-rating-form',
  addRatingValue: '.add-rating-value',
  iconModalRatingStar: '.icon-modal-rating-star',
  addRatingRadioBtn: '.add-rating-radio-btn',
  openModalButtons: '[data-modal-open]',
  ratingStars: '.rating-stars',
};

const CLASS_NAMES = {
  visuallyHidden: 'visually-hidden',
  favAdded: 'fav-added',
  modalOpen: 'modal-open',
  gold: 'gold',
};

const closeModalButton = document.querySelector(SELECTORS.closeModalButton);
const modalContainer = document.querySelector(SELECTORS.modalContainer);
const exerciseModal = document.querySelector(SELECTORS.exerciseModal);
const ratingModal = document.querySelector(SELECTORS.ratingModal);
const addToFavoritesButton = document.querySelector(
  SELECTORS.addToFavoritesButton
);

let currentExerciseId = null;

async function loadModalData(exerciseId) {
  const exerciseData = await api.exerciseInfo((currentExerciseId = exerciseId));
  updateModalContent(exerciseData);
  updateFavoriteButtonState();
  addFavoriteButtonListener();

  modalContainer.classList.toggle(CLASS_NAMES.visuallyHidden);
  handleModalOpen();
  initRatingForm();
}

function clearModalContent() {
  document.querySelector(SELECTORS.imgModalExercise).src = '';
  document.querySelector(SELECTORS.titleModal).textContent = '';
  document.querySelector(SELECTORS.ratingValue).textContent = '0';
  document.querySelector(SELECTORS.statsList).innerHTML = '';
  document.querySelector(SELECTORS.descText).textContent = '';
}

function updateModalContent(exerciseData) {
  clearModalContent();
  document.querySelector(SELECTORS.imgModalExercise).src = exerciseData.gifUrl;
  document.querySelector(SELECTORS.titleModal).textContent =
    exerciseData.name.trim();
  document.querySelector(SELECTORS.descText).textContent =
    exerciseData.description.trim();
  document.querySelector(SELECTORS.ratingValue).textContent =
    exerciseData.rating;

  updateStarRating(exerciseData.rating);
  updateStats(exerciseData);
}

function updateStats(exerciseData) {
  const statsList = document.querySelector(SELECTORS.statsList);
  statsList.innerHTML = '';

  let statsHTML = '';
  if (exerciseData.target)
    statsHTML += createStatItem('Target', exerciseData.target);
  if (exerciseData.bodyPart)
    statsHTML += createStatItem('BodyPart', exerciseData.bodyPart);
  if (exerciseData.equipment)
    statsHTML += createStatItem('Equipment', exerciseData.equipment);
  if (exerciseData.popularity)
    statsHTML += createStatItem('Popular', exerciseData.popularity);
  if (exerciseData.burnedCalories)
    statsHTML += createStatItem(
      'Burned Calories',
      `${exerciseData.burnedCalories}/${exerciseData.time} min`
    );

  statsList.insertAdjacentHTML('beforeend', statsHTML);
}

function createStatItem(title, value) {
  return `<li class="stats-item">
    <p class="stats-title">${title}</p>
    <p class="stats-value">${value}</p>
  </li>`;
}

function updateFavoriteButtonState() {
  const isFavorite = getFavorites().includes(currentExerciseId);
  addToFavoritesButton.classList.toggle(CLASS_NAMES.favAdded, isFavorite);
  document.querySelector(SELECTORS.btnFavText).textContent = isFavorite
    ? 'Remove from favorites'
    : 'Add to favorites';

  document
    .querySelector(SELECTORS.iconFavBtnUse)
    .setAttribute('href', `${iconsPath}#${isFavorite ? 'trash-bin' : 'heart'}`);
}

function addFavoriteButtonListener() {
  addToFavoritesButton.addEventListener('click', event => {
    const button = event.currentTarget;
    button.classList.toggle(CLASS_NAMES.favAdded);

    toggleFavorite(currentExerciseId);
    updateFavoriteButtonState();
    event.stopImmediatePropagation();
  });
}

function handleModalOpen() {
  document.addEventListener('keydown', handleEscapeKey);
  document.body.classList.add(CLASS_NAMES.modalOpen);
}

function handleModalClose() {
  document.removeEventListener('keydown', handleEscapeKey);
  document.body.classList.remove(CLASS_NAMES.modalOpen);
  currentExerciseId = null;
}

function handleEscapeKey(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}

function closeModal() {
  ratingModal.classList.add(CLASS_NAMES.visuallyHidden);
  exerciseModal.classList.remove(CLASS_NAMES.visuallyHidden);
  modalContainer.classList.add(CLASS_NAMES.visuallyHidden);
  handleModalClose();
}

closeModalButton.addEventListener('click', closeModal);
modalContainer.addEventListener('click', event => {
  const isInModal =
    checkTapInRect(event, exerciseModal.getBoundingClientRect()) ||
    checkTapInRect(event, ratingModal.getBoundingClientRect());

  if (!isInModal) closeModal();
  event.stopImmediatePropagation();
});

function checkTapInRect(event, rect) {
  return (
    rect.top <= event.clientY &&
    event.clientY <= rect.top + rect.height &&
    rect.left <= event.clientX &&
    event.clientX <= rect.left + rect.width
  );
}

function initRatingForm() {
  const openRatingModalButton = document.querySelector(
    SELECTORS.openRatingModalButton
  );
  let selectedRating = 0;
  document.querySelector(SELECTORS.addRatingValue).textContent = '0';

  openRatingModalButton.addEventListener('click', event => {
    ratingModal.classList.remove(CLASS_NAMES.visuallyHidden);
    exerciseModal.classList.add(CLASS_NAMES.visuallyHidden);
    handleModalOpen();
    loadRatingModal();
    event.stopImmediatePropagation();
  });

  const closeRatingModalButton = document.querySelector(
    SELECTORS.closeRatingModalButton
  );
  closeRatingModalButton.addEventListener('click', event => {
    ratingModal.classList.add(CLASS_NAMES.visuallyHidden);
    exerciseModal.classList.remove(CLASS_NAMES.visuallyHidden);
    clearRatingForm(ratingModal.querySelector('form'));
    event.stopImmediatePropagation();
  });

  function clearRatingForm(form) {
    selectedRating = 0;
    form.elements.email.value = '';
    form.elements.comment.value = '';
    form.elements.radio.forEach(radio => (radio.checked = false));
    document.querySelector(SELECTORS.addRatingValue).textContent = '0';
    document
      .querySelectorAll(SELECTORS.iconModalRatingStar)
      .forEach(star => star.classList.remove(CLASS_NAMES.gold));
  }

  function loadRatingModal() {
    const ratingRadioButtons = document.querySelectorAll(
      SELECTORS.addRatingRadioBtn
    );

    ratingRadioButtons.forEach(button => {
      button.addEventListener('click', event => {
        selectedRating = Number(event.currentTarget.value);
        document.querySelector(SELECTORS.addRatingValue).textContent =
          selectedRating;
        document
          .querySelectorAll(SELECTORS.iconModalRatingStar)
          .forEach((star, index) => {
            star.classList.toggle(CLASS_NAMES.gold, index < selectedRating);
          });
        event.stopImmediatePropagation();
      });
    });
  }

  const ratingForm = document.querySelector(SELECTORS.ratingForm);
  ratingForm.addEventListener('submit', async event => {
    event.preventDefault();

    const form = event.target;
    const email = form.elements.email.value;
    const review = form.elements.comment.value;

    if (!selectedRating) {
      notification.info('Choose your rating');
    } else if (!email) {
      notification.info('Enter your email');
    } else if (!review) {
      notification.info('Leave a comment');
    } else {
      try {
        const nextExercise = await api.setExerciseRating({
          exerciseId: currentExerciseId,
          rate: selectedRating,
          email,
          review,
        });
        clearRatingForm(form);
        notification.success('Rating successfully updated');
        ratingModal.classList.add(CLASS_NAMES.visuallyHidden);
        exerciseModal.classList.remove(CLASS_NAMES.visuallyHidden);

        updateModalContent(nextExercise);
      } catch (error) {
        notification.error(
          `Error: ${error?.response?.data?.message ?? error.message}`
        );
      }
    }
    event.stopImmediatePropagation();
  });
}

// Open Modal
export function initModalListeners() {
  const openModalButtons = document.querySelectorAll(
    SELECTORS.openModalButtons
  );
  openModalButtons.forEach(button => {
    button.addEventListener('click', event => {
      loadModalData(event.currentTarget.value);
    });
  });
}

function updateStarRating(rating) {
  const starContainer = document.querySelector(SELECTORS.ratingStars);
  starContainer.innerHTML = '';
  starContainer.append(...addStars(5, rating));
}

function addStars(starsCount, rating) {
  const elements = [];
  for (let i = 0; i < starsCount; i++) {
    const percent = Math.min(100, Math.max(0, (rating - i) * 100));

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '18');
    svg.setAttribute('height', '18');
    svg.setAttribute('class', 'icon icon-modal-star');

    const gradientId = `gradient-${i}-${percent}`;
    svg.innerHTML = `
      <defs>
        <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="${percent}%" stop-color="var(--color-accent)" />
          <stop offset="${percent}%" stop-color="var(--color-rating)" />
        </linearGradient>
      </defs>
      <use href="${iconsPath}#star" fill="url(#${gradientId})"></use>
    `;

    elements.push(svg);
  }

  return elements;
}
