import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import prettier from 'eslint-config-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next',
    'next/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended'
  ),
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    rules: {
      'no-console': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'react/no-unescaped-entities': 'off',
    },
  },
  {
    rules: {
      ...prettier.rules,
    },
  },
];

export default eslintConfig;
