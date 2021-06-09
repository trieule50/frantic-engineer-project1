# Frantic Engineer
Inspired by the snake game.
![Image of SNAKE on NOKIA](https://theprint.in/wp-content/uploads/2020/07/brandma-snake-game.jpg)

## Project Description: 

Snake was first launched in 1997 on the Nokia 6110 and became the second mobile game after Tetris. Frantic Engineer was inspired by snake and my previous career. 

Frantic Engineer is about an engineer who is getting ready to bid on a project. However, in order to submit the bid on time, all the proposal sheets will need to be collected. To make it even more difficult, there are obstacles that the engineer could run into making them lose all their sheets!

Can you help the engineer in submitting the bid proposal on time?

**Link to site:** WILL ADD AFTER HTML HAS BEEN CREATED

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
With the individual class name, append the figure to the individual div item. 

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

#### Setting Up A Function to "Collect" Papers

#### Setting Up A Win Logic

### Focusing on User Experience

## Problem Areas 
- First lesson learned was from setting up the function to move the engineer is that KeyDown is a global event listener (i.e. = window and not document.querySelector).
- Second lesson learned was from setting up a function to "collect" papers.

## Future Directions

## Accomplishments 

## Citation
[History of Snake](https://www.itsnicethat.com/features/taneli-armanto-the-history-of-snake-design-legacies-230221)