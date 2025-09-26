const path = require('path');
const { nowMs, formatMs, readState, writeState, ensureLastUpdated, applyElapsed } = require('./timeStore');

const DATA_FILE = path.resolve(__dirname, 'pet.json');

// default pet
let pet = {
    name: 'Buddy',
    hunger: 30, // 0..100
    happiness: 80, // 0..100
    lastUpdated: nowMs(),
};

// rule: hunger increases 1 point every 10 seconds; happiness decreases 1 point every 20 seconds
function applyTimeRules(state, elapsedMs) {
    const sec = elapsedMs / 1000;
    state.hunger = Math.min(100, state.hunger + sec / 10);
    state.happiness = Math.max(0, state.happiness - sec / 20);
}

async function load() {
    const s = await readState(DATA_FILE);
    if (s) pet = s;
    ensureLastUpdated(pet);
    // catch-up immediately on load
    applyElapsed(pet, applyTimeRules);
    await writeState(DATA_FILE, pet);
}

async function save() {
    await writeState(DATA_FILE, pet);
}

function printStatus() {
    console.log(`\n[${formatMs(pet.lastUpdated)}] ${pet.name}: hunger=${pet.hunger.toFixed(1)} happiness=${pet.happiness.toFixed(1)}`);
}

async function start() {
    await load();
    printStatus();

    // tick every second but use elapsed time so it's robust
    const id = setInterval(async () => {
        applyElapsed(pet, applyTimeRules);
        printStatus();
        await save();
    }, 1000);

    // example interaction: feed after 7 seconds
    setTimeout(async () => {
        pet.hunger = Math.max(0, pet.hunger - 25);
        console.log('\nYou fed the pet!');
        await save();
    }, 7000);

    // stop after 20 seconds for demo
    setTimeout(() => {
        clearInterval(id);
        console.log('\nDemo finished. Final state saved to', DATA_FILE);
    }, 20000);
}

start().catch(err => {
    console.error('Error:', err);
    process.exitCode = 1;
});

//Day 2 of Daily Tiny Programming
//This is a simple virtual pet simulation in JavaScript
//It's kinda like Tamagotchi!
//The pet has attributes like hunger, happiness, and energy
//The user can interact with the pet by feeding, playing, and letting it rest

//Parameteres for HUNGER (increase feeding to decrease hunger)
//user needs to give the pet a meal everyday so it doesn't die
//every time a meal is not given, hunger increases by 25

//Parameteres for HAPPINESS (increase playing to increase happiness)
//user needs to play with the pet everyday so it doesn't get sad
//when user plays with the pet, happiness increases by 5

//Parameters for ENERGY (increase resting to increase energy)
//user needs to let the pet rest everyday so it doesn't get tired
//when user lets the pet rest, energy increases by 10

//daily chart of pet's status and the user's interactions
//recorded and updated

//User can name the pet

//last time
//current time
//difference in days/hours
//if more than 1 day, increase hunger by 25, decrease happiness by 5, decrease energy by 10
class VirtualPet {
    constructor(name) {
        this.name = name;
        this.hunger = 0;   // 0 (full) to 100 (starving)
        this.happiness = 100; // 0 (sad) to 100 (happy)
        this.energy = 100;    // 0 (tired) to 100 (energetic)
    }  




    feed() {
        this.hunger = Math.max(0, this.hunger - 25);
        console.log(`${this.name} has been fed. Hunger is now ${this.hunger}.`);
    }
    play() {
        this.happiness = Math.min(100, this.happiness + 5);
        console.log(`${this.name} played. Happiness is now ${this.happiness}.`);
    }
    rest() {
        this.energy = Math.min(100, this.energy + 10);
        console.log(`${this.name} rested. Energy is now ${this.energy}.`);
    }   
    dailyUpdate() {
        this.hunger = Math.min(100, this.hunger + 25);
        this.happiness = Math.max(0, this.happiness - 5);
        this.energy = Math.max(0, this.energy - 10);
        console.log(`Daily update for ${this.name}: Hunger: ${this.hunger}, Happiness: ${this.happiness}, Energy: ${this.energy}`);
    }  
    getStatus() {
        return {
            name: this.name,
            hunger: this.hunger,   
            happiness: this.happiness,
            energy: this.energy
        };
    }

    
    pet = {
        hunger: 50,
        lastUpdate: Date.now()
    }
    
    
}
