import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellowBright("HELLLLO, ") + chalk.blueBright("FREIND,s"));
console.log(chalk.greenBright.italic("MY NAME IS RAHEEL,"));
async function main() {
    let answers = await inquirer.prompt([
        {
            name: "age",
            type: "number",
            message: "Enter your age"
        }
    ]);
    console.log(chalk.green(`Insha Allah, in ${60 - answers.age} years you will be 60 years old.`));
}
main();
