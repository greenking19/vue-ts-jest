const path = require('path')

module.exports = {
    rootDir: path.resolve(__dirname),
    clearMocks: true,
    coverageDirectory: 'coverage',
    coverageProvider: 'v8',
    moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx', 'node'],
    // 别名设置
    moduleNameMapper: {
        '@src/(.*)$': '<rootDir>/src/$1'
    },
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    // test filr
    testMatch: ['<rootDir>/tests/scripts/*.spec.ts', '<rootDir>/tests/components/*.spec.ts'],
    transform: {
        '^.+\\.vue$': 'vue-jest',
        '^.+\\.ts$': 'ts-jest',
        '^.+\\.(t|j)sx?$': 'ts-jest'
    }
}