import * as fs from 'fs'

const makeDir = (target: string): void => {
  return fs.mkdirSync(target)
}

const imaExtension = (imageName: string): boolean => {
  return imageName.includes('.jpg' || '.jpeg' || '.png' || '.gif')
}

const exsist = (file: string): boolean => {
  return fs.existsSync(file)
}

export { makeDir, imaExtension, exsist }
