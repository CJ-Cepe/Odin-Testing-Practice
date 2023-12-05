import { capitalize, reverse, calculator, analyzeArray} from './index';

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
    expect(calculator.add(a, b)).toBe(30)
  }) 

  test('Subtraction', ()=> {
    expect(calculator.subtract(a, b)).toBe(10)
  });

  test('Multiplication', ()=> {
    expect(calculator.multiply(a, b)).toBe(200)
  });

  test('Division', ()=> {
    expect(calculator.divide(a, b)).toBe(2)
  });
})

/*
A caesarCipher function that takes a string and a shift factor 
  and returns it with each character “shifted”. Read more 
  about how a Caesar cipher works on this website.

--i'll comback to this someday!? need to rush studying due to poverty :<
*/ 
test.todo('Caesar Cipher');