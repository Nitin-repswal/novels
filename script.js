const quotes = [
    { text: "You must allow me to tell you how ardently I admire and love you.", author: "Pride and Prejudice" },
    { text: "Whatever our souls are made of, his and mine are the same.", author: "Wuthering Heights" },
    { text: "You have bewitched me, body and soul, and I love… I love… I love you.", author: "Pride and Prejudice" },
    { text: "I fell in love the way you fall asleep: slowly, and then all at once.", author: "The Fault in Our Stars" },
    { text: "I never wish to be parted from you from this day on.", author: "Pride and Prejudice" },
    { text: "Do I love you? My God, if your love were a grain of sand, mine would be a universe of beaches.", author: "The Princess Bride" },
    { text: "I am yours, don’t give myself back to me.", author: "Sylvia Plath" },
    { text: "I love you. Remember. They cannot take it.", author: "Delirium" },
    { text: "You should be kissed and often, and by someone who knows how.", author: "Gone With the Wind" },
    { text: "If you remember me, then I don’t care if everyone else forgets.", author: "Kafka on the Shore" },
    { text: "I love you more than there are stars in the sky and fish in the sea.", author: "The Time Traveler’s Wife" },
    { text: "I wish I knew how to quit you.", author: "Brokeback Mountain" },
    { text: "You are my heart, my life, my one and only thought.", author: "The White Company" },
    { text: "It has made me better loving you… it has made me wiser, and easier, and brighter.", author: "Henry James" },
    { text: "I would rather spend one lifetime with you, than face all the ages of this world alone.", author: "The Lord of the Rings" },
    { text: "I love you as certain dark things are to be loved, in secret, between the shadow and the soul.", author: "Pablo Neruda" },
    { text: "You are my sun, my moon, and all my stars.", author: "E.E. Cummings" },
    { text: "When I saw you I fell in love, and you smiled because you knew.", author: "Arrigo Boito" },
    { text: "You are the one girl that made me risk everything for a future worth having.", author: "The Perfect Game" },
    { text: "I promise to love you forever; every single day of forever.", author: "Twilight" },
    { text: "I would rather have had one breath of her hair, one kiss of her mouth, one touch of her hand, than eternity without it.", author: "City of Angels" },
    { text: "You are my favorite dream and my worst nightmare all at once.", author: "The Kiss Thief" },
    { text: "I look at you and I would rather look at you than all the portraits in the world.", author: "Frank O'Hara" },
    { text: "I wish I could show you when you are lonely or in darkness the astonishing light of your own being.", author: "Hafiz" },
    { text: "I have waited for this opportunity for more than half a century, to repeat to you once again my vow of eternal fidelity and everlasting love.", author: "Love in the Time of Cholera" },
    { text: "He’s more myself than I am. Whatever our souls are made of, his and mine are the same.", author: "Wuthering Heights" },
    { text: "It was love at first sight, at last sight, at ever and ever sight.", author: "Vladimir Nabokov" },
    { text: "You are my today and all of my tomorrows.", author: "Leo Christopher" },
    { text: "I love you wildly, insanely, infinitely.", author: "Boris Pasternak" },
    { text: "You are my once upon a time, my fairy tale, my ever after.", author: "Unknown" },
    { text: "I want to be the only hand you ever need to hold.", author: "Unknown" },
    { text: "We loved with a love that was more than love.", author: "Edgar Allan Poe" },
    { text: "In your smile, I see something more beautiful than the stars.", author: "Beth Revis" },
    { text: "You are my greatest adventure.", author: "The Incredibles" },
    { text: "My soul and your soul are forever tangled.", author: "N.R. Hart" },
    { text: "When I saw you, I fell in love. And you smiled because you knew.", author: "William Shakespeare" },
    { text: "You make me want to be a better man.", author: "As Good As It Gets" },
    { text: "To the world, you may be one person, but to one person you are the world.", author: "Dr. Seuss" },
    { text: "In all the world, there is no heart for me like yours.", author: "Maya Angelou" },
    { text: "I want all of you, forever, you and me, every day.", author: "The Notebook" },
    { text: "I love you, and that’s the beginning and end of everything.", author: "F. Scott Fitzgerald" },
    { text: "If I had a flower for every time I thought of you, I could walk through my garden forever.", author: "Alfred Tennyson" },
    { text: "You are every reason, every hope, and every dream I’ve ever had.", author: "Nicholas Sparks" },
    { text: "I know by experience that the poets are right: love is eternal.", author: "E.M. Forster" },
    { text: "You’re nothing short of my everything.", author: "Ralph Block" },
    { text: "You don’t love someone because they’re perfect, you love them in spite of the fact that they’re not.", author: "Jodi Picoult" },
    { text: "For you, a thousand times over.", author: "The Kite Runner" },
    { text: "Even in another life, I’d find you and love you all over again.", author: "Unknown" },
];



const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const newQuoteBtn = document.getElementById("newQuoteBtn");
const copyBtn = document.getElementById("copyBtn");
const shareBtn = document.getElementById("shareBtn");


newQuoteBtn.addEventListener("click", function() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    
    quoteText.style.opacity = "0";
    setTimeout(() => {
        quoteText.innerText = `"${quotes[randomIndex].text}"`;
        quoteAuthor.innerText = `- ${quotes[randomIndex].author}`;
        quoteText.classList.add("fade-in");
    }, 500);
});


copyBtn.addEventListener("click", function() {
    navigator.clipboard.writeText(`${quoteText.innerText} ${quoteAuthor.innerText}`);
    alert("Quote copied to clipboard! 📋");
});

shareBtn.addEventListener("click", function() {
    if (navigator.share) {
        navigator.share({
            title: "Romantic Book Quote",
            text: `${quoteText.innerText} ${quoteAuthor.innerText}`,
            url: window.location.href
        });
    } else {
        alert("Sharing not supported on this browser.");
    }
});
