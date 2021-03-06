// [INFO] See discussion of node.js exports here:
// https://www.sitepoint.com/understanding-module-exports-exports-node-js/

/**
* Given a string `email`, return `true` if the string is in the form
* of a valid Seneca College email address, `false` othewise.
*/
exports.isValidEmail = function f1(email) {
  return (/@myseneca.ca$/.test(email) || /@senecacollege.ca$/.test(email) || /@senecac.on.ca$/.test(email)) && !email.includes(' ');
};

/**
* Given a string `name`, return a formatted Seneca email address for
* this person. NOTE: the email doesn't need to be real/valid/active.
*/
exports.formatSenecaEmail = function f2(name) {
  return `${name}@myseneca.ca`;
};

