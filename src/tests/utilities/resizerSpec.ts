import resize from '../../utilities/resize'

it('Test resize function ', async () => {
  const result = await resize
  expect(result).not.toBeUndefined()
})
