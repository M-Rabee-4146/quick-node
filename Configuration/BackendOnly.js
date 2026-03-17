import fsExtra from "fs-extra/esm";
import { execSync } from "child_process";
import chalk from "chalk";
import { fileURLToPath } from "url";
import path from "path";
import netAvailable from "../utils/inernet.js";
import inquirer from "inquirer";
import ora from "ora";



export const BackendOnly = async (newPath, backendType, BackendName) => {
    try {
        if (!netAvailable) {
            console.log(chalk.red.bold("\nNo Internet Connection Detected!\n"));
            await inquirer.prompt([{
                type: 'confirm',
                name: 'proceedOffline',
                message: 'Do you want to proceed with the backend setup without installing dependencies? (You can install them later when you have an internet connection)',
                default: true
            }]).then(async answer => {
                if (answer.proceedOffline) {
                 
                    console.log(chalk.yellow("\nProceeding with backend setup without installing dependencies...\n"));

                    const __filename = fileURLToPath(import.meta.url);
                    const __dirname = path.dirname(__filename);
                    const templatePath = path.join(__dirname, "..", "template");

                    await fsExtra.ensureDir(`${newPath}/Backend`);
                    await fsExtra.copy(`${templatePath}/server${backendType}`, `${newPath}/Backend`);

                    const oldEnvPath = path.join(`${newPath}/Backend`, '.env.example');
                    const newEnvPath = path.join(`${newPath}/Backend`, '.env');

                    if (await fsExtra.pathExists(oldEnvPath)) {
                        await fsExtra.move(oldEnvPath, newEnvPath);
                    }
                    const packageJson = await fsExtra.readJson(`${newPath}/Backend/package.json`);
                    packageJson.name = `${BackendName}`;
                    packageJson.author = "Muhammad Rabee";

                    await fsExtra.writeJson(`${newPath}/Backend/package.json`, packageJson, { spaces: 2 });

                    console.log(chalk.yellow("\nMake sure you install dependencies..\n"));
                } else {
                    console.log(chalk.redBright("\nProject creation cancelled. Please Try Again when you have an internet connection."));
                    process.exit(0);
                }
            });

        } else {
            console.log(chalk.yellow("\nSetting up Backend...\n"));


            const __filename = fileURLToPath(import.meta.url);
            const __dirname = path.dirname(__filename);
            const templatePath = path.join(__dirname, "..", "template");

            await fsExtra.ensureDir(`${newPath}/Backend`);

            await fsExtra.copy(`${templatePath}/server${backendType}`, `${newPath}/Backend`);
            const oldEnvPath = path.join(`${newPath}/Backend`, '.env.example');
            const newEnvPath = path.join(`${newPath}/Backend`, '.env');

            if (await fsExtra.pathExists(oldEnvPath)) {
                await fsExtra.move(oldEnvPath, newEnvPath);
                console.log(chalk.blue("  - Created .env file from template"));
            }
            const spinner = ora({
                text: 'Installing Dependencies.... This might take some Time',
                spinner: 'clock'
            }).start();


            execSync(`npm install`, { cwd: `${newPath}/Backend`, stdio: 'inherit' });

            spinner.succeed('Dependencies installed successfully!');
            const packageJson = await fsExtra.readJson(`${newPath}/Backend/package.json`);
            packageJson.name = `${BackendName}`;
            packageJson.author = "Muhammad Rabee";
            await fsExtra.writeJson(`${newPath}/Backend/package.json`, packageJson, { spaces: 2 });


        }
        console.log(chalk.yellow("\nBackend Setup Completed! Just update the .env File and You are Good to go...\n"));
    } catch (error) {
        console.log(chalk.red.bold("Got error during Backend Setup...."), error.message);
        process.exit(1);
    }
}