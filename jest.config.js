module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/'
  ],
  coverageProvider: 'v8',
  moduleDirectories: [
    'node_modules'
  ],
  modulePathIgnorePatterns: [
    '/dist'
  ],
  resetMocks: false,
  resetModules: false,
  rootDir: 'src',
  testPathIgnorePatterns: [
    '/node_modules/'
  ],
  verbose: true,
  preset: 'ts-jest'
}
