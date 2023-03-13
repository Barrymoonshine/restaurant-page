export default function renderMenuPage() {
  const mainContainer = document.getElementById('main-container');

  mainContainer.innerHTML = `
        <div class="content-container">
            <div class="title">
                <h2>Menu</h2>
            </div>
            <div class="burger">
                <h3>Green shell burger</h3>
                At Luigi's we know what it takes to make a tooth cracking perfect burger! 
                We pack our burgers full of prime green shells, cheese and fry to them to perfection!
                <h5>$10</h5> 
            </div>
            <div class="grattan">
                <h3>Goompa Grattan</h3>
                Our grattan is a culinary triumph of cheese, butter and Goompa's. The ultimate comfort food!
                <h5>$8</h5> 
            </div>
            <div class="smoothie">
                <h3>Mushroom smoothie</h3>
                Feel on top of the world with our signature mushroom smoothie? In mushrooms we trust ;-) 
                <h5>$5.50</h5> 
            </div>
        </div>  
      `;
}
