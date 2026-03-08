import fsExtra from "fs-extra/esm";
import { execSync } from "child_process";
import chalk from "chalk";
import { fileURLToPath } from "url";
import path from "path";

export const BackendOnly = async (newPath, backendType, BackendName) => {

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
    console.log(chalk.yellow("\nInstalling Dependencies.... This might take some Time\n"));
    console.time("\nInstallation Time");

    execSync(`npm install`, { cwd: `${newPath}/Backend`, stdio: 'inherit' });

    console.timeEnd("\nInstallation Time");
    const packageJson = await fsExtra.readJson(`${newPath}/Backend/package.json`);
    packageJson.name = `${BackendName}`;
    packageJson.author = "Muhammad Rabee";
    await fsExtra.writeJson(`${newPath}/Backend/package.json`, packageJson, { spaces: 2 });

    console.log(chalk.yellow("\nJust update the .env File and You are Good to go...\n"));
}