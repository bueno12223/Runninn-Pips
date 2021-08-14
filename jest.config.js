module.exports = {
  verbose: true,
  collectCoverage: true,
  setupFilesAfterEnv: ['<rootDir>/src/__test__/setupTest.js'],
  moduleNameMapper: {
    '\\.(styl|scss)$': '<rootDir>/src/__mocks__/styleMock.js'
  },
  testEnvironment: 'jsdom',
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
    '^.+\\.svg$': 'jest-svg-transformer'
  }
}
