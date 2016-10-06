/**
 *
 */
import { transform } from 'babel-core';
import preset from '../react-preset';


/**
 *
 */
test('export a valid Babel preset', () => {
  const { code } = transform('const component = () => <div></div>', {
    babelrc: false,
    presets: [preset],
  });

  expect(code).toBe('const component = () => React.createElement("div", null);');
});
