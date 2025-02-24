var tape = require('tape')

tape('Sample 1', (test) => {
    /**
        StringLiteral
        util/prop.js:5:7
        -       : 'object' === typeof key && 'function' === typeof key.exec //regexp
        +       : \"\" === typeof key && 'function' === typeof key.exec //regexp
     */
    test.plan(1)
    const prop = require('../util/prop');
    actual = prop(key = { exec: (data) => { return [true] } })('dummy value')
    test.assert(actual)
});

tape('Sample 2', (test) => {
    /**
        ConditionalExpression
        sinks/drain.js:27:23
        -                 else if(end && end !== true) {
        +                 else if(true) {
     */
    test.plan(1);
    const drain = require('../sinks/drain');

    const sink = drain((foo) => { }, false)
    actual = sink((bar, func) => {
        func(true, 'baz');
    })
    expected = undefined
    test.assert(actual === expected)
});

tape('Sample 3', (test) => {
    /**
        BlockStatement
        throughs/async-map.js:3:17
        -   function id (e) { return e }
        +   function id (e) {}
     */
    test.plan(1);
    const asyncMap = require('../throughs/async-map');
    test.assert(asyncMap(false)('foo') === 'foo')
});

tape('Sample 4', (test) => {
    /**
        ConditionalExpression
        sources/values.js:5:6
        -     if(!array)
        +     if(false)
     */
    test.plan(1);
    const values = require('../sources/values');
    test.assert(values(false, 'foo')(false, (arg) => { return arg }))
});

// ABANDONED
// tape('Sample 5', (test) => {
//     /**
//         ConditionalExpression
//         sinks/find.js:22:8
//         -       cb(err === true ? null : err, null)
//         +       cb(true ? null : err, null)
//      */
//     test.plan(1);
//     const find = require('../sinks/find');
//     test.equals(find(e => e, e => e)(e => e), undefined)
// });

// EQUIVALENT. Reason: modification happens at the end of the loop's
// body. If the loop has more iterations left, sync is set back to true
// anywayl If it doesn't, there is still no effect since sync is a variable
// that is local to the function.
// tape('Sample 6', (test) => {
//     /**
//         BooleanLiteral
//         throughs/filter.js:19:16
//         -           sync = false
//         +           sync = true
//      */
//     test.plan(1)
//     const filter = require('../throughs/filter');

//     const reader = filter({ 'test': e => e })

//     let called = false
//     const read = (end, func) => {
//         if (!called) {
//             called = true
//             func.apply(this, [false, false])
//         } else {
//             read = (end, func) => { }
//         }
//     };
//     const next = reader(read)
//     next(false, () => { })

//     test.assert(callCount === 1)
// });

// SUSPECT THIS IS AN EQUIVALENT MUTANT. Reason: Deleting case return statement makes
// the length === 2 case default to the length === 3 case, but the length === 3 case
// looks as though it would handle the data in the same way, performing the same 
// sequence of actions.
// tape('Sample 7', (test) => {
//     /**
//         ConditionalExpression
//         pull.js:22:7
//         -         case 2: return pull(read, ref[0], ref[1])
//         +         case 2:
//      */
//     test.plan(1)
//     const pull = require('../pull');
//     pull(e => e, 'foo')()
//     test.equals(pull(e => e, 'foo')('special'), 48)
// });

tape('Sample 8', (test) => {
    /**
        BlockStatement
        util/tester.js:3:17
        -   function id (e) { return e }
        +   function id (e) {}
     */
    test.plan(1);
    const tester = require('../util/tester');
    test.assert(tester(false)('a') === 'a')
});

// ABANDONED
// tape('Sample 9', (test) => {
//     /**
//         BooleanLiteral
//         sinks/find.js:22:16
//         -       cb(err === true ? null : err, null)
//         +       cb(err === false ? null : err, null)
//      */
//     test.plan(1);
//     const find = require('../sinks/find');

//     find(false, () => { })
//     test.assert('a' === 'a')
// });

tape('Sample 10', (test) => {
    /**
        EqualityOperator
        util/prop.js:5:7
        -       : 'object' === typeof key && 'function' === typeof key.exec //regexp
        +       : 'object' !== typeof key && 'function' === typeof key.exec //regexp
     */
    test.plan(1);
    const prop = require('../util/prop');
    test.equals(prop({ "exec": e => e })('foo'), 'f')
});