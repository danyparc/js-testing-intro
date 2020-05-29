const { generateText, checkAndGenerate } = require('./util');

describe('generateText function', () => {
  test('When passing valid values should, it should output name and age in a friendly way', () => {
    const text = generateText('Max', 29);
    expect(text).toBe('Max (29 years old)');
  });
})

describe('checkAndGenerate function', () => {
  test('When passing valid values, should generate a valid text output', () => {
    const text = checkAndGenerate('Max', 29);
    expect(text).toBe('Max (29 years old)')
  });
  test('When passing invalid values, it should return false', () => {
    const text = checkAndGenerate('', 0);
    expect(text).toBe(false)
  });
});
