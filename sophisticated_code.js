// Filename: sophisticated_code.js
// Description: Complex and professional code showcasing advanced concepts in JavaScript

// Class representing a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to greet
  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// Class representing a Student, extending Person
class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  // Method to display student's major
  displayMajor() {
    console.log(`${this.name} is majoring in ${this.major}.`);
  }
}

// Function to perform factorial calculation recursively
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// Array of prime numbers
const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];

// Object representing a book
const book = {
  title: 'JavaScript: The Good Parts',
  author: 'Douglas Crockford',
  publicationYear: 2008,
  ratings: [4, 5, 4.5, 4.2],
  displayRatings() {
    this.ratings.forEach((rating) => {
      console.log(`- ${rating}`);
    });
  },
};

console.log('=== Welcome to sophisticated code! ===');

const person1 = new Person('John', 28);
person1.greet();

const student1 = new Student('Emma', 21, 'Computer Science');
student1.greet();
student1.displayMajor();

console.log(`Factorial of 5: ${factorial(5)}`);
console.log(`Is 13 prime? ${isPrime(13)}`);
console.log(`Prime numbers: ${primeNumbers}`);

console.log('Book Details:');
console.log(`Title: ${book.title}`);
console.log(`Author: ${book.author}`);
console.log(`Publication Year: ${book.publicationYear}`);
console.log('Ratings:');
book.displayRatings();

// ... more code ...
// ... additional functions, classes, and complex logic ...

console.log('=== End of sophisticated code execution ===');
// ... more code ...

// This code goes beyond simple examples by showcasing classes, inheritance,
// recursion, complex functions, mathematical operations, arrays, objects, and more.
// It can be used to demonstrate advanced JavaScript concepts and best coding practices.