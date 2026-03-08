import fsExtra from "fs-extra/esm";
import { execSync } from "child_process";
import chalk from "chalk";
import { fileURLToPath } from "url";
import path from "path";

export const FrontendOnly = async (newPath, frontendType, FrontendName) => {
    await fsExtra.ensureDir(`${newPath}/Frontend`);
    console.log(chalk.yellow("\nFrontend templates are currently in development and will be available in v1.1.0!\n"));
    // const __filename = fileURLToPath(import.meta.url);
    // const __dirname = path.dirname(__filename);
    // const templatePath = path.join(__dirname, "..", "template");


    // await fsExtra.copy(`${templatePath}/frontend${frontendType}`, `${newPath}/Frontend`);

    // console.log(chalk.yellow("\nInstalling Dependencies.... This might take some Time\n"));
    // console.time("\nInstallation Time");

    // execSync(`npm install`, { cwd: `${newPath}/Frontend`, stdio: 'inherit' });

    // console.timeEnd("\nInstallation Time");
    // const packageJson = await fsExtra.readJson(`${newPath}/Frontend/package.json`);
    // packageJson.name = `${FrontendName}`;
    // packageJson.author = "Muhammad Rabee";
    // await fsExtra.writeJson(`${newPath}/Frontend/package.json`, packageJson, { spaces: 2 });

}