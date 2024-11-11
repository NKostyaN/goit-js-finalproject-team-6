import axios from 'axios';

class Api {
  #requester = axios.create({
    baseURL: 'https://your-energy.b.goit.study/api/',
  });

  async #get(path) {
    return (await this.#requester.get(path)).data;
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
}

export const api = new Api();
