// Store for pizzas
let pizzas = [
    { name: 'Margherita', price: 3, image: 'margherita.jpg' },
    { name: 'Pepperoni', price: 4.5, image: 'pepperoni.jpg' },
    { name: 'BBQ Chicken', price: 7, image: 'bbq-chicken.jpg' },
    { name: 'Hawaiian', price: 8, image: 'Hawaiian pizza.jpg' }, // Added comma
    { name: 'Deep Dish', price: 9, image: 'Deep Dish pizza.jpg' }, // Added comma
    { name: 'Calzone', price: 10, image: 'Calzone pizza.jpg' } // Added comma
];

// Function to render the Home page
function showHome() {
    document.getElementById('content').innerHTML = `
        <h1>Welcome to Pizza Store</h1>
        <p>Find your favorite pizzas here!</p>
        <p>At Pizza Store, we serve the most delicious and freshly made pizzas just for you. Whether you love classic Margherita or spicy Pepperoni, we've got it all!</p>
        <h2>Featured Pizzas:</h2>
        <ul class="pizza-list">
            <li>
                <img src="margherita.jpg" alt="Margherita" class="pizza-img">
                <strong>Margherita</strong> - $3.00
            </li>
            <li>
                <img src="pepperoni.jpg" alt="Pepperoni" class="pizza-img">
                <strong>Pepperoni</strong> - $4.5.00
            </li>
            <li>
                <img src="bbq-chicken.jpg" alt="BBQ Chicken" class="pizza-img">
                <strong>BBQ Chicken</strong> - $7.00
            </li>
        </ul>
        <p>Order now and enjoy the best pizza experience in town!</p>
        <button onclick="showDisplayAllItems()">See All Pizzas</button>
    `;
}

// Function to render the About page
function showAbout() {
    document.getElementById('content').innerHTML = `
        <h1>About Us</h1>
        <p>Welcome to Pizza Store, the best pizza place in India!</p>
        
        <p>At Pizza Store, we are passionate about pizza. Our mission is to deliver mouth-watering pizzas made from the freshest ingredients, topped with love and creativity. We believe that every pizza should tell a story, and we're here to create delicious memories for you and your loved ones.</p>
        
        <p>Why settle for average when you can experience extraordinary? While places like Pizza Hut may offer convenience, we take pride in providing a more personalized dining experience. Our chefs craft each pizza to perfection, ensuring that you receive a product that is not only delicious but also visually stunning.</p>
        
        <p>Our diverse menu caters to all tastes. From classic Margherita to our gourmet BBQ Chicken and unique seasonal specials, there’s something for everyone. Not sure what to choose? Let us help you with our recommendation, or customize your own pizza with a variety of fresh toppings!</p>
        
        <h2>What Our Customers Say</h2>
        <blockquote>
            <p>"The best pizza I've ever had! The crust is perfectly crispy, and the flavors are out of this world. I’ll never order from anywhere else!" - <em>Rajesh K.</em></p>
            <p>"Pizza Store has changed the way I think about pizza! Their unique combinations and fresh ingredients are a game-changer!" - <em>Sita M.</em></p>
        </blockquote>
        
        <p>Join us for a delightful pizza experience, and discover why our customers keep coming back for more! We invite you to dine in, take out, or order delivery for the ultimate convenience. Our friendly staff is always here to serve you with a smile and ensure you leave satisfied.</p>
        
        <h2>Get in Touch</h2>
        <p>If you have any questions or want to learn more about our pizzas, feel free to reach out. We love hearing from our customers!</p>
        
        <button onclick="showContact()">Contact Us</button>
    `;
}


// Function to display all pizzas
function showDisplayAllItems() {
    let pizzaListHTML = pizzas.map(pizza => `
        <li>
            <img src="${pizza.image}" alt="${pizza.name}" class="pizza-img">
            ${pizza.name} - $${pizza.price}
        </li>
    `).join('');

    document.getElementById('content').innerHTML = `
        <h1>All Pizzas</h1>
        <ul class="pizza-list">${pizzaListHTML}</ul>
    `;
}

// Function to render the Add New Pizza page
function showAddNewItem() {
    document.getElementById('content').innerHTML = `
        <h1>Add New Pizza</h1>
        <form id="addPizzaForm">
            <div>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required />
            </div>
            <div>
                <label for="price">Price:</label>
                <input type="number" id="price" name="price" required min="1" />
            </div>
            <button type="submit">Add Pizza</button>
        </form>
    `;

    document.getElementById('addPizzaForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const pizzaData = {
            name: document.getElementById('name').value,
            price: document.getElementById('price').value,
            image: '' // You can add image handling here if needed
        };

        pizzas.push(pizzaData);
        alert('Pizza added!');
        showDisplayAllItems();
    });
}

// Function to render the Contact page
function showContact() {
    document.getElementById('content').innerHTML = `
        <div class="contact-section">
            <h1>Contact Us</h1>
            <p>We'd love to hear from you! Whether you have questions, feedback, or need assistance, feel free to reach out to us.</p>
            
            <h2>Email Us</h2>
            <p>If you have any inquiries, please email us at: <strong>contact@pizzastore.com</strong></p>

            <h2>Call Us</h2>
            <p>For immediate assistance, call us at: <strong> 83097–83336</strong>. Our customer service team is available from 9 AM to 9 PM.</p>

            <h2>Visit Us</h2>
            <p>Come visit us at our main location:</p>
            <address>
                Pizza Store, 123 Pizza Lane,<br>
                Flavor Town, Yummyland, 45678<br>
                <strong>We’d love to serve you in person!</strong>
            </address>

            <h2>Follow Us on Social Media</h2>
            <p>Stay updated with our latest promotions and offerings by following us on our social media channels:</p>
            <ul>
                <li><a href="https://www.facebook.com/pizzastore" target="_blank">Facebook</a></li>
                <li><a href="https://www.instagram.com/pizzastore" target="_blank">Instagram</a></li>
                <li><a href="https://www.twitter.com/pizzastore" target="_blank">Twitter</a></li>
            </ul>

            <h2>Feedback</h2>
            <p>Your feedback is important to us! Please let us know how we can improve your experience.</p>
        </div>
    `;
}



// Initially show the home page
showHome();
