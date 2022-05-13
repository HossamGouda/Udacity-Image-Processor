import * as fs from 'fs'

const makeDir = (target: string): void => {
  return fs.mkdirSync(target)
}

const imaExtension=(imageName:string) : boolean=>{
  return imageName.includes('.jpg' || '.jpeg' || '.png' || '.gif')
}

const exsist=(file:string):boolean=>{
  return fs.existsSync(file)
}

module.exports = {
  makeDir,
  imaExtension,
  exsist,

}

// import { existsSync, mkdirSync } from "fs";

// const checkType = (fileName: string): boolean => {
//   return fileName.includes(".jpg" || ".jpeg" || ".png" || ".gif"); // check if the file doesn't include an extension
// };

// const fileExists = (imageLocation: string): boolean => {
//   return existsSync(imageLocation); // return whether or not the file exists synchronously
// };

// const createDir = (dirLocation: string) : void => {
//   return mkdirSync(dirLocation);
// }

// export { checkType, fileExists, createDir };
