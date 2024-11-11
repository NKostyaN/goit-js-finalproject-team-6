import axios from 'axios';

class Api {
  #requester = axios.create({
    baseURL: 'https://your-energy.b.goit.study/api/',
  });

  async #get(path, { query } = {}) {
    const data = {};
    if (query) {
      data.params = this.#cleanUpObject(query);
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
        filter,
        page,
        limit,
        keyword,
      },
    });
  }

  async exerciseDetails({ page, limit, keyword, custom }) {
    return await this.#get('exercises', {
      query: {
        page,
        limit,
        keyword,
        ...(custom ?? {}),
      },
    });
  }

  #cleanUpObject(params = {}) {
    const cleanParams = {};
    Object.entries(params).forEach(([key, value]) => {
      if (value != undefined) {
        cleanParams[key] = value;
        if (typeof value === 'string') {
          cleanParams[key] = value.replace(/%20/g, ' ');
        }
      }
    });
    return cleanParams;
  }
}

export const api = new Api();
