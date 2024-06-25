import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgRedBright("****WELLCOME TO THE QUIZ WORLD**** \n"));
const quiz = await inquirer.prompt([{
        name: "question_1",
        type: "list",
        message: chalk.bgCyan("\n 1: What does the never type represent in TypeScript?/-\n"),
        choices: [
            "A) A type that can never have a value",
            " B) A type that can only hold null or undefined",
            "C) A type that can hold any value",
            " D) A type that can hold only void"
        ]
    },
    {
        name: "question_2",
        type: "list",
        message: chalk.magentaBright("\n 2: What is the primary purpose of TypeScript?\n"),
        choices: [
            "A) To enhance JavaScript with type safety",
            " B) To replace JavaScript in web development",
            " C) To improve performance of JavaScript applications",
            "D) To provide a new syntax for JavaScript",
        ]
    },
    {
        name: "question_3",
        type: "list",
        message: chalk.bgGreenBright("\n 3: How do you define an interface in TypeScript?\n"),
        choices: [
            "A) interface Person { name: string; age: number; }",
            " B) type Person { name: string; age: number; }",
            "C) class Person { name: string; age: number; }",
            "D) struct Person { name: string; age: number; }",
        ]
    },
    {
        name: "question_4",
        type: "list",
        message: chalk.bgGreenBright("\n 4: What does the readonly modifier do in TypeScript?\n"),
        choices: [
            "A) It allows the property to be changed only within the class",
            " B) It makes the property immutable after its initial assignment",
            "C) It makes the property accessible only from within the class",
            " D) It prevents the property from being serialized",
        ]
    },
    {
        name: "question_5",
        type: "list",
        message: chalk.bgCyanBright("\n 5: Which of the following is the correct way to specify an optional parameter in a TypeScript function?\n"),
        choices: [
            "  A) function greet(name: string?): void",
            " B) function greet(name?: string): void",
            "  C) function greet(name: string | null): void",
            " D) function greet(optional name: string): void"
        ]
    },
    {
        name: "question_6",
        type: "list",
        message: chalk.bgMagentaBright("\n 6: How can you define a union type in TypeScript?\n"),
        choices: [
            " A) let id: string | number",
            " B) let id = string & number",
            "C) let id: string || number",
            "D) let id = string && number"
        ]
    }
]);
let score = 0;
switch (quiz.question_1) {
    case "A) A type that can never have a value":
        console.log("1: correct");
        ++score;
        break;
    default:
        console.log("1: incorrect");
}
switch (quiz.question_2) {
    case "A) To enhance JavaScript with type safety":
        console.log("2: correct");
        ++score;
        break;
    default:
        console.log(" 2: incorrect! ");
}
switch (quiz.question_3) {
    case "A) interface Person { name: string; age: number; }":
        console.log("3: correct");
        ++score;
        break;
    default:
        console.log("3: incorrect");
}
switch (quiz.question_4) {
    case " B) It makes the property immutable after its initial assignment":
        console.log("4: correct");
        ++score;
        break;
    default:
        console.log("4: incorrect");
}
switch (quiz.question_5) {
    case " B) function greet(name?: string): void":
        console.log("5: correct");
        ++score;
        break;
    default:
        console.log("5: incorrect");
}
switch (quiz.question_6) {
    case " A) let id: string | number":
        console.log("6: correct");
        ++score;
        break;
    default:
        console.log("6: incorrect");
}
console.log(chalk.bgRedBright(`\n your score is ${score}/-\n`));
