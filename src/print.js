export default function pageLoad() {
  const content = document.getElementById('content');

  content.innerHTML = `
  <div class="header"> 
  <ul>
    <li>Home</li>
    <li>Bookings</li>
    <li>Menu</li>
  </ul>
  </div>
  <div class="main-container">
    <div class="content-container">
        <div class="title">
            <h2>Luigi's Diner</h2>
            <h4>The best Italian in town - just like mama used to make it! </h4>
        </div>
        <div class="customer-review">
            <p> Luigi's has the best green shells in Mushroom World! 
            Me and my girl Peach feel much safer here than at Bowser's firey flame grill. </p> 
            <p> - It's a me Mario </p>
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
   <div class="footer">
    <p> © Made by
    <a href="https://github.com/Barrymoonshine">Barry Moonshine</a> for
    <a href="https://www.theodinproject.com/">The Odin Project</a>
    </p>
    </div>
  `;
}
