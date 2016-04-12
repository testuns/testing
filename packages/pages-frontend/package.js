Package.describe({
  name: 'xcubeio:pages-frontend',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3-modules-beta.4');
  api.use(['ecmascript','less']);
  api.addFiles('pages-frontend.js');

	api.addFiles('lib/pages.frontend.js', 'client');
	api.addFiles('lib/pages.frontend.min.js', 'client');
	api.addFiles('lib/pages.image.loader.js', 'client');
	api.addFiles('lib/pages.social.js', 'client');
	api.addFiles('lib/pages.social.min.js', 'client');

  api.addFiles('plugins/pace/pace.min.js', 'client');
  api.addFiles('plugins/swiper/js/swiper.jquery.js', 'client');
  api.addFiles('plugins/velocity/velocity.min.js', 'client');
  api.addFiles('plugins/velocity/velocity.ui.js', 'client');
  api.addFiles('plugins/jquery-appear/jquery.appear.js', 'client');
  api.addFiles('plugins/animateNumber/jquery.animateNumbers.js', 'client');

  api.addFiles('src/pages.frontend.js', 'client');

  api.addFiles('src/custom.js', 'client');

});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('xcubeio:pages-frontend');
  api.addFiles('pages-frontend-tests.js');
});
