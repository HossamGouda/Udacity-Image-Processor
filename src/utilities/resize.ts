import sharp from 'sharp'

const resize = async (
  fileSource: string,
  resultPath: string,
  width: number,
  height: number
): Promise<void> => {
  await sharp(fileSource).resize(width, height).toFile(resultPath)
}

export default resize
