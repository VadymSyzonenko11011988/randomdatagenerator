# Random Data Generator

## Introduction

This is a lightweight JavaScript package for generating random data such as integers, strings, email addresses, and phone numbers. It can be useful for testing, prototyping, and generating sample data.

## Installation

To install the package, you can use npm:

```bash
npm install random-data-generator
```

## Usage

### Generating Random Integers

To generate a random integer between a minimum and maximum value (inclusive), use the `getRandomInt` function:

```javascript
const { getRandomInt } = require('random-data-generator');

const min = 1;
const max = 100;
const randomInt = getRandomInt(min, max);
console.log(randomInt);
```

### Generating Random Strings

To generate a random string of a specified length, use the `generateRandomString` function:

```javascript
const { generateRandomString } = require('random-data-generator');

const length = 10;
const randomString = generateRandomString(length);
console.log(randomString);
```

### Generating Random Email Addresses

To generate a random email address, use the `generateRandomEmail` function:

```javascript
const { generateRandomEmail } = require('random-data-generator');

const randomEmail = generateRandomEmail();
console.log(randomEmail);
```

### Generating Random Phone Numbers

To generate a random phone number, use the `generateRandomPhoneNumber` function:

```javascript
const { generateRandomPhoneNumber } = require('random-data-generator');

const randomPhoneNumber = generateRandomPhoneNumber();
console.log(randomPhoneNumber);
```

## License

This package is licensed under the [MIT License](LICENSE).
