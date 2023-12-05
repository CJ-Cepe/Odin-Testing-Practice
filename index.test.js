import { capitalize, reverse, add, subtract, multiply, divide, analyzeArray} from './index';

describe('Testing Practice', () => {
  /*
  A capitalize function that takes a string and
    returns it with the first character capitalized.
  */
  test('Capitalize first character', () => {
    expect(capitalize('watermelon')).toEqual('Watermelon');
  });

  /*
  A reverseString function that takes a string and
    returns it reversed.
  */
  test('Reverse string', () => {
    expect(reverse('watermelon')).toEqual('nolemretaw');
  });

  /*
  An analyzeArray function that takes an array of numbers 
    and returns an object with the following properties: 
    average, min, max, and length.
  */
  test('Analyze array', ()=> {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6
      });
    })
  });

describe('Calculation', ()=>{
  let a = 20, b = 10;

  /*
  A calculator object that contains functions for the basic 
    operations: add, subtract, divide, and multiply. Each of 
    these functions should take two numbers and return the 
    correct calculation.
  */
  test('Addition', () => {
    expect(add(a, b)).toBe(30)
  }) 

  test('Subtraction', ()=> {
    expect(subtract(a, b)).toBe(10)
  });

  test('Multiplication', ()=> {
    expect(multiply(a, b)).toBe(200)
  });

  test('Division', ()=> {
    expect(divide(a, b)).toBe(2)
  });
})
