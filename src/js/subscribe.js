document
  .getElementById('subscriptionForm')
  .addEventListener('submit', async function (event) {
    event.preventDefault();

    const emailInput = event.target.email;
    const email = emailInput.value;
    if (!emailInput.checkValidity()) {
      alert('Please enter a valid email address.');
      return;
    }

    try {
      const response = await axios.post(
        'https://your-energy.b.goit.study/api/subscription',
        {
          email: email,
        }
      );

      if (response.status === 201) {
        alert(response.data.message);
        emailInput.value = '';
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          alert('Bad request: invalid request body.');
        } else if (error.response.status === 404) {
          alert('Not found: The endpoint could not be found.');
        } else if (error.response.status === 409) {
          alert('Subscription already exists.');
        } else if (error.response.status === 500) {
          alert('Server error: please try again later.');
        }
      } else {
        alert('An unexpected error occurred. Please try again.');
      }
    }
  });
