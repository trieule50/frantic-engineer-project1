// console.log('linked')

/* ======================
    GLOBAL VARS
=========================*/

/* ======================
    CACHED DOM NODES
=========================*/
const gridParent = document.querySelector('.parent');
const statsBoard = document.querySelector('.statsBoard')

//For Loop to create div child grid//

for(let i=0; i < 100; i++){
    const gridChild = document.createElement('div');
    gridChild.setAttribute('class', `child child${i}`)
    gridParent.appendChild(gridChild);
}

const startPoint = document.querySelector('.child45');

/* ======================
    CREATE CLASS
=========================*/

class User {
    constructor(name, collectedItems, timer){
        this,name = name;
        this.collectedItems = 0;
        this.timer = 200;
    }
    createBoard(){
        const figure = document.createElement('div');
        figure.setAttribute('class', 'engineer');
        figure.innerHTML = `<img src="https://i.pinimg.com/736x/51/71/a0/5171a0091726fcd052c80a115b77d580.jpg"/>`
        startPoint.appendChild(figure);
        const countDown = document.createElement('div');
        countDown.innerHTML = `
        <div class="countDown">Timer: ${this.timer} sec.</div>
        <div class="collected">Sheets Collected: ${this.collectedItems}/94 Sheets</div>
        `
        statsBoard.appendChild(countDown);
    }
    descreaseTime(){
        setInterval(function() {
            this.timer -= 1;
            if (this.timer <= 0){
                clearInterval(this.descreaseTime);
                return;
            
            } 1000})
            this.updateStats();
        }
    updateStats(){
        const countDown = document.createElement('div');
        countDown.innerHTML = `
        <div class="countDown">Timer: ${this.timer} sec.</div>
        <div class="collected">Sheets Collected: ${this.collectedItems}/94 Sheets</div>
        `
    }

}

const engineer = new User('noname');

/* =============================
    FUNCTIONS
============================= */

const GAME = () => {
    engineer.createBoard();
    
}

/* =============================
    EVENT LISTENERS
============================= */

window.addEventListener('load', GAME)