/* eslint-disable */
import { showAlert } from './alerts';

export const login = async (email, password) => {
  try {
    const response = await fetch('http://localhost:5000/api/v1/users/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const res = await response.json();

    console.log(res);

    if (res.status === 'success') {
      showAlert('success', 'Logged in successfully!');
      window.setTimeout(() => {
        location.assign('/');
      }, 1000);
    } else if (res.status === 'fail') {
      showAlert('error', res.message);
    }
  } catch (error) {
    console.log(error);
  }
};

export const logout = async () => {
  try {
    const fetchData = await fetch('http://localhost:5000/api/v1/users/logout', {
      method: 'GET',
    });
    const res = await fetchData.json();

    console.log(res);

    if (res.status === 'success') {
      location.reload();
    } else {
      showAlert('error', 'Error logging out, try again!');
    }
  } catch (err) {
    showAlert('error', 'Error logging out, try again!');
  }
};
