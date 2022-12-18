#! /usr/bin/env node
// done Number guessing game Designing
// done step 1: welcome on screen
// done step 2: Generate Random number for computer
// done step 3: enter a number by user for guessing
// done step 4: comparing computer and user number
// done step 5: set the number of lives to play the game
// done step 6: ask to restart the game
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//  * Modules import
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
// welcome funtion
const sleep = () => new Promise((res, rej) => setTimeout(res, 3000));
// Animation starts
function welcome() {
    return __awaiter(this, void 0, void 0, function* () {
        const rainbow = chalkAnimation.rainbow(`
███    ██ ██    ██ ███    ███ ██████  ███████ ██████       ██████  ██    ██ ███████ ███████ ███████ 
████   ██ ██    ██ ████  ████ ██   ██ ██      ██   ██     ██       ██    ██ ██      ██      ██      
██ ██  ██ ██    ██ ██ ████ ██ ██████  █████   ██████      ██   ███ ██    ██ █████   ███████ ███████ 
██  ██ ██ ██    ██ ██  ██  ██ ██   ██ ██      ██   ██     ██    ██ ██    ██ ██           ██      ██ 
██   ████  ██████  ██      ██ ██████  ███████ ██   ██      ██████   ██████  ███████ ███████ ███████ 
                                                                                                    
`);
        yield sleep();
        rainbow.stop();
    });
}
// main program
let playerLife = 3;
function userNum() {
    return __awaiter(this, void 0, void 0, function* () {
        let computerNum = Math.floor(Math.random() * 10);
        do {
            console.log(`player life left : ${playerLife}`);
            var que = yield inquirer.prompt([
                {
                    type: "number",
                    name: "user_number",
                    message: "Select a number between 0 to 10 :",
                    validate: (answers) => {
                        if (isNaN(answers)) {
                            return "please enter a vlid number";
                        }
                        return true;
                    },
                },
            ]);
            if (que.user_number === computerNum) {
                console.log(chalk.bold.green("number is guessed  CONGRATULATIONS! "));
            }
            else if (que.user_number < computerNum) {
                console.log(`${que.user_number} is Smaller than Computer number try Again ! `);
            }
            else if (que.user_number > computerNum) {
                console.log(`${que.user_number} is Greater than Computer number try Again ! `);
            }
            playerLife--;
        } while (playerLife > 0 && computerNum !== que.user_number);
        if (playerLife == 0) {
            console.log(chalk.bold.yellow("GAME OVER"));
        }
    });
}
function startAgain() {
    return __awaiter(this, void 0, void 0, function* () {
        do {
            console.clear();
            yield welcome();
            playerLife = 3;
            yield userNum();
            var tryAgain = yield inquirer.prompt([
                {
                    type: "confirm",
                    name: "playAgain",
                    message: "Do You want to play Again?",
                    default: false,
                },
            ]);
        } while (tryAgain.playAgain == true);
    });
}
startAgain();
