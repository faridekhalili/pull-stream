describe('augmented tests', () => {
  test('Sample 8', () => {
    /**
        BlockStatement
        util/tester.js:3:17
        -   function id (e) { return e }
        +   function id (e) {}
     */
    expect.assertions(1)
    const tester = require('../util/tester');
    expect(tester(false)('a')).toBe('a')
  });
});