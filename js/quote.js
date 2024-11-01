const quoteText = document.getElementById('quote-text');
const quoteTags = document.getElementById('quote-tag');   
const quoteAuthor = document.getElementById('quote-author');
const genQuoteBtn = document.getElementById('gen-quote');
const quote = document.getElementById('quote')


function generateQuote() {
    fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
        quoteText.textContent = data.content;
        quoteTags.textContent = data.tags;
        quoteAuthor.textContent = `--${data.author}`;
    });
}
generateQuote();
genQuoteBtn.addEventListener('click', generateQuote);

// Animation
const text = quote.innerText.split('');
quote.innerText = '';                                      

text.forEach((char, index) => {
  setTimeout(() => {
    if (char === ' ') {
      quote.innerHTML += '&nbsp;';
    } else {
      quote.innerText += char;
    }
  }, 100 * index);
});