import type { Config } from 'jest';
import { defaults } from 'jest-config';

const config: Config = {
	moduleFileExtensions: [...defaults.moduleFileExtensions, 'mts'],
	preset: 'ts-jest',
	testEnvironment: 'node',
	collectCoverageFrom: ['./src/**/*.{tsx,ts}'],
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
