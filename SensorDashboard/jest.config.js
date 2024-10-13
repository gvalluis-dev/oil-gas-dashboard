module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom', 
    moduleNameMapper: {
      '\\.(css|less|scss)$': 'identity-obj-proxy', 
    },
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'], 
    testPathIgnorePatterns: ['/node_modules/', '/dist/'], 
    transform: {
      '^.+\\.tsx?$': 'ts-jest', 
    },
  };