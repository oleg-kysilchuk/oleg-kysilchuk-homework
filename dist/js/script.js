class Card {
    constructor(suit, symbol) {
        this.suit = suit,
        this.symbol = symbol
    }
}

class Deck {
    constructor() {
        this.deck = []
    }

    createDeck(suits, symbols) {
        for(let suit of suits) {
            for(let symbol of symbols) {
                this.deck.push(new Card(suit, symbol));
            }
        }

        return this.deck;
    }
}

const suits = ['spades', 'diamonds', 'clubs', 'hearts'];
const symbols = [6, 7, 8, 9, 10, "J", "Q", "K", "A"];
const spades = "../assets/spades.svg"
const diamonds = "../assets/diamonds.svg"
const clubs = "../assets/clubs.svg"
const hearts = "../assets/hearts.svg"

let deck = new Deck;
deck.createDeck(suits, symbols);


const table = document.querySelector('.table');

deck.deck.forEach(item => {
    
    const crd = document.createElement('div');
    crd.classList.add('card');

    table.append(crd);

    const flip = document.createElement('div');
    flip.classList.add('flip')

    crd.append(flip);

    const front = document.createElement('div');
    front.classList.add('front');
    front.setAttribute('data-symbol', `${item.symbol}`);

    switch(item.suit) {
        case 'spades':
            front.classList.add('spades');
            front.classList.add('black');
            break;

        case 'diamonds':
            front.classList.add('diamonds');
            front.classList.add('red');
            break;

        case 'clubs':
            front.classList.add('clubs');
            front.classList.add('black');
            break;

        case 'hearts':
            front.classList.add('hearts');
            front.classList.add('red');
            break;
    }

    const back = document.createElement('div');
    back.classList.add('back');
    back.innerHTML = '<img src="./assets/back.jpg" alt="card-bg">'

    flip.append(front, back);
});

    



















// const crd = document.createElement('div');
// crd.classList.add('card');

// table.append(crd);

// const flip = document.createElement('div');
// flip.classList.add('flip')

// crd.append(flip);

// const front = document.createElement('div');
// front.classList.add('front');

// const back = document.createElement('div');
// back.classList.add('back');
// back.innerHTML = '<img src="./assets/back.jpg" alt="card-bg">'

// flip.append(front, back);