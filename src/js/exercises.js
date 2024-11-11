import { initModalListeners } from './modal';
import { api } from './api';

export function initializeExercises() {
  loadExercises();
  initializeFilters();
}

// Loading data from API
export async function loadExercises(
  filter = 'Muscles',
  page = 1,
  limit = 12,
  keyword
) {
  try {
    const response = await api.searchExercises({
      filter,
      page,
      limit,
      keyword,
    });

    // Get results from response
    const exercises = response.results;

    // Use totalPages directly from response
    const totalPages = response.totalPages;

    // Data render
    renderExercises(exercises);

    // Pagination rendering
    createPagination(totalPages, filter, limit, page); // Pass current page
  } catch (error) {
    console.error('Помилка при завантаженні даних:', error);
  }
}

// Function for rendering data
export function renderExercises(exercises) {
  const container = document.getElementById('exercises-container');
  container.innerHTML = '';

  exercises.forEach(exercise => {
    const exerciseElement = document.createElement('div');
    exerciseElement.classList.add('exercises-md-col-4');

    exerciseElement.innerHTML = `
      <div class="exercises__item">
        <img src="${exercise.imgURL}" alt="Опис зображення" />
        <div class="text-overlay">
          <h5>${exercise.name}</h5>
          <p>${exercise.filter}</p>
        </div>
      </div>
    `;

    exerciseElement.addEventListener('click', async () => {
      handleExerciseClick(exerciseElement);

      const data = await fetchExerciseDetailsPage(
        exercise.filter,
        exercise.name,
        1
      );
      processExerciseDetails(exercise, data.results);
    });

    container.appendChild(exerciseElement);
  });
}

function processExerciseDetails(exercise, exercises, { skipSearchInit } = {}) {
  renderExerciseDetailsPage(exercises);
  initModalListeners();
  if (skipSearchInit) return;
  initSearch(exercise);
}

export function handleExerciseClick(exerciseElement) {
  const exerciseName =
    exerciseElement.querySelector('.text-overlay h5').textContent;

  const breadcrumbs = document.querySelector('.breadcrumbs');

  let separator = breadcrumbs.querySelector('span');
  if (!separator) {
    separator = document.createElement('span');
    separator.textContent = '/';
  }

  let lastBreadcrumb = breadcrumbs.querySelector('li:last-child');

  if (lastBreadcrumb && lastBreadcrumb !== breadcrumbs.querySelector('li')) {
    lastBreadcrumb.textContent = '';
    lastBreadcrumb.appendChild(separator);
    lastBreadcrumb.appendChild(document.createTextNode(exerciseName));
  } else {
    const breadcrumbItem = document.createElement('li');
    breadcrumbItem.appendChild(separator);
    breadcrumbItem.appendChild(document.createTextNode(exerciseName));
    breadcrumbs.appendChild(breadcrumbItem);
  }
}

function renderExerciseDetailsPage(exercises) {
  const searchContainer = document.getElementById('search-container');
  searchContainer.style.display = 'flex';

  const container = document.getElementById('exercises-container');
  container.innerHTML = '';

  exercises.forEach(exerciseDetail => {
    const wrapperElement = document.createElement('div');
    wrapperElement.classList.add('exercises-md-col-6');

    const exerciseElement = document.createElement('div');
    exerciseElement.classList.add('exercise-item');

    exerciseElement.innerHTML = `
      <div class="exercise-details__item">
        <div class="exercise-header">
          <button type="button" class='btn-workout'>WORKOUT</button>
          <div class="exercise-rating">${
            exerciseDetail.rating || 'Немає даних'
          } <span>⭐</span></div>
          <button type="button" class="btn-start" data-modal-open value="${
            exerciseDetail._id
          }">Start ➔</button>
        </div>
        <h3 class="exercise-name">${exerciseDetail.name}</h3>
        <div class="exercise-info">
          <p class="truncate-text"><strong class="exercise-info-title">Burned calories:</strong> ${
            exerciseDetail.burnedCalories
          }</p>
          <p class="truncate-text"><strong class="exercise-info-title">Body part:</strong> ${
            exerciseDetail.bodyPart
          }</p>
          <p class="truncate-text"><strong class="exercise-info-title">Target:</strong> ${
            exerciseDetail.target
          }</p>
        </div>
      </div>
    `;

    wrapperElement.appendChild(exerciseElement);

    container.appendChild(wrapperElement);
  });
}

async function fetchExerciseDetailsPage(filter, name, page = 1, keyword) {
  let filterCamelCase = filter.toLowerCase().replace(/\s+/g, '');

  if (filterCamelCase.endsWith('ts')) {
    filterCamelCase = filterCamelCase.slice(0, -1);
  }

  return api.exerciseDetails({
    page,
    limit: 10,
    keyword,
    custom: {
      [filterCamelCase]: encodeURIComponent(name),
    },
  });
}

export function initializeFilters() {
  const filterItems = document.querySelectorAll('.exercises-filters li');
  filterItems.forEach(item => {
    item.addEventListener('click', () => {
      const searchContainer = document.getElementById('search-container');
      searchContainer.style.display = 'none';

      const selectedFilter = item.id;

      // Clean container and using new filter
      loadExercises(selectedFilter);

      // Changing active filter class
      document.querySelectorAll('.exercises-filters__selected').forEach(el => {
        el.classList.remove('exercises-filters__selected');
      });
      item.classList.add('exercises-filters__selected');
    });
  });
}

// Create pagination based on total pages
export function createPagination(
  totalPages,
  filter,
  limit = 12,
  currentPage = 1
) {
  const paginationContainer = document.querySelector(
    '.exercises-pagination ul'
  );
  paginationContainer.innerHTML = ''; // Clear pagination container

  for (let i = 1; i <= totalPages; i++) {
    const pageItem = document.createElement('li');
    pageItem.textContent = i;

    // Add class for the active page
    if (i === currentPage) {
      pageItem.classList.add('exercises-pagination__current');
    }

    // Add event listener for each page item
    pageItem.addEventListener('click', () => {
      // Update the class for the current page
      document.querySelectorAll('.exercises-pagination li').forEach(li => {
        li.classList.remove('exercises-pagination__current');
      });
      pageItem.classList.add('exercises-pagination__current');

      // Load data for the selected page
      loadExercises(filter, i, limit);
    });

    paginationContainer.appendChild(pageItem);
  }
}

function initSearch(exercise) {
  const search = document.querySelector('.search-button');
  const input = document.querySelector('#search-input');
  search.addEventListener('click', async event => {
    const data = await fetchExerciseDetailsPage(
      exercise.filter,
      exercise.name,
      1,
      input.value
    );
    processExerciseDetails(exercise, data.results, { skipSearchInit: true });
  });
}
