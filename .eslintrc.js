module.exports = {
  globals: {
    __PATH_PREFIX__: true,
    window: true,
  },
  extends: ['airbnb', 'airbnb/hooks'],
  rules: {
    'react/jsx-filename-extension': 0,
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
  },
  parserOptions:
  {
    ecmaVersion: 2020,
  },
};
