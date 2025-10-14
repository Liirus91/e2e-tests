module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.spec.ts', '**/tests/**/*.test.ts'],
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testTimeout: 30_000,
  reporters: ['default'],
};
