import fsExtra from "fs-extra/esm";
import { execSync } from "child_process";
import chalk from "chalk";
import { fileURLToPath } from "url";
import path from "path";
import netAvailable from "../utils/inernet.js";
import inquirer from "inquirer";
import ora from "ora";

export const FrontendOnly = async (newPath, frontendType, FrontendName) => {
    try {
        if (!netAvailable) {
            console.log(chalk.red.bold("\nNo Internet Connection Detected!\n"));
            await inquirer.prompt([{
                type: 'confirm',
                name: 'proceedOffline',
                message: 'Do you want to proceed with the frontend setup without installing dependencies? (You can install them later when you have an internet connection)',
                default: true
            }]).then(async answer => {
                if (answer.proceedOffline) {

                    console.log(chalk.yellow("\nProceeding with frontend setup without installing dependencies...\n"));

                    const __filename = fileURLToPath(import.meta.url);
                    const __dirname = path.dirname(__filename);
                    const templatePath = path.join(__dirname, "..", "template");
                    await fsExtra.ensureDir(`${newPath}/Frontend`);
                    await fsExtra.copy(`${templatePath}/frontend${frontendType}`, `${newPath}/Frontend`);
                    const packageJson = await fsExtra.readJson(`${newPath}/Frontend/package.json`);
                    packageJson.name = `${FrontendName}`;
                    packageJson.author = "Muhammad Rabee";
                    await fsExtra.writeJson(`${newPath}/Frontend/package.json`, packageJson, { spaces: 2 });
                    console.log(chalk.yellow("\nMake sure you install dependencies..\n"));
                }
                else {
                    console.log(chalk.redBright("\nProject creation cancelled. Please Try Again when you have an internet connection."));
                    process.exit(0);
                }
            });

        } else {

            console.log(chalk.yellow("\nSetting up Frontend...\n"));
            const __filename = fileURLToPath(import.meta.url);
            const __dirname = path.dirname(__filename);
            const templatePath = path.join(__dirname, "..", "template");

            await fsExtra.ensureDir(`${newPath}/Frontend`);



            await fsExtra.copy(`${templatePath}/frontend${frontendType}`, `${newPath}/Frontend`);

            const spinner = ora({
                text: 'Installing Dependencies.... This might take some Time',
                spinner: 'clock'
            }).start();

            execSync(`npm install`, { cwd: `${newPath}/Frontend`, stdio: 'inherit' });

            spinner.succeed('Dependencies installed successfully!');
            
            const packageJson = await fsExtra.readJson(`${newPath}/Frontend/package.json`);
            packageJson.name = `${FrontendName}`;
            packageJson.author = "Muhammad Rabee";
            await fsExtra.writeJson(`${newPath}/Frontend/package.json`, packageJson, { spaces: 2 });
            console.log(chalk.yellow("\nFrontend Setup Completed!...\n"));
        }
    } catch (error) {
        console.log(chalk.red("Error occurred while setting up frontend: " + error.message));
        process.exit(1);
    }
}