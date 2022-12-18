#! /usr/bin/env node



// done Number guessing game Designing
// done step 1: welcome on screen
// done step 2: Generate Random number for computer
// done step 3: enter a number by user for guessing
// done step 4: comparing computer and user number
// done step 5: set the number of lives to play the game
// done step 6: ask to restart the game

//  * Modules import
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

// welcome funtion
const sleep = () => new Promise((res, rej) => setTimeout(res, 3000) );
 // Animation starts
async function welcome() {
    const rainbow = chalkAnimation.rainbow(`
███    ██ ██    ██ ███    ███ ██████  ███████ ██████       ██████  ██    ██ ███████ ███████ ███████ 
████   ██ ██    ██ ████  ████ ██   ██ ██      ██   ██     ██       ██    ██ ██      ██      ██      
██ ██  ██ ██    ██ ██ ████ ██ ██████  █████   ██████      ██   ███ ██    ██ █████   ███████ ███████ 
██  ██ ██ ██    ██ ██  ██  ██ ██   ██ ██      ██   ██     ██    ██ ██    ██ ██           ██      ██ 
██   ████  ██████  ██      ██ ██████  ███████ ██   ██      ██████   ██████  ███████ ███████ ███████ 
                                                                                                    
`);
await sleep();
rainbow.stop();

    
}
// main program
let playerLife = 3;
async function userNum() {
  let computerNum = Math.floor(Math.random() * 10);
  do {
  
    console.log(`player life left : ${playerLife}`);
    var que = await inquirer.prompt([
      {
        type: "number",
        name: "user_number",
        message: "Select a number between 0 to 10 :",
        validate: (answers: number) => {
          if (isNaN(answers)) {
            return "please enter a vlid number";
          }
          return true;
        },
      },
    ]);

    if (que.user_number === computerNum) {
      console.log(chalk.bold.green("number is guessed  CONGRATULATIONS! "));
    } else if (que.user_number < computerNum) {
      console.log(
        `${que.user_number} is Smaller than Computer number try Again ! `
      );
    } else if (que.user_number > computerNum) {
      console.log(
        `${que.user_number} is Greater than Computer number try Again ! `
      );
    }
    playerLife--;
  } while (playerLife > 0 && computerNum !== que.user_number);
  if (playerLife == 0) {
    console.log(chalk.bold.yellow("GAME OVER"));
  }
}

async function startAgain() {
  do {
    console.clear();
    await welcome();
    playerLife = 3;
    await userNum();
    var tryAgain = await inquirer.prompt([
      {
        type: "confirm",
        name: "playAgain",
        message: "Do You want to play Again?",
        default: false,
      },
    ]);
  } while (tryAgain.playAgain == true);

  
}
startAgain();
