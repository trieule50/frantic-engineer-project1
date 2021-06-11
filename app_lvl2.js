// console.log('linked')

/* ======================
    GLOBAL VARS
=========================*/

/* ======================
    CACHED DOM NODES
=========================*/
const gridParent = document.querySelector('.parent');
const statsBoard = document.querySelector('.statsBoard')
const startButton = document.querySelector('.startButton');
const modal = document.querySelector('.modal');
const winModal = document.querySelector('.winModal');
const loseModal = document.querySelector('.loseModal');
const resetWin = document.querySelector('.resetWin');
const resetLose = document.querySelector('.resetLose');
const outOfBound = document.querySelector('.outOfBoundModal');
const resetOutOfBound = document.querySelector('.resetOutOfBound');

//For Loop to create div child grid//

for(let i=1; i < 101; i++){
    const gridChild = document.createElement('div');
    gridChild.setAttribute('class', `child child${i}`)
    gridParent.appendChild(gridChild);
}

/* ======================
    CREATE CLASS
=========================*/

const startPoint = document.querySelector('.child');
const figure = document.createElement('div');
figure.setAttribute('class', 'engineer');
figure.innerHTML = `<img src="https://i.pinimg.com/474x/b1/21/08/b121080d1ca8f515097b4d7e0a2a9de9.jpg"/>`
startPoint.appendChild(figure);

const spawnPaper = document.createElement('div');
spawnPaper.setAttribute('class', 'paper');
spawnPaper.innerHTML = '<img src="https://mpng.subpng.com/20190402/rlv/kisspng-blueprint-architecture-clip-art-design-vector-grap-engineer-blue-print-transparent-amp-png-clipart-5ca40ebe718cd3.2540482515542555504651.jpg"/>'
let paper = Math.floor(Math.random()*100);
document.querySelector(`.child${paper}`).appendChild(spawnPaper);


const player = document.querySelector('.engineer')

class Player {
    constructor(name, collectedItems, timer){
        this.name = name;
        this.collectedItems = 0;
        this.timer = 70;
        this.time;
    }
    createBoard(){
        startButton.addEventListener('click', () => this.descreaseTime());
        const countDown = document.createElement('div');
        countDown.innerHTML = `
        <div class="countDown">Timer: ${this.timer} sec.</div>
        `
        statsBoard.appendChild(countDown);
    }

    descreaseTime(){
        this.timer = 70;
        this.time = setInterval(() => {
            this.timer --;
            this.updateStats();
            if (engineer.collectedItems >=50 && engineer.timer >= 0){
                toggleWinModal();
                clearInterval(this.time);
            }else if(engineer.collectedItems < 50 && engineer.timer <= 0){
                toggleLoseModal();
                clearInterval(this.time);
            }
        }, 1000);
    }
    resetTime(){
        this.timer = 70;
        clearInterval(this.time);
    }
    increaseSheets(){
        const single = document.querySelector('.paper')
        if(player.parentElement.getAttribute('class') === single.parentElement.getAttribute('class')){
            this.collectedItems++;
            this.updateStats();
            single.remove();
            let paper = Math.floor(Math.random()*101);
            document.querySelector(`.child${paper}`).appendChild(spawnPaper);
        }
    }
    updateStats(){
        const countDown = document.querySelector('.countDown');
        countDown.innerHTML = `
        <div class="countDown">Timer: ${this.timer} sec.</div>
        <div class="collected">Sheets Collected: ${this.collectedItems}/50 Sheets</div>
        `
    }
}

const engineer = new Player('engineer');
/* =============================
    FUNCTIONS
============================= */


//FUNCTION TO SPAWN THE SHEET OF PAPER (Pushed up in the begining of code)

//FUNCTION TO START THE GAME.
const GAME = () => {
    engineer.createBoard();
}

//FUNCTION TO ENDGAME
const ENDGAME = () =>{
    window.removeEventListener('keydown', CONTROL);
    window.removeEventListener('load', GAME)
}

//FUNCTION TO MOVE THE ENGINEER
let position = 1;
const CONTROL = (event) =>{
    event.preventDefault();
    console.log(event.keyCode);
    //up key (-10 of grid position)
    if(event.keyCode === 38){
        if(position >0 && position <=10){
            toggleOutOfBound();
            ENDGAME();
            engineer.resetTime();
        }else{
            position-=10;
            document.querySelector(`.child${position}`).appendChild(figure);
            // console.log(document.querySelector(`.child${position}`))
        }
    }
    //right key (+1 of grid position)
    if(event.keyCode === 39){
        if(position % 10 === 0){
            toggleOutOfBound();
            ENDGAME();
            engineer.resetTime();
        }else{
            position++;
            document.querySelector(`.child${position}`).appendChild(figure);
        // console.log(document.querySelector(`.child${position}`));
        }
    }
    //down key (+10 of grid position)
    if(event.keyCode === 40){
        if(position >= 90 && position <=100){
            toggleOutOfBound();
            ENDGAME();
            engineer.resetTime();
        }else{
            position+=10;
            document.querySelector(`.child${position}`).appendChild(figure);
            // console.log(document.querySelector(`.child${position}`))
        }
    }
    //left key (-1 of grid position)
    if(event.keyCode === 37){
        if((position-1) % 10 === 0){
            toggleOutOfBound();
            ENDGAME();
            engineer.resetTime();
        }else{
            position--;
            document.querySelector(`.child${position}`).appendChild(figure);
            // console.log(document.querySelector(`.child${position}`))
        }
    }
    engineer.increaseSheets();
}

// FUNCTION TO START THE TIMER
const toggleModal = () =>{
    modal.classList.toggle('hidden');
}

// FUNCTION TO DISPLAY WIN OR LOSE LOGIC
const toggleWinModal = () =>{
    winModal.classList.toggle('hidden');
}
const toggleLoseModal = () =>{
    loseModal.classList.toggle('hidden');
}

const toggleOutOfBound = () =>{
    outOfBound.classList.toggle('hidden');
}

//Function to reset game

const initializedGame = () =>{
    startPoint.appendChild(figure)
    position = 1;
    engineer.timer = 80;
    engineer.collectedItems = 0;
}

/* =============================
EVENT LISTENERS
============================= */

window.addEventListener('load', GAME)

window.addEventListener('keydown', CONTROL);

startButton.addEventListener('click', toggleModal)

//Reset Button Listeners
resetWin.addEventListener('click', function(){
    initializedGame();
    toggleWinModal();
    toggleModal();
})

resetLose.addEventListener('click', function(){
    initializedGame();
    toggleLoseModal();
    toggleModal();
})

resetOutOfBound.addEventListener('click', function(){
    toggleOutOfBound();
    window.addEventListener('keydown', CONTROL)
    toggleModal();
    initializedGame();
    window.addEventListener('load', GAME)
    engineer.resetTime();
})

// window.location.reload();