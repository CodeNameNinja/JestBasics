/**
 * @typedef {Object} Functions
 * @property {function(number,number):number} add returns sum of two numbers
 * @property {function} isNull returns null
 * @property {function(...arg):*} checkValue returns the inputted arguments
 * @property {function():object} createUser creates a user and returns user
 */
/**
 * An Object of functions
 * @type {Functions}
 */
const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: ()=> null,
    checkValue: (x) => x,
    createUser: ()=>{
        const user =  {firstName: 'Mitchell'}
        user['lastName'] = "Yuen";
        return user;
    }
}

module.exports = functions