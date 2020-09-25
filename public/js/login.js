const login = async (email, password) => {
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
      alert('Logged in successfully!');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    } else if (res.status === 'fail') {
      alert(res.message);
    }
  } catch (error) {
    console.log(error);
  }
};

document.querySelector('.form').addEventListener('submit', e => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  login(email, password);
});
