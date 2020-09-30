import { Template } from './template';

const basicTemplate: Template = {
  name: 'inversify',
  dependencies: [],
  packageJson: {
    dependencies: {
      '@vf-team5/logger': '^0.0.47',
      '@vf-team5/types': '^0.0.47',
      'aws-sdk': '^2.763.0',
      inversify: '^5.0.1',
      'inversify-inject-decorators': '^3.1.0',
      'reflect-metadata': '^0.1.13',
    },
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
