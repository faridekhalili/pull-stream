describe('augmented tests', () => {
  test('Sample 1', () => {
    /**
        StringLiteral
        util/prop.js:5:7
        -       : 'object' === typeof key && 'function' === typeof key.exec //regexp
        +       : \"\" === typeof key && 'function' === typeof key.exec //regexp
     -------------------------------------------------------------------------------
      EqualityOperator
        util/prop.js:5:7
        -       : 'object' === typeof key && 'function' === typeof key.exec //regexp
        +       : 'object' !== typeof key && 'function' === typeof key.exec //regexp
    */
    expect.assertions(1)
    const prop = require('../util/prop');
    const actual = prop({ exec: (data) => { return [true] } })('dummy value')
    expect(actual).toBeTruthy()
  });
  
});