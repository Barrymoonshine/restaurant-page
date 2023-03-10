export default function pageLoad() {
  const content = document.getElementById("content");
  const header = document.createElement("div");
  header.className = "header";
  header.innerHTML = `
  <ul>
    <li>Home</li>
    <li>Bookings</li>
    <li>Menu</li>
  </ul>`;

  const mainContainer = document.createElement("div");
  mainContainer.className = "main-container";

  const contentContainer = document.createElement("div");
  contentContainer.className = "content-container";

  const title = document.createElement("div");
  title.className = "restaurant-title";
  title.innerHtml = `<h2>Luigi's dinner<h2>
  <h4>The best Italian in town - just like mama used to make it! </h4>`;

  const customerReviews = document.createElement("div");
  customerReviews.className = "customer-reviews";
  customerReviews.innerHTML = `<p> Luigi's has the best green shells in Mushroom World! 
  Me and my girl Peach feel much safer here than at Bowser's firey flame grill. </p> 
  <p> It's a me Mario </p>`;

  const openingTimes = document.createElement("div");
  openingTimes.className = "opening-times";
  openingTimes.innerHTML = ` <ul>
  <li>Tuesday - Thursday: 6pm - 11pm</li>
  <li>Friday - Saturday: 12pm - 1am </li>
  <li>Sunday: 12pm - 7pm </li>
  </ul>`;

  const contactUs = document.createElement("div");
  contactUs.className = "contact-us";
  contactUs.innerHTML = `
  <p>Address: 5 Pipe Lane, Grass Land, Mushroom World </p>
  <p>Phone: 929-55-LUIGI </p>
  <p>Email: luigi@yoshimail.com</p>
  `;

  const footer = document.createElement("footer");
  footer.className = "footer";
  footer.innerHTML = `
  <p>
  © Made by
  <a href="https://github.com/Barrymoonshine">Barry Moonshine</a> for
  <a href="https://www.theodinproject.com/">The Odin Project</a>
  </p>
  `;

  content.append(header, mainContainer, footer);
  mainContainer.appendChild(contentContainer);
  contentContainer.append(title, customerReviews, openingTimes, contactUs);
}
