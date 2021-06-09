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

class Player {
    constructor(name, collectedItems, timer){
        this,name = name;
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
            if (this.timer === 0){
                clearInterval(time);
                console.log('Time Up!');
            }
            }, 1000);
        }
    // increaseSheets(){

    // }
    updateStats(){

        const countDown = document.querySelector('.countDown');
        countDown.innerHTML = `
        <div class="countDown">Timer: ${this.timer} sec.</div>
        <div class="collected">Sheets Collected: ${this.collectedItems}/94 Sheets</div>
        `
        //TIMER WORKS IN THE CONSOLE. DOES NOT REFLECT IN THE DOM//
    }

}

const engineer = new Player('noname');

/* =============================
    FUNCTIONS
============================= */


//FUNCTION TO SPAWN THE SHEET OF PAPER
const placePaper = () => {
    let paper = Math.floor(Math.random()*100);
    const spawnPaper = document.createElement('div');
    spawnPaper.setAttribute('class', 'paper');
    spawnPaper.innerText = '📝'
    document.querySelector(`.child${paper}`).appendChild(spawnPaper);
    
}
//FUNCTION TO START THE GAME.

const GAME = () => {
    engineer.createBoard();
    placePaper();
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
}

// FUNCTION TO START THE TIMER
const toggleModal = () =>{
    modal.classList.toggle('hidden');
}

/* =============================
    EVENT LISTENERS
============================= */

window.addEventListener('load', GAME)

window.addEventListener('keydown', CONTROL);

startButton.addEventListener('click', toggleModal)