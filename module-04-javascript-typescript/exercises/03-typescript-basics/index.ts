// TypeScript Basics Exercise
// Add type annotations to the following code

// TODO: Add type annotations to variables
let username: string = 'Alice';
let age: number = 25;
let isActive: boolean = true;
let scores: number[] = [95, 87, 92];

// TODO: Add type annotations to function parameters and return type
function greet( name: string, age: string) {
    return `Hello, ${name}! You are ${age} years old.`;
}

// TODO: Add type annotations
function calculateAverage(numbers) {
    const sum = numbers.reduce((total, n) => total + n, 0);
    return sum / numbers.length;
}

// TODO: Create an interface for a User object
// Properties: id (number), name (string), email (string), isAdmin (boolean)
interface User {
    // Add properties here
}

// TODO: Create a function that uses the User interface
function createUser(name, email, isAdmin = false) {
    return {
        id: Math.floor(Math.random() * 1000),
        name: name,
        email: email,
        isAdmin: isAdmin
    };
}

// TODO: Add type annotation for the users array
let users = [];

// TODO: Create an interface for a Product
interface Product {
    // id: number
    // name: string
    // price: number
    // inStock: boolean
}

// TODO: Create a function that takes an array of products
// and returns only products that are in stock
function getInStockProducts(products) {
    return products.filter(product => product.inStock);
}

// TODO: Add type annotation for union type
// A variable that can be either a number or a string
let id;

// TODO: Create a type alias for Status
// Status can be 'pending', 'active', or 'completed'
type Status = any; // Replace 'any' with union type

// TODO: Create a function that uses the Status type
function updateStatus(status) {
    console.log(`Status updated to: ${status}`);
}

// BONUS: Create a generic function
// This function should work with any type
function getFirstItem<T>(arr: T[]): T | undefined {
    return arr[0];
}

// Test the generic function
const firstNumber = getFirstItem([1, 2, 3]); // Should be number | undefined
const firstName = getFirstItem(['a', 'b', 'c']); // Should be string | undefined

console.log('TypeScript exercise loaded!');

/*
SOLUTIONS:

let username: string = 'Alice';
let age: number = 25;
let isActive: boolean = true;
let scores: number[] = [95, 87, 92];

function greet(name: string, age: number): string {
    return `Hello, ${name}! You are ${age} years old.`;
}

function calculateAverage(numbers: number[]): number {
    const sum = numbers.reduce((total, n) => total + n, 0);
    return sum / numbers.length;
}

interface User {
    id: number;
    name: string;
    email: string;
    isAdmin: boolean;
}

function createUser(name: string, email: string, isAdmin: boolean = false): User {
    return {
        id: Math.floor(Math.random() * 1000),
        name: name,
        email: email,
        isAdmin: isAdmin
    };
}

let users: User[] = [];

interface Product {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
}

function getInStockProducts(products: Product[]): Product[] {
    return products.filter(product => product.inStock);
}

let id: number | string;

type Status = 'pending' | 'active' | 'completed';

function updateStatus(status: Status): void {
    console.log(`Status updated to: ${status}`);
}
*/
