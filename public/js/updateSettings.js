import { showAlert } from './alerts';

// type is either 'password' or 'data'
export const updateSettings = async (data, type) => {
  try {
    const url =
      type === 'password'
        ? 'http://127.0.0.1:5000/api/v1/users/updateMyPassword'
        : 'http://127.0.0.1:5000/api/v1/users/updateMe';

    const roughRes = await fetch(url, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });

    const res = await roughRes.json();

    if (res.data.status === 'success') {
      showAlert('success', `${type.toUpperCase()} updated successfully!`);
    }
  } catch (err) {
    showAlert('error', err.data.message);
  }
};
