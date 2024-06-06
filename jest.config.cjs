module.exports = {
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  transformIgnorePatterns: ['node_modules/(?!(@babel)/)'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'], // Add this line
};
