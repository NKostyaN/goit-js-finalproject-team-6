import { api } from './api.js';

const quoteElement = document.querySelector('.quote-text');
const authorElement = document.querySelector('.quote-author');

async function fetchQuote() {
  const storedQuote = JSON.parse(localStorage.getItem('dailyQuote'));
  const today = new Date().toISOString().split('T')[0]; // Getting Date

  //   Check Date
  if (storedQuote && storedQuote.date === today) {
    displayQuote(storedQuote.quote);
    return;
  }

  try {
    const newQuote = await api.getQuote();

    // New date
    localStorage.setItem(
      'dailyQuote',
      JSON.stringify({ quote: newQuote, date: today })
    );

    displayQuote(newQuote);
  } catch (error) {
    console.error('Error fetching quote:', error);
    quoteElement.textContent = 'Could not load quote.';
    authorElement.textContent = '';
  }
}

function displayQuote(quote) {
  quoteElement.textContent = quote.quote;
  authorElement.textContent = quote.author;
}

// Start function on opening page
document.addEventListener('DOMContentLoaded', fetchQuote);
