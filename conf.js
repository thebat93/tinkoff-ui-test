exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  framework: 'jasmine',
  specs: ['tinkoff.js'],
  capabilities: {
    browserName: 'chrome'
  }
};