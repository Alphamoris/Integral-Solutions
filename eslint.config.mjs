import { createConfig } from '@eslint/eslintrc';
import js from '@eslint/js';
import nextPlugin from 'eslint-config-next';

const eslintrc = createConfig({ overrideConfig: {}, ignores: [] });

export default [
  {
    ignores: ['node_modules/**/*', '.next/**/*'],
  },
  {
    ...js.configs.recommended
  },
  ...nextPlugin,
  {
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-empty-object-type': 'off',
      'react/no-unescaped-entities': 'off',
      '@next/next/no-img-element': 'warn'
    }
  }
];
