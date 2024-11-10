import axios from 'axios';
import { initModalListeners } from './modal';

// Loading data from API
export async function loadExercises(filter = 'Muscles', page = 1, limit = 12) {
  try {
    // Change coded space `%20` to usual space
    const decodedFilter = filter.replace(/%20/g, ' ');

    // API request
    const response = await axios.get(
      `https://your-energy.b.goit.study/api/filters`,
      {
        params: {
          filter: decodedFilter,
          page,
          limit,
        },
      }
    );

    // Get results from response
    const exercises = response.data.results;

    // Use totalPages directly from response
    const totalPages = response.data.totalPages;

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
    exerciseElement.classList.add('exercises__col');

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
      const dataFilter = exercise.filter;
      const dataName = exercise.name;

      const data = await fetchExerciseDetailsPage(dataFilter, dataName, 1);
      renderExerciseDetailsPage(data.results);
      initModalListeners();
    });

    container.appendChild(exerciseElement);
  });
}

function renderExerciseDetailsPage(exercises) {
  const container = document.getElementById('exercises-container');
  container.innerHTML = '';

  exercises.forEach(exerciseDetail => {
    const exerciseElement = document.createElement('li');
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
          <p class="truncate-text"<strong class="exercise-info-title">Burned calories:</strong> ${
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
    container.appendChild(exerciseElement);
  });
}

async function fetchExerciseDetailsPage(filter, name, page = 1) {
  let filterCamelCase = filter.toLowerCase().replace(/\s+/g, '');

  if (filterCamelCase.endsWith('ts')) {
    filterCamelCase = filterCamelCase.slice(0, -1);
  }

  const encodedName = encodeURIComponent(name);

  const url = `https://your-energy.b.goit.study/api/exercises?${filterCamelCase}=${encodedName}&page=${page}&limit=10`;

  //console.log('Запитуваний URL:', url); // Лог для перевірки URL

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Помилка завантаження даних');

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Помилка при запиті до API:', error);
    return { results: [] };
  }
}

export function initializeFilters() {
  const filterItems = document.querySelectorAll('.exercises-filters li');
  filterItems.forEach(item => {
    item.addEventListener('click', () => {
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
