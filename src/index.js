import moduleA from "./moduleA.js";

const valueA = "function A",
  valueB = "function B";

export function functionA() {
  return valueA;
}

export function functionB() {
  return valueB;
}

console.log(functionA())
console.log(functionB())

console.log(moduleA)