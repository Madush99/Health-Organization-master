module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'react-app',
    'react-app/jest',
    'prettier',
  ],
  rules: {'prettier/prettier': ['warn', {endOfLine: 'auto'}]},
};
