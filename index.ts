import inquirer from "inquirer"


const answer = await inquirer.prompt ([
    {
        type: "number",
        name: "firstNumber",
        message: "Enter your first number"  
    },
    {
        type: "number",
        name: "secondNumber",
        message: "Enter your second number"  
    },
    {
        type:"list",
        name:"operator",
        message:"Enter your operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    } 
])
if (answer.operator === "Addition") {
    console.log(`your value is ${(answer.firstNumber + answer.secondNumber)}`);
  } else if (answer.operator === "Subtraction") {
    console.log(`your value is ${(answer.firstNumber - answer.secondNumber)}`);
  } else if (answer.operator === "Multiplication") {
    console.log(`your value is ${(answer.firstNumber * answer.secondNumber)}`);
  } else if (answer.operator === "Division") {
    console.log(`your value is ${(answer.firstNumber / answer.secondNumber)}`);
  } else console.log("You Are Looser.!!");

