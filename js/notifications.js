const notificationsBlock = document.querySelector('.notifications');

function createNotification() {
  const notification = document.createElement('div');

  notification.classList.add('notification');

  notification.innerHTML = `
    <img class="notification__logo" src="./assets/bank-logos/1.png" alt="bank">
  
    <span class="notification__text">
      Deposit by <b>Raiffeisen Bank Villach registrierte Genossenschaft</b> is added to
      favourites
    </span>
  
    <span class="notification__text_sm">
      Deposit added to <a class="notification__link" href="#">favourites</a>
    </span>
  
    <a class="notification__link" href="#">Go to favourites</a>
    
    <button class="notification__close"></button>
  `;

  return notification;
}

const favouriteButtons = document.querySelectorAll('.deposit-card__button-favorites');

favouriteButtons.forEach((button) => {
  button.addEventListener('click', () => {
    notificationsBlock.innerHTML = '';
    const notification = createNotification();
    notification.addEventListener('click', (event) => {
      if (event.target.classList.contains('notification__close')) {
        notificationsBlock.innerHTML = '';
      }
    });
    notificationsBlock.append(notification);
    setTimeout(() => (notificationsBlock.innerHTML = ''), 2000);
  });
});
