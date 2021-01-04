const materialuiConfig = require('./material-ui.eslintrc');

module.exports = {

  // Use Material UI's own eslint config (downloaded in postinstall step) as a base rule set to derive from
  ...materialuiConfig,

  rules: {

    ...materialuiConfig.rules,
    'material-ui/docgen-ignore-before-comment': 'off'
  }
};
