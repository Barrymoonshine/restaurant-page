export default function renderHomePage() {
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
          <div class="customer-review">
              <p class="quote"> "Luigi's has the best green shells in the whole of Mushroom World! 
              Me and my girl Peach feel much safer here than at Bowser's firey flame grill." </p> 
              <div class="quote-attribute">
                <p> - It's a me, Mario! </p>
                <img class="mario-image" src="../src/images/mario.png" alt="Mario">
              </div>
          </div>
          <div class="opening-times">
              <h3>Opening times</h3>
              <ul>
                  <li>Tuesday - Thursday: 6pm - 11pm</li>
                  <li>Friday - Saturday: 12pm - 1am </li>
                  <li>Sunday: 12pm - 7pm </li>
              </ul>
          </div>
          <div class="contact-us">
              <h3>Contact us</h3>
              <p>Address: 5 Pipe Lane, Grass Land, Mushroom World </p>
              <p>Phone: 929-55-LUIGI </p>
              <p>Email: luigi@yoshimail.com</p>
          </div>
      </div>  
     </div>
    `;
}
