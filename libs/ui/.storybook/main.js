const { mergeConfig } = require('vite');
const angular = require('@analogjs/vite-plugin-angular');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
  ],
  "framework": "@storybook/angular",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "staticDirs": [
  ],
  async viteFinal(config, { configType }) {
    // return the customized config
    return mergeConfig(config, {
      plugins: [angular.default()],
    });
  },  
}