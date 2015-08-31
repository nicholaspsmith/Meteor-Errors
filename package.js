Package.describe({
  name: 'npsjsdev:errors',
  version: '0.0.1',
  summary: 'Growl like notifications for errors. Created by following Discover Meteor tutorial.',
  git: 'https://github.com/nicholaspsmith/Meteor-Errors',
  documentation: 'README.md'
});

Package.onUse(function (api, where) {
  api.versionsFrom('0.9.0');

  api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');

  api.addFiles(['errors.js', 'errors_list.html', 'errors_list.js'], 'client');

  if (api.export)
    api.export('Errors');
});
