import type { Config } from 'jest';
import { defaults } from 'jest-config';

const config: Config = {
	moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
	modulePathIgnorePatterns: ['<rootDir>/build/'],
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	collectCoverageFrom: ['./src/**/*.{ts,tsx}', '!./src/index.ts'],
	setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
	coverageThreshold: {
		global: {
			branches: 90,
			functions: 90,
			lines: 90,
			statements: -10,
		},
	},
};

export default config;
