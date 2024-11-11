import axios from 'axios';

class Api {
  #requester = axios.create({
    baseURL: 'https://your-energy.b.goit.study/api/',
  });

  async #get(path, { query } = {}) {
    const data = {};
    if (query) {
      data.params = query;
    }
    return (await this.#requester.get(path, data)).data;
  }

  async #patch(path, data) {
    return (await this.#requester.patch(path, data)).data;
  }

  async exerciseInfo(exerciseId) {
    return this.#get(`exercises/${exerciseId}`);
  }

  async setExerciseRating({ exerciseId, rate, email, review }) {
    return this.#patch(`exercises/${exerciseId}/rating`, {
      rate,
      email,
      review,
    });
  }
  async getQuote() {
    return this.#get('quote');
  }

  async searchExercises({ filter, page, limit, keyword }) {
    return this.#get('filters', {
      query: {
        filter: filter.replace(/%20/g, ' '),
        page,
        limit,
        keyword,
      },
    });
  }

  async exerciseDetails({ page, limit, keyword, custom }) {
    if (keyword) {
      keyword = keyword.replace(/%20/g, ' ');
    }

    const query = {
      page,
      limit,
      keyword,
      ...(custom ?? {}),
    };

    return await this.#get('exercises', { query });
  }
}

export const api = new Api();
