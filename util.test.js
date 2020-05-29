const { generateText } = require('./util');
describe('generateText function', () => {
  test('When passing valid values should, it should output name and age in a friendly way', () => {
    const text = generateText('Max', 29);
    expect(text).toBe('Max (29 years old)');
  });
})