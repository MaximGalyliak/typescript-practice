let apples: number = 5;
const speed: string = 'fast';
const hasName: boolean = true;
const nothingMuch: null = null;
const nothing: undefined = undefined;
// built in objects
const now: Date = new Date();
// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
// Classes
class Car {}

let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i) => {
  console.log(i);
};
// When to use annotations
// Functions that returns the 'any' type
const json = '{"x":10, "y":20}';
const coordinates = JSON.parse(json);
console.log(coordinates);
