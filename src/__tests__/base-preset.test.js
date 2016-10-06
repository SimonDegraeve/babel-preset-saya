/**
 *
 */
import { transform } from 'babel-core';
import preset from '../base-preset';


/**
 *
 */
test('export a valid Babel preset', () => {
  const { code } = transform('const obj = { a: 1, b: 2};\n const { a } = obj;', {
    babelrc: false,
    presets: [preset],
  });

  expect(code).toBe('"use strict";\n\nvar obj = { a: 1, b: 2 };\nvar a = obj.a;');
});
