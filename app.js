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

for(let i=0; i < 100; i++){
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
console.log(player.parentElement.getAttribute('class'))

// console.log(single.parentElement.getAttribute('class'))

class Player {
    constructor(name, collectedItems, timer){
        this.name = name;
        this.collectedItems = 0;
        this.timer = 80;
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
        this.timer = 80;
        const time = setInterval(() => {
            console.log(time)
            this.timer --;
            this.updateStats();
            if (engineer.collectedItems >=50 && engineer.timer >= 0){
                toggleWinModal();
                clearInterval(time);
            }else if(engineer.collectedItems < 50 && engineer.timer <= 0){
                toggleLoseModal();
                clearInterval(time);
            }
        }, 1000);
    }
    increaseSheets(){
        const single = document.querySelector('.paper')
        if(player.parentElement.getAttribute('class') === single.parentElement.getAttribute('class')){
            this.collectedItems++;
            this.updateStats();
            single.remove();
            let paper = Math.floor(Math.random()*100);
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

const toggleOutOfBound = () =>{
    outOfBound.classList.toggle('hidden');
    engineer.timer = 0;
    engineer.collectedItems = 0;
    player.remove();
}

//FUNCTION TO MOVE THE ENGINEER
let position = 0;
const CONTROL = (event) =>{
    event.preventDefault();
    console.log(event.keyCode);
    //up key (-10 of grid position)
    if(event.keyCode === 38){
        if(position >=0 && position <=10){
            toggleOutOfBound();
        }else{
            position-=10;
            document.querySelector(`.child${position}`).appendChild(figure);
            // console.log(document.querySelector(`.child${position}`))
        }
    }
    //right key (+1 of grid position)
    if(event.keyCode === 39){
        if((position+1) % 10 === 0){
            toggleOutOfBound();
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
        }else{
            position+=10;
            document.querySelector(`.child${position}`).appendChild(figure);
            // console.log(document.querySelector(`.child${position}`))
        }
    }
    //left key (-1 of grid position)
    if(event.keyCode === 37){
        if(position % 10 === 0){
            toggleOutOfBound();
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


/* =============================
EVENT LISTENERS
============================= */

window.addEventListener('load', GAME)

window.addEventListener('keydown', CONTROL);

startButton.addEventListener('click', toggleModal)

//Reset
resetWin.addEventListener('click', function(){
    window.location.reload();
})

resetLose.addEventListener('click', function(){
    window.location.reload();
})

resetOutOfBound.addEventListener('click', function(){
    window.location.reload();
})