const övningar = [
    'Knäböj',
    'Utfall',
    'Step up',
    'Bäckenlyft',
    'Upphopp',
    'Bulgarisk splitsquat',
    'Space invaders',
    'Jägarvila',
    'Armhävningar',
    'Hängande drag',
    'Jorden runt',
    'En arms rodd',
    'En arms press',
    'Sit ups',
    'Plankan',
    'Sneda situps',
    'Fällkniven',
    'Diagonalsaxar'
];

const randomÖvning = () => {
    return övningar[Math.floor(Math.random() * övningar.length)];
}

const randomReps = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const mixedÖvningar = () => {
    console.log(`Gör ${randomReps(5, 20)} repetioner av övningen : ${randomÖvning()}`);
}

mixedÖvningar();

