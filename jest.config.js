module.exports = {
  verbose: true,
  testMatch: [ "**/tests/integration/app/**/?(*.)+(test).[jt]s?(x)" ],
  moduleNameMapper: {
    "\\.(css|svg)$": "identity-obj-proxy"
  },
  setupFilesAfterEnv: ['<rootDir>/tests/integration/app/setupTests.js']
}