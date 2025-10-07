export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // New feature
        'fix', // Bug fix
        'docs', // Documentation
        'style', // Formatting
        'refactor', // Code refactoring
        'test', // Adding tests
        'chore', // Maintenance tasks
        'perf', // Performance
        'build', // Build system
        'ci', // CI configuration
        'revert', // Revert changes
      ],
    ],
    'scope-empty': [2, 'never'],
    'subject-case': [2, 'always', 'lower-case'],
  },
};
