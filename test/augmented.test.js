describe('augmented tests', () => {

  test('Sample 3', () => {
    /**
        BlockStatement
        throughs/async-map.js:3:17
        -   function id (e) { return e }
        +   function id (e) {}
    */
    expect.assertions(1)
    const asyncMap = require('../throughs/async-map');
    expect(asyncMap(false)('foo')).toBe('foo')
  });
});