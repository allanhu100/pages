fetch('/components/warning.html')
  .then(res => res.text())
  .then(html => {
    document.body.insertAdjacentHTML('afterbegin', html);

    // lock page
    document.body.classList.add('locked');

    // continue
    document.querySelector('.continue').onclick = () => {
      document.getElementById('overlay').remove();
      document.body.classList.remove('locked');
    };

    // return
    document.getElementById('returnToHome').onclick = () => {
      window.location.href = 'https://allanhu100.github.io/r?id=home';
    };
  })
  .catch(err => console.error('Warning component failed:', err));
