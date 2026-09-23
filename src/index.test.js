const { suma } = require('./index')

describe('suma', () => {
  test('suma dos números positivos', () => {
    expect(suma(2, 2)).toBe(4)
  })
})
