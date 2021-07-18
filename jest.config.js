module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'node',
  coveragePathIgnorePatterns: ['/node_modules/'],
  transform: { '.(js|jsx|tx|tsx)': '@sucrase/jest-plugin' },
  testMatch: ['**/__tests__/**/*.test.js?(x)'],
  setupFilesAfterEnv: ['./jest.setup.js'],
};
