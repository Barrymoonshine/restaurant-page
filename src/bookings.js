export default function renderBookingsPage() {
  const mainContainer = document.getElementById('main-container');

  mainContainer.innerHTML = `
      <div class="content-container">
          <div class="title">
              <h2>Luigi's Diner</h2>
              <div class="sub-title">
                <h4>The best Diner in town "just like mama used to make it!" </h4>
                <img class="luigi-image" src="../src/images/luigi.png" alt="Luigi">
              </div>
          </div>
          <div class="make-a-booking">
              <p> To make a booking please contact us on our details below, or come into the diner during opening hours.</p> 
              </div>
          </div>
          <div class="contact-us">
              <h3>Contact us</h3>
              <p>Address: 5 Pipe Lane, Grass Land, Mushroom World </p>
              <p>Phone: 929-55-LUIGI </p>
              <p>Email: luigi@yoshimail.com</p>
          </div>
          <div class="opening-times">
              <h3>Opening times</h3>
              <ul>
                  <li>Tuesday - Thursday: 6pm - 11pm</li>
                  <li>Friday - Saturday: 12pm - 1am </li>
                  <li>Sunday: 12pm - 7pm </li>
              </ul>
          </div>
      </div>  
    `;
}
