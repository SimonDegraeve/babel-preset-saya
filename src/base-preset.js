/**
 *
 */
import transformFlowStripTypes from 'babel-plugin-transform-flow-strip-types';
import transformModuleExports from 'babel-plugin-add-module-exports';
import transformEs3MemberExpressionLiterals from 'babel-plugin-transform-es3-member-expression-literals';
import transformEs3PropertyLiterals from 'babel-plugin-transform-es3-property-literals';
import transformClassProperties from 'babel-plugin-transform-class-properties';
import transformObjectRestSpread from 'babel-plugin-transform-object-rest-spread';
import transformExportExtensions from 'babel-plugin-transform-export-extensions';
import transformRegenerator from 'babel-plugin-transform-regenerator';
import transformRuntimeNodent from 'fast-async';


/**
 *
 */
const preset = {
  presets: [
    ['es2015', { loose: true }],
  ],

  plugins: [
    // Flow
    transformFlowStripTypes,

    // Legacy
    transformModuleExports,
    transformEs3PropertyLiterals,
    transformEs3MemberExpressionLiterals,

    // Unstable
    transformClassProperties,
    transformObjectRestSpread,
    transformExportExtensions,

    // Runtime
    [transformRegenerator, {
      // Async functions are converted to generators by babel-preset-latest
      async: false,
    }],
    [transformRuntimeNodent, {
      env: {
        augmentObject: false,
        dontMapStackTraces: true,
        dontInstallRequireHook: true,
      },
      compiler: {
        promises: true,
        generators: false,
      },
      useRuntimeModule: true,
    }],
  ],
};

export default preset;
