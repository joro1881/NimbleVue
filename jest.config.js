module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/components/$1'
  },
  testMatch: ['**/*.spec.{j,t}s?(x)'],
  clearMocks: true,
}
