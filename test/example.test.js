// IMPORT MODULES under test here:
// import example from '../src/example.js';
import isYes from '../is-yes.js';


const test = QUnit.test;

test('YesIsEqualtoTrue', function(assert) {
    const input = 'Yes';
    const expected = true;

    const result = isYes(input);

    assert.equal(result, expected);

});

test('YIsEqualtoTrue', function(assert) {
    const input = 'Y';
    const expected = true;

    const result = isYes(input);

    assert.equal(result, expected);

});

test('YIsEqualtoTrue', function(assert) {
    const input = 'Ye';
    const expected = true;

    const result = isYes(input);

    assert.equal(result, expected);

});

test('yIsEqualtoTrue', function(assert) {
    const input = 'y';
    const expected = true;

    const result = isYes(input);

    assert.equal(result, expected);

});

test('NoIsEqualtoFalse', function(assert) {
    const input = 'No';
    const expected = false;

    const result = isYes(input);

    assert.equal(result, expected);

});
















    //Arrange
    // Set up your parameters and expectations
 
    //Act 
    // Call the function you're testing and set the result to a const

    //Assert
    // Make assertions about what is expected valid result
  

