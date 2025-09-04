import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import pluginAstro from 'eslint-plugin-astro';
import pluginImport from 'eslint-plugin-import';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';

export default [
  // Global ignore patterns
  {
    ignores: [
      '.astro/**',
      '.vercel/**',
      'dist/**',
      'node_modules/**',
      'build/**',
      'coverage/**',
    ],
  },

  // JavaScript/TypeScript files
  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
    plugins: {
      '@typescript-eslint': tseslint,
      react: pluginReact,
      import: pluginImport,
    },
    languageOptions: {
      parser: tsParser,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
        },
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.astro'],
        },
      },
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,

      // Import order rules
      'sort-imports': [
        'error',
        {
          ignoreCase: false,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        },
      ],
      'import/order': [
        'error',
        {
          groups: [
            'builtin', // node built-ins
            'external', // npm packages
            'internal', // alias imports -> @components, @lib, etc.
            ['parent', 'sibling', 'index'], // relative imports
            'type', // TypeScript types
          ],
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before', // always keep React on top
            },
            {
              pattern: '@/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '@components/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '@lib/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '@sections/**',
              group: 'internal',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: ['react'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],

      // React rules
      'react/react-in-jsx-scope': 'off', // Not needed in React 17+
      'react/prop-types': 'off', // Using TypeScript for prop validation
      '@typescript-eslint/no-explicit-any': ['off'],
    },
  },

  // TypeScript declaration files
  {
    files: ['**/*.d.ts'],
    rules: {
      'no-unused-vars': 'off', // Interfaces in declaration files are used by TypeScript compiler
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },

  // Astro files
  ...pluginAstro.configs.recommended,
];
