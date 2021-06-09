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
const resetWin = document.querySelector('.resetWin')
const resetLose = document.querySelector('.resetLose')

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
figure.innerHTML = `<img src="https://i.pinimg.com/736x/51/71/a0/5171a0091726fcd052c80a115b77d580.jpg"/>`
startPoint.appendChild(figure);

const spawnPaper = document.createElement('div');
spawnPaper.setAttribute('class', 'paper');
spawnPaper.innerText = '📝'
let paper = Math.floor(Math.random()*100);
document.querySelector(`.child${paper}`).appendChild(spawnPaper);


const player = document.querySelector('.engineer')
console.log(player.parentElement.getAttribute('class'))

// console.log(single.parentElement.getAttribute('class'))

class Player {
    constructor(name, collectedItems, timer){
        this.name = name;
        this.collectedItems = 0;
        this.timer = 200;
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
        this.timer = 200;
        const time = setInterval(() => {
            console.log(time)
            this.timer --;
            this.updateStats();
            if (this.collectedItems >=94 && this.timer >= 0){
                clearInterval(time);
                toggleWinModal();
            }else if(this.collectedItems < 94 && this.timer <= 0){
                clearInterval(time);
                toggleLoseModal();
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
        <div class="collected">Sheets Collected: ${this.collectedItems}/94 Sheets</div>
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

//FUNCTION TO MOVE THE ENGINEER
let position = 0;
const CONTROL = (event) =>{
    event.preventDefault();
    console.log(event.keyCode);
    if (event.keyCode === 38){
        //up key (-10 of grid position)
        position-=10;
        document.querySelector(`.child${position}`).appendChild(figure);
        console.log(document.querySelector(`.child${position}`))
        }
    if(event.keyCode === 39){
        //right key (+1 of grid position)
        position++;
        document.querySelector(`.child${position}`).appendChild(figure);
        console.log(document.querySelector(`.child${position}`));
        }
    if(event.keyCode === 40){
        //down key (+10 of grid position)
        position+=10;
        document.querySelector(`.child${position}`).appendChild(figure);
        console.log(document.querySelector(`.child${position}`))
        }
    if(event.keyCode === 37){
        //left key (-1 of grid position)
        position--;
        document.querySelector(`.child${position}`).appendChild(figure);
        console.log(document.querySelector(`.child${position}`))
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

//Reset


/* =============================
    EVENT LISTENERS
============================= */

window.addEventListener('load', GAME)

window.addEventListener('keydown', CONTROL);

startButton.addEventListener('click', toggleModal)

resetWin.addEventListener('click', function(){
    window.location.reload();
})

resetLose.addEventListener('click', function(){
    window.location.reload();
})