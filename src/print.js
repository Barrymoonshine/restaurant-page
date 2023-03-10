export default function createElements() {
  const pageInfo = `
      <ul>
              <li>Home</li>
              <li>Bookings</li>
              <li>Menu</li>
          </ul>
          <h2>Luigi's dinner<h2>
          <h4>The best Italian in town - just like mama used to make! </h4>
          <img src="https://images.pexels.com/photos/1435903/pexels-photo-1435903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="A tasty pizza">
          <button>Book now!</button>
          <p>Address: St. Martin's-in-the-Fields, Trafalgar Square, WC2N 4JJ </p>
          <p>Phone: 020 3166 6000</p>
          Opening times:
          <ul>
          <li>Tuesday - Thursday: 6pm - 11pm</li>
          <li>Friday - Sunday: 12pm - 11pm </li>
          </ul>`;
  return { pageInfo };
}
