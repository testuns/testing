Router.configure({
	notFoundTemplate: 'NotFound',
	loadingTemplate:'loading'
});

Iron.Router.hooks.loading = function(){
	if (this.ready()) {
		this.next();
		return;
	}

	var template = this.lookupOption('loadingTemplate');
	this.layout('MasterLayout');
	this.render(template || defaultLoadingTemplate);
	this.renderRegions();

};

if(Meteor.isClient){

	Router.onBeforeAction(function () {

		this.layout('MasterLayout');
		Session.set('fullWidthHeight', false);
		Session.set('footerOverlay', false);
		this.next();
	}, {
		except: 'Login'
	});

}