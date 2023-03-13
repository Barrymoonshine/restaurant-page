import createHomePage from './home-page.js';
import renderHomePage from './home.js';
import renderBookingsPage from './bookings.js';
import renderMenuPage from './menu.js';
import './style.css';

createHomePage();

function addHeaderListener() {
  const header = document.getElementById('top-nav');
  header.addEventListener('click', (e) => {
    const targetButton = e.target.id;
    if (targetButton === 'home-page-button') {
      renderHomePage();
    } else if (targetButton === 'bookings-button') {
      renderBookingsPage();
    } else if (targetButton === 'menu-button') {
      renderMenuPage();
    }
  });
}

addHeaderListener();
