describe('augmented tests', () => {
  test('Sample 2', () => {
    /**
        ConditionalExpression
        sinks/drain.js:27:23
        -                 else if(end && end !== true) {
        +                 else if(true) {
     */
    expect.assertions(1)
    const drain = require('../sinks/drain');

    const sink = drain((foo) => { }, false)
    const actual = sink((bar, func) => {
        func(true, 'baz');
    })
    const expected = undefined
    expect(actual).toBe(expected)
  });
});