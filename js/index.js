var myQuote = document.getElementById('quote');
var theAuthor = document.getElementById('author');

var myQuotes = [
    {
        text: "Be yourself; everyone else is already taken.",
        author: "--Oscar Wilde",
    },
    {
        text: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control...",
        author: "--Marilyn Monroe",
    },
    {
        text: "So many books, so little time.",
        author: "--Frank Zappa",
    },
    {
        text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: "--Albert Einstein",
    },
    {
        text: "A room without books is like a body without a soul.",
        author: "--Marcus Tullius Cicero",
    },
    {
        text: "Be who you are and say what you feel, because those who mind don't matter...",
        author: "--Bernard M. Baruch",
    },
    {
        text: "You've gotta dance like there's nobody watching...",
        author: "--William W. Purkey",
    },
    {
        text: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        author: "--Dr. Seuss",
    },
    {
        text: "You only live once, but if you do it right, once is enough.",
        author: "--Mae West",
    },
    {
        text: "Be the change that you wish to see in the world.",
        author: "--Mahatma Gandhi",
    },
    {
        text: "Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend",
        author: "--Albert Camus",
    }
];

var lastIndex = -1;

function showQuote() {
    var randomElement;
    do {
        randomElement = Math.floor(Math.random() * myQuotes.length);
    } while (randomElement === lastIndex);
    lastIndex = randomElement;

    myQuote.innerHTML = `“${myQuotes[randomElement].text}“`;
    theAuthor.innerHTML = myQuotes[randomElement].author;
}

