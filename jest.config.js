/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
export default {
  collectCoverageFrom: ['src/**/*.ts'],
  maxWorkers: '50%',
  preset: 'ts-jest',
  testEnvironment: 'node',
}
