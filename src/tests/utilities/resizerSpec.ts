import resize from '../../utilities/resize'

it('Test The resize function ', async () => {
  const testFileSource = './assets/fjord.jpg'
  const testResultPath = './assets/thumbs/fjord-thumbs-100-200.jpg'
  const testWidth = 100
  const testHeight = 200

  const result = await resize(
    testFileSource,
    testResultPath,
    testWidth,
    testHeight
  )
  expect(result).not.toBeNull
})
