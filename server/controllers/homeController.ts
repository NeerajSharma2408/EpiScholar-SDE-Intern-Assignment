import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import { spawnSync } from 'child_process';
// import { PythonShell, PythonShellErrorWithLogs } from 'python-shell';
import fs from 'fs/promises'

import homeObject from "../lib/homeObject";

const homeController = expressAsyncHandler(async (req: Request, res: Response) => {
    // TODO: REMOVE BELOW CODE
    // const package_name = 'pandas'
    // let options = {
    //     args : [package_name]
    // }
    // PythonShell.run('./scripts/install_package.py', options).then((results)=>{
    //     console.log(results)
    // }).catch((err: PythonShellErrorWithLogs)=>{
    //     console.log(err);
    //     res.status(500);
    // });

    // WILL GIVE DIRECT PIP BUILD COMMAND
    // const pythonProcess = spawnSync(process.env.NODE_ENV == "DEV" ? 'py' : 'python', [
    //     './scripts/install_package.py',
    //     'install_pandas'
    // ]);
    // const result = pythonProcess.stdout?.toString()?.trim();
    // const error = pythonProcess.stderr?.toString()?.trim();
    // console.log({result, error});

    res.status(200).json({ message: "Get Route", homeObject });
});

const dataController = expressAsyncHandler(async (req: Request, res: Response) => {

    const pythonProcess = spawnSync(process.env.NODE_ENV == "DEV" ? 'py' : 'python', [
        './scripts/python-script.py',
        'extract_data',
        './scripts/args.json',
        './scripts/extractedData.json'
    ]);
    const result = pythonProcess.stdout?.toString()?.trim();
    const error = pythonProcess.stderr?.toString()?.trim();
    
    console.log({result, error});

    let response = await fs.readFile('./scripts/extractedData.json', 'utf-8');
    let global_data = JSON.parse(response);

    res.status(200).json({ message: "Global Data Fetched", global_data })
});

export { homeController, dataController }