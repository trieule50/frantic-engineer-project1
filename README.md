# Frantic Engineer
Inspired by the snake game.
![Image of SNAKE on NOKIA](https://theprint.in/wp-content/uploads/2020/07/brandma-snake-game.jpg)

## Project Description: 

Snake was first launched in 1997 on the Nokia 6110 and became the second mobile game after Tetris. Frantic Engineer was inspired by snake and my previous career. 

Frantic Engineer is about an engineer who is getting ready to bid on a project. However, in order to submit the bid on time, all the proposal sheets will need to be collected.

Can you help the engineer in submitting the bid proposal on time?

**Link to site:** https://trieule50.github.io/frantic-engineer-project1/

### Programs Used:
- HTML
- CSS
- JavaScript

## Learning Experience

### Setting Up Project Worksheet
Refer to the project-worksheet markdown to read over the:
- Overall Project Description 
- Estimate and Actual Project Schedule
- User Stories
- Wireframes
- Time/Priority Matrix

### Setting Up Core Structure

#### Setting Up A Game Area
First, with the help of HTML, set up a container and loop the amount of grid to be append to the game area. Afterwards, set an attribute to the class. This attribute will be used to control / move the engineer.
#### Setting Up A Timer
SetInterval() is a function that allows a funation to run at a specified intervals in milliseconds. In the player class, a decrease method was created to have a countdown after the player 'click' start. 

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
#### Setting Up Function to Control Engineer
With the individual class name, append the figure to the individual div item. Since the board is a 10x10 grid, all horizontal movement was plus or minus one and vertical movement was plus or minus 10. With that logic, the engineer can be append to each div. 

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
        ...

#### Setting Up To Spawn Papers
Similar to the snake game, the sheets of proposal needs to be randomize in the grid. 

    let paper = Math.floor(Math.random()*100);
    document.querySelector(`.child${paper}`).appendChild(spawnPaper);

#### Setting Up A Function to "Collect" Papers
The logic used to create the function to "collect" papers was that if the engineer and the sheet of paper shared the same parent class then points will be added and that the sheet of paper will be remove and then regenerated elsewhere. 

    if(player.parentElement.getAttribute('class') === single.parentElement.getAttribute('class')){
            this.collectedItems++;
            this.updateStats();
            single.remove();
            let paper = Math.floor(Math.random()*100);
            document.querySelector(`.child${paper}`).appendChild(spawnPaper);
        }

#### Setting Up A Win Logic

Frantic engineer is a game against the clock. To win, the player will need to collect all 50 sheets within the 80 seconds. 

    if (this.collectedItems >=50 && this.timer >= 0){
                clearInterval(time);
                toggleWinModal();
            }else if(this.collectedItems < 50 && this.timer <= 0){
                clearInterval(time);
                toggleLoseModal();
            }

### Focusing on User Experience
With the mindset of "mobile first" elements are stacked in the game. One of the concerns was making the modal center to the page. By @media a min width of 768. The game is centered to an i-Pad to a desktop. 


## Problem Areas 
- First lesson learned was from setting up the function to move the engineer is that KeyDown is a global event listener (i.e. = window and not document.querySelector).
- Second lesson learned was from setting up a function to "collect" papers. The main issue was to understand the type of event listener that was attached to a function. For instance, the 'collect function was on the 'window load' which invoke the function everytime the window load. 
- Third lesson learned was understanding the edge condition. Writing an if statement to capture all condition for example, out of bound conditions. 
- Four lesson learned was that edge cases are the difficult.
    Couple of edge classes that I encounter:
    - Setting up the board game boundary
    - Clearing out the set intervals

## Future Directions
- One of my stretch goal was to have the collected papers append to the engineers.
- Create a more responsive app for all size mobile devices. As of now, this is a desktop game, that works with keypress. 

## Accomplishments 
- Frantic Engineer is a functionally game! 
- Understand the importance of scope. 

## Citation
- [History of Snake](https://www.itsnicethat.com/features/taneli-armanto-the-history-of-snake-design-legacies-230221)
- [Blueprint PNG](https://www.subpng.com/png-d1xs5s/)
- [Engineer PNG](https://www.pinterest.com/leojackmystic7/engineer-cartoon/)