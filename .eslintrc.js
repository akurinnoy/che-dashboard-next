/*
 * Copyright (c) 2018-2020 Red Hat, Inc.
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Red Hat, Inc. - initial API and implementation
 */

module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest-dom/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:testing-library/react',
  ],
  ignorePatterns: [
    '.github/',
    '.vscode/',
    'assets/',
    'build/',
    'coverage/',
    '*.js',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint',
    'jest-dom',
    'notice',
    'react',
    'testing-library',
  ],
  rules: {
    'linebreak-style': [
      'error',
      'unix'
    ],
    quotes: [
      'error',
      'single'
    ],
    semi: [
      'error',
      'always'
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        'max': 1,
        'maxEOF': 1,
      }
    ],
    'notice/notice': [
      'error',
      {
        templateFile: '.config/copyright.js',
        onNonMatchingHeader: 'report',
        messages: {
          reportAndSkip: 'Missing license header',
        },
      },
    ],
    'spaced-comment': 'error',
    'no-warning-comments': [
      'warn',
      {
        'terms': ['todo'],
        'location': 'start'
      }
    ],
    'testing-library/no-render-in-setup': 'error',
    'testing-library/no-wait-for-empty-callback': 'error',
    'testing-library/prefer-explicit-assert': 'error',
    'testing-library/prefer-presence-queries': 'error',
    'testing-library/prefer-screen-queries': 'error',
    'testing-library/prefer-wait-for': 'error',
    // TODO enable rules below and fix errors
    // '@typescript-eslint/ban-types': 'off',
    // '@typescript-eslint/explicit-module-boundary-types': 'off',
    // '@typescript-eslint/no-explicit-any': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
