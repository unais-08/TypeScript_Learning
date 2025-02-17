// **
//  * TypeScript Basics: A Comprehensive Guide
//  *
//  * This file covers TypeScript fundamentals in a structured way, including:
//  * 1. Basic Types
//  * 2. Arrays & Objects
//  * 3. Functions
//  * 4. Type Aliases
//  * 5. Interfaces
//  * 6. Union & Intersection Types
//  */

// -------------------- 1. Basic Types --------------------
/**
 * TypeScript provides static typing to JavaScript. Here are the basic types:
 * - string
 * - number
 * - boolean
 */
let myName: string = "Unais";
let age: number = 22;
let isDeveloper: boolean = true;
console.log(
  `My name is ${myName}, I am ${age} years old and I am a developer: ${isDeveloper}`
);

// -------------------- 2. Arrays & Objects --------------------
/**
 * TypeScript allows defining arrays and objects with specific types.
 */
let skills: string[] = ["JavaScript", "TypeScript", "React"];
skills.push("Node.js");
console.log("Skills:", skills);

// Defining an object
const person: { name: string; age: number; isEmployed: boolean } = {
  name: "Unais",
  age: 22,
  isEmployed: true,
};
console.log("Person:", person);

// -------------------- 3. Functions --------------------
/**
 * Functions in TypeScript can have typed parameters and return types.
 */
function greet(name: string): string {
  return `Hello, ${name}!`;
}
console.log(greet("Unais"));

// Function with optional and default parameters
function multiply(a: number, b: number = 2): number {
  return a * b;
}
console.log(multiply(5));
console.log(multiply(5, 3));

// 2. Type Aliases
// Type alias for ID
type ID = string | number;
const empID: ID = "djf"; // Can be string or number
console.log(`Employee ID: ${empID}`);

// 3. Interfaces
interface Book {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
  printAuthor(): void;
  printTitle(message: string): string;
}

// Extending an interface (Adding properties to existing interface)
interface Book {
  price: number;
}

// 4. Intersection Type
interface Novel extends Book {
  novelTheme: string;
  novelPublish: number;
}

// Example usage of interfaces
const sherlockHolmes: Novel = {
  isbn: 789,
  title: "Detective Sherlock Holmes",
  author: "Dr. Watson",
  price: 12,
  genre: "Novel",
  printAuthor() {
    console.log(`Author: ${this.author}`);
  },
  printTitle(message) {
    return `${this.title} ${message}`;
  },
  novelTheme: "A detective solving mysterious cases",
  novelPublish: 2003,
};

sherlockHolmes.printAuthor();
let result = sherlockHolmes.printTitle("is a Great Novel");
console.log(result);

const deepWork: Book = {
  isbn: 123,
  price: 10,
  title: "Deep Work",
  author: "Cal Newport",
  genre: "Self Help",
  printAuthor() {
    console.log(`Author: ${this.author}`);
  },
  printTitle(message) {
    return `${this.title} ${message}`;
  },
};

deepWork.printAuthor();
console.log(deepWork.printTitle("is an excellent book on focus"));

// 5. Union Type
function getBookInfo(id: ID): string {
  return typeof id === "number"
    ? `Fetching book with ISBN ${id}`
    : `Fetching book with ID ${id}`;
}
console.log(getBookInfo(123));
console.log(getBookInfo("abc-456"));

// 6. Intersection Type
interface EBook {
  format: "PDF" | "EPUB" | "MOBI";
  fileSize: number;
}

type DigitalBook = Book & EBook;

const atomicHabits: DigitalBook = {
  isbn: 567,
  title: "Atomic Habits",
  author: "James Clear",
  price: 15,
  format: "PDF",
  fileSize: 2,
  printAuthor() {
    console.log(`Author: ${this.author}`);
  },
  printTitle(message) {
    return `${this.title} ${message}`;
  },
};

atomicHabits.printAuthor();
console.log(atomicHabits.printTitle("is a must-read self-improvement book"));
