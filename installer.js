#!/usr/bin/env node
import fsExtra from "fs-extra/esm";
import inquirer from "inquirer";
import { BackendOnly } from "./Configuration/BackendOnly.js";
import { execSync } from "child_process";
import path from "path";
import chalk from "chalk";
import { FrontendOnly } from "./Configuration/FrontendOnly.js";

const practice = async () => {
    try {
        console.clear();
        console.log(chalk.greenBright("\n 🚀 Welcome to Rabee Node CLI v2.2.0\n"));

        const answer = await inquirer.prompt([{
            type: 'input',
            name: 'ProjectName',
            message: 'Write the Name of main Folder',
            validate: (input) => {
                if (input.trim() === '') {
                    return 'Project name cannot be empty';
                } else if (input.includes(' ')) {
                    return 'Project name cannot contain spaces';
                }
                return true;
            }

        }, {
            type: 'rawlist',
            name: 'FrontendBackend',
            message: 'What you want to create ?',
            choices: [
                'Frontend', 'Backend', 'Both'
            ]
        }, {
            type: 'rawlist',
            name: 'BackendType',
            message: 'Which Backend Template you want to use?',
            choices: [
                'MongoDB', 'Sqlite'
            ],
            when: (answers) => answers.FrontendBackend !== 'Frontend'
        }, {
            type: 'rawlist',
            name: 'OpenVsCode',
            message: 'Do you want to open the project in VS Code After Creation?',
            choices: [
                'Yes', 'No'
            ]
        }

        ]);

        const newPath = path.join(process.cwd(), answer.ProjectName);
        await fsExtra.pathExists(newPath).then (async exists => {
            if (exists) {
                await inquirer.prompt([{
                    type: 'confirm',
                    name: 'overwrite',
                    message: `\nA folder with the name "${answer.ProjectName}" already exists. Do you want to overwrite it?`

                }]).then(async overwriteAnswer => {
                    if (overwriteAnswer.overwrite) {
                        await fsExtra.emptyDir(newPath);
                    } else {
                        console.log(chalk.redBright("\nProject creation cancelled. Please choose a different name or remove the existing folder."));
                        process.exit(0);
                    }
                });
            }
        })

        if (answer.FrontendBackend == 'Both') {
            await FrontendOnly(newPath,"Redux", `${answer.ProjectName}`);
            await BackendOnly(newPath, answer.BackendType, answer.ProjectName);
            if (answer.OpenVsCode == 'Yes') {
                execSync(`code ${newPath}/Frontend`, { stdio: 'inherit' });
                execSync(`code ${newPath}/Backend`, { stdio: 'inherit' });
            }
        } else if (answer.FrontendBackend == 'Frontend') {
            await FrontendOnly(newPath,"Redux", `${answer.ProjectName}`);
            if (answer.OpenVsCode == 'Yes') {
                execSync(`code ${newPath}/Frontend`, { stdio: 'inherit' });
            }
        } else {
            await BackendOnly(newPath, answer.BackendType, answer.ProjectName);
            if (answer.OpenVsCode == 'Yes') {
                execSync(`code ${newPath}/Backend`, { stdio: 'inherit' });
            }
        }

        console.log(chalk.greenBright("projects Created Successfully \n"));

    } catch (error) {
            console.log(chalk.bold.red.bgWhiteBright("\nGot the error While Creating Project : \n"), error);
            process.exit(1);
    }
}

practice();