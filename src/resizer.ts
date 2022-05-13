import sharp from 'sharp'

const resize = async (
  source: string,
  target: string,
  width: number,
  height: number
): Promise<void> => {
  await sharp(source).resize(width, height).toFile(target)
}

export default resize
