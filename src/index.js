// random-data-generator.js

/**
 * Generate a random integer between a minimum and maximum value (inclusive).
 * @param {number} min - The minimum value.
 * @param {number} max - The maximum value.
 * @returns {number} A random integer between min and max.
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  /**
   * Generate a random string of specified length.
   * @param {number} length - The length of the string to generate.
   * @returns {string} A random string of specified length.
   */
  function generateRandomString(length) {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return result;
  }
  
  /**
   * Generate a random email address.
   * @returns {string} A random email address.
   */
  function generateRandomEmail() {
    const usernameLength = getRandomInt(5, 10);
    const domainLength = getRandomInt(5, 10);
    return generateRandomString(usernameLength) + '@' + generateRandomString(domainLength) + '.com';
  }
  
  /**
   * Generate a random phone number.
   * @returns {string} A random phone number.
   */
  function generateRandomPhoneNumber() {
    return '+' + getRandomInt(1, 999) + '-' + getRandomInt(100, 999) + '-' + getRandomInt(1000000, 9999999);
  }
  
  // Export functions to be used by consumers of this package
  module.exports = {
    getRandomInt,
    generateRandomString,
    generateRandomEmail,
    generateRandomPhoneNumber
  };
  