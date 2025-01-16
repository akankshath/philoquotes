const quotes = [
    "Without music, life would be a mistake. - Friedrich Nietzsche",
    "Art enables us to find ourselves and lose ourselves at the same time. - Thomas Merton",
    "We do not see things as they are, we see them as we are. - Anaïs Nin",
    "One must still have chaos in oneself to be able to give birth to a dancing star. - Friedrich Nietzsche",
    "In the midst of winter, I found there was, within me, an invincible summer. - Albert Camus",
    "The only journey is the one within. - Rainer Maria Rilke",
    "Every act of creation is first an act of destruction. - Pablo Picasso",
    "Man is nothing else but what he makes of himself. - Jean-Paul Sartre"
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerText = quotes[randomIndex];
}
