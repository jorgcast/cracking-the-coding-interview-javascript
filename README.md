# cracking-the-coding-interview-javascript

 🧁 JavaScript Solutions and code for the book "Cracking the coding interview" (6th Edition).

## How to test the code

This project uses `mocha` for testing and `babel` to use ES Modules in the spec files.

Run `npm install` to install all the project dependencies.\
Run `npm test` to check all the test files.\
Run `npm run test-chapter` to check all the tests in a chapter.\
Run `npm run test-question` to check only the tests of a specific question, i.e. `exercise_1.1.spec.js` file.

Modify `test-chapter` and `test-question` (or add new scripts) in order to check the tests that you want.\
For example:

    "test-chapter": "mocha './test/chapter04/*.spec.js' --require babel-register -w --watch-files src",
    "test-question": "mocha './test/chapter01/question_1.7.spec.js' --require babel-register -w --watch-files src"
