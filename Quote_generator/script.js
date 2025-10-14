const quote = document.querySelector(".text");
const twitterBtn = document.getElementById("twitter-btn");
const newQuoteBtn = document.getElementById("new-quote");
const author = document.querySelector("#auther");

let apiQuotes = [];

// Function to show a new random quote
function newQuote() {
  const randomQuote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

  quote.textContent = randomQuote.text;

  if (!randomQuote.author) {
    author.textContent = "Unknown"; // fixed typo (was 'uncknown')
  } else {
    author.textContent = randomQuote.author;
  }

  console.log(randomQuote);
}

// Function to share the quote on Twitter
function tweet() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote.textContent}-${author.textContent}`;
  window.open(twitterUrl, "_blank"); // fixed: _blank should be in quotes
}

// Fetch quotes from API
async function apiFetch() {
  try {
    const response = await fetch(
      "https://jacintodesign.github.io/quotes-api/data/quotes.json"
    );
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    console.error("Error fetching quotes:", error);
  }
}

// Event listeners
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweet);

// On Load
apiFetch();
