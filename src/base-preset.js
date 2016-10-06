/**
 *
 */
import presetLatest from 'babel-preset-latest';
import transformFlowStripTypes from 'babel-plugin-transform-flow-strip-types';
import transformSyntaxFlow from 'babel-plugin-syntax-flow';
import transformModuleExports from 'babel-plugin-add-module-exports';
import transformEs3MemberExpressionLiterals from 'babel-plugin-transform-es3-member-expression-literals';
import transformEs3PropertyLiterals from 'babel-plugin-transform-es3-property-literals';
import transformClassProperties from 'babel-plugin-transform-class-properties';
import transformObjectRestSpread from 'babel-plugin-transform-object-rest-spread';
import transformRegenerator from 'babel-plugin-transform-regenerator';
import transformRuntimeNodent from 'fast-async';


/**
 *
 */
export default {
  presets: [
    [presetLatest, { es2015: { loose: true } }],
  ],

  plugins: [
    // Flow
    transformFlowStripTypes,
    transformSyntaxFlow,

    // Legacy
    transformModuleExports,
    transformEs3PropertyLiterals,
    transformEs3MemberExpressionLiterals,

    // Unstable
    transformClassProperties,
    transformObjectRestSpread,

    // Runtime
    [transformRegenerator, {
      // Async functions are converted to generators by babel-preset-latest
      ['async']: false, // eslint-disable-line no-useless-computed-key
                        // See https://github.com/eslint/eslint/issues/7232
    }],
    [transformRuntimeNodent, {
      compiler: {
        sourcemap: true,
        promises: true,
      },
      useModule: 'runtime-nodent',
    }],
  ],
};