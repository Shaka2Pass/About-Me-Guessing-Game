import numCompare from '../numCompare.js'

const test = QUnit.test;

test ('Guess is the same as expected', function(assert) {

const input  = 5;
const expected = 0;

const result = numCompare(input, 5);

assert.equal(result,expected);
});

test ('Guess is one less than expected', function(assert) {

    const input  = 4;
    const expected = -1;
    
    const result = numCompare(input, 5);
    
    assert.equal(result,expected);
    });

test ('The guess is 3 greater than expected', function(assert) {

    const input  = 6;
    const expected = 1;
        
    const result = numCompare(input, 5);
        
    assert.equal(result,expected);
    });
