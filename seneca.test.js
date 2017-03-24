const seneca = require('./seneca');

test('The right add is valid', () => {
  var sampleEmail = 'sample@myseneca.ca';
  expect(seneca.isValidEmail(sampleEmail)).toBe(true);
});
