import renderHomePage from './home-page.js';
import renderBookingsPage from './bookings.js';
import './style.css';

renderHomePage();

function addHeaderListener() {
  const header = document.getElementById('top-nav');
  header.addEventListener('click', (e) => {
    const targetButton = e.target.id;
    if (targetButton === 'home-page-button') {
      renderHomePage();
      console.log('home');
    } else if (targetButton === 'bookings-button') {
      renderBookingsPage();
      console.log('booking');
    }
    addHeaderListener();
  });
}

addHeaderListener();
