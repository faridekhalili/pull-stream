describe('augmented tests', () => {

  test('Sample 4', () => {
    /**
        ConditionalExpression
        sources/values.js:5:6
        -     if(!array)
        +     if(false)
     */
    expect.assertions(1)
    const values = require('../sources/values');
    expect(values(false, 'foo')(false, (arg) => { return arg })).toBeTruthy()
  });
  
});