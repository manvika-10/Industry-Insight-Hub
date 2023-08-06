// fetchNewsData();
function fetchNewsData() {
  fetch('newData.json')
    .then(response => response.json())
    .then(data => {
      // Process the retrieved news data here
      const newsContainer = document.querySelector('#news-container');

      data.forEach(article => {
        const articleElement = document.createElement('article');
        const titleElement = document.createElement('h2');


 descriptionElement = document.createElement('p');
        const imageElement = document.createElement('img');
        const authorElement = document.createElement('p');
        const dateElement = document.createElement('p');

        titleElement.textContent = article.title;
        descriptionElement.textContent = article.description;
        imageElement.src = article.image;
        authorElement.textContent = `Author: ${article.author}`;
        dateElement.textContent = `Date: ${article.date}`;

        articleElement.appendChild(titleElement);
        articleElement.appendChild(descriptionElement);
        articleElement.appendChild(imageElement);
        articleElement.appendChild(authorElement);
        articleElement.appendChild(dateElement);

        newsContainer.appendChild(articleElement);
      });
    })
    .catch(error => {
      // Handle any errors that occurred during the fetch
      console.error('Error:', error);
    });
}

fetchNewsData();

function handleNavigation() {
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();

      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
}

handleNavigation();

navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();

    // Remove "active" class from all navigation links
    navLinks.forEach(link => link.classList.remove('active'));

    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    targetSection.scrollIntoView({
      behavior: 'smooth'
    });

    // Add "active" class to the clicked navigation link
    link.classList.add('active');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const subscriptionForm = document.getElementById('subscription-form');

  subscriptionForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const emailInput = document.getElementById('email-input');
    const email = emailInput.value;

    // Perform validation or other actions with the email value

    // Reset the form
    subscriptionForm.reset();
  });
});

// Search functionality
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('search-button');

  searchButton.addEventListener('click', function() {
    const keyword = searchInput.value.toLowerCase();

    // Filter the news articles based on the keyword and display the results
    const filteredArticles = newsArticles.filter(function(article) {
      return article.title.toLowerCase().includes(keyword) ||
        article.description.toLowerCase().includes(keyword);
    });

    displayNewsArticles(filteredArticles);
  });
});

// Display the newss articles
function displayNewsArticles(articles) {
  const newsContainer = document.getElementById('news-container');

  // Clear existing content
  newsContainer.innerHTML = '';

  // Loop through the articles and generate HTML elements
  articles.forEach(function(article) {
    const articleElement = document.createElement('div');
    articleElement.classList.add('article');

    const titleElement = document.createElement('h2');
    titleElement.textContent = article.title;

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = article.description;

    articleElement.appendChild(titleElement);
    articleElement.appendChild(descriptionElement);

    newsContainer.appendChild(articleElement);
  });
}

// Get all elements with the fade-in class
const fadeIns = document.querySelectorAll('.fade-in');

// Function to check if an element is in the viewport
const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Function to handle the scroll event and trigger animations
const handleScroll = () => {
  fadeIns.forEach((element) => {
    if (isInViewport(element)) {
      element.classList.add('show');
    }
  });
};

// Add scroll event listener to trigger animations on scroll
window.addEventListener('scroll', handleScroll);

// Trigger animations on page load
handleScroll();
