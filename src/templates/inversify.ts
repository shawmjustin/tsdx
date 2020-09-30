import { Template } from './template';

const basicTemplate: Template = {
  name: 'inversify',
  dependencies: [
    '@vf-team5/logger',
    '@vf-team5/types',
    'aws-sdk',
    'inversify',
    'inversify-inject-decorators',
    'reflect-metadata',
  ],
  packageJson: {
    // name: safeName,
    version: '0.1.0',
    license: 'MIT',
    // author: author,
    main: 'dist/index.js',
    // module: `dist/${safeName}.esm.js`,
    typings: `dist/index.d.ts`,
    files: ['dist', 'src'],
    directories: {
      lib: 'src',
      test: 'test',
    },
    engines: {
      node: '>=10',
    },
    scripts: {
      i: 'npm i',
      ci: 'npm ci',
      prepare:
        'rm -rf dist && ../../node_modules/.bin/webpack --mode development --config webpack.config.js',
    },
    peerDependencies: {},
    prettier: {
      printWidth: 80,
      semi: true,
      singleQuote: true,
      trailingComma: 'es5',
    },
  },
};

export default basicTemplate;
