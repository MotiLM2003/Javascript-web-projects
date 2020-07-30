const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote-text');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

const quotes = [
  {
    quoteText:
      'He who lives in harmony with himself lives in harmony with the world.',
    quoteAuthor: 'Marcus Aurelius',
    senderName: '',
    senderLink: '',
    quoteLink: 'http://forismatic.com/en/3e8c575734/',
  },
  {
    quoteText:
      'Appreciation can make a day, even change a life. Your willingness to put it into words is all that is necessary. ',
    quoteAuthor: 'Margaret Cousins',
    senderName: '',
    senderLink: '',
    quoteLink: 'http://forismatic.com/en/ba632fbec3/',
  },
  {
    quoteText:
      'I do not believe in a fate that falls on men however they act; but I do believe in a fate that falls on man unless they act.  ',
    quoteAuthor: 'G. K. Chesterton',
    senderName: '',
    senderLink: '',
    quoteLink: 'http://forismatic.com/en/8be7c44ca1/',
  },
  {
    quoteText: 'Imagination is the highest kite one can fly. ',
    quoteAuthor: 'Lauren Bacall',
    senderName: '',
    senderLink: '',
    quoteLink: 'http://forismatic.com/en/ef2ae7c34c/',
  },
];

newQuoteBtn.addEventListener('click', getQuote);

function loading(isLoading) {
  loader.hidden = !isLoading;
  quoteContainer.hidden = isLoading;
}
// get quote from API
function getQuote() {
  //   const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  //   const apiUrl =
  //     'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?;';
  loading(true);
  setTimeout(() => {
    try {
      loading(false);
      const text = quotes[Math.floor(Math.random(1) * quotes.length)];

      authorText.innerHTML = text.quoteAuthor;
      quoteText.innerHTML = text.quoteText;
    } catch (error) {
      console.log('error', error);
    }
  }, 2000);
}

getQuote();
