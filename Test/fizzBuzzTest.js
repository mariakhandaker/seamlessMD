const fizzBuzz = require('../fizzBuzz');
const chai = require('chai');
const assert = chai.assert;

describe('fizzBuzz', function() {
  it('should output Fizz for value divisible by 3', function() {
    let answer = fizzBuzz(15);
    assert.equal(answer, 'Fizz');
  });
  
  it('should output Buzz for value divisible by 5', function() {
    let answer = fizzBuzz(25);
    assert.equal(answer, 'Buzz');
  })
  
  it('should output empty string for prime number', function() {
    let answer = fizzBuzz(13);
    assert.equal(answer, '');
  })
});

