import {mult, splitIntoWord, sum} from "./01";


let a: number;
let b: number;
let c: number;

beforeEach(() => {
  a = 1;
  b = 2;
  c = 3;
})

test('sum should be correct', () => {

  //data


  //action
  const result1 = sum(a, b);
  const result2 = sum(b, c);


  //expect res
  expect(result1).toBe(3);
  expect(result2).toBe(5);

})

test('multiply should be correct', () => {


  //action
  const result1 = mult(a, b);
  const result2 = mult(b, c);


  //expect res
  expect(result1).toBe(2);
  expect(result2).toBe(6);

})

test('splitting into words should be correct', () => {
  const sent1 = 'Hello my friend!'
  const sent2 = 'JS - programming langiage.'

  const res1 = splitIntoWord(sent1);
  const res2 = splitIntoWord(sent2);

  expect(res1[0]).toBe('hello');
  expect(res1[1]).toBe('my');
  expect(res1[2]).toBe('friend');
})