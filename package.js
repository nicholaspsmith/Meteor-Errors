Package.describe({
  name: 'npsjsdev:errors',
  version: '0.0.1',
  summary: '',
  git: 'https://github.com/nicholaspsmith/Meteor-Errors',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.addFiles('errors.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('npsjsdev:errors');
  api.addFiles('errors-tests.js');
});
